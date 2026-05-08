<script setup lang="ts">
import DocumentDropzone from '~/components/DocumentDropzone.vue'
import EvidencePane from '~/components/EvidencePane.vue'
import LanguageToggle from '~/components/LanguageToggle.vue'
import QuestionnairePanel from '~/components/QuestionnairePanel.vue'
import RecommendationPanel from '~/components/RecommendationPanel.vue'
import { useClassificationEngine } from '~~/composables/useClassificationEngine'
import { useDocxParser } from '~~/composables/useDocxParser'
import { useHeuristicScanner } from '~~/composables/useHeuristicScanner'
import { useI18n } from '~~/composables/useI18n'
import { useLocalClassifierModel } from '~~/composables/useLocalClassifierModel'
import { deriveSuggestedAnswers } from '~~/lib/classification/suggested-answers'
import type {
  AnalysisChunk,
  ClassificationLabel,
  ClassificationRecommendation,
  DocumentParseResult,
  PrintReportData,
  QuestionnaireAnswers,
  SensitivitySignal
} from '~~/lib/classification/types'
import { questionDefinitions } from '~~/lib/classification/rubric'

const { locale, t } = useI18n()
const { parse } = useDocxParser()
const { scan } = useHeuristicScanner()
const { analyze, warmup, status: modelStatus } = useLocalClassifierModel()
const { recommend } = useClassificationEngine()

const documentResult = ref<DocumentParseResult | null>(null)
const signals = ref<SensitivitySignal[]>([])
const excerpt = ref('')
const modelChunks = ref<AnalysisChunk[]>([])
const parseError = ref<string | null>(null)
const isBusy = ref(false)
const isEnhancing = ref(false)
const recommendation = ref<ClassificationRecommendation | null>(null)
const report = ref<PrintReportData | null>(null)
const modelSummaryEn = ref('')
const modelSummaryFr = ref('')
const overrideLabel = ref<ClassificationLabel | ''>('')
const overrideReason = ref('')
const focusedSectionId = ref<string | null>(null)

const rulesOnlySummaryEn = 'Rules-first recommendation based on extracted markings, heuristics, and reviewer answers.'
const rulesOnlySummaryFr = 'Recommandation fondée d’abord sur les règles, les marquages détectés, les heuristiques et les réponses du réviseur.'
const rulesOnlyRationaleEn = 'Review the evidence excerpts and confirm the injury threshold manually before final release.'
const rulesOnlyRationaleFr = 'Examinez les extraits de preuve et confirmez manuellement le seuil de préjudice avant la diffusion finale.'

const answers = reactive<QuestionnaireAnswers>(
  Object.fromEntries(questionDefinitions.map((question) => [question.key, ''])) as QuestionnaireAnswers
)

const progress = computed(() => {
  const total = questionDefinitions.length + 2
  const completedAnswers = Object.values(answers).filter(Boolean).length
  const documentStep = documentResult.value ? 1 : 0
  const recommendationStep = recommendation.value ? 1 : 0
  return Math.round(((completedAnswers + documentStep + recommendationStep) / total) * 100)
})

const scanState = computed(() => {
  if (isBusy.value || isEnhancing.value) {
    return locale.value === 'fr' ? 'Analyse du document' : 'Scanning document'
  }

  if (recommendation.value) {
    return locale.value === 'fr' ? 'Terminé' : 'Complete'
  }

  return locale.value === 'fr' ? 'En attente d’un document' : 'Waiting for a document'
})

const finalLabel = computed<ClassificationLabel | undefined>(() =>
  overrideLabel.value ? overrideLabel.value : recommendation.value?.recommendedLabel
)

const resetDerivedState = () => {
  recommendation.value = null
  report.value = null
  modelSummaryEn.value = ''
  modelSummaryFr.value = ''
  overrideLabel.value = ''
  overrideReason.value = ''
  focusedSectionId.value = null
}

const focusSection = async (sectionId: string) => {
  focusedSectionId.value = sectionId
  await nextTick()
  document.getElementById(`section-${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const handleUpload = async (file: File) => {
  isBusy.value = true
  parseError.value = null
  resetDerivedState()

  for (const key of Object.keys(answers)) {
    answers[key] = ''
  }

  try {
    const parsed = await parse(file)
    documentResult.value = parsed

    const scanResult = scan(parsed)
    signals.value = scanResult.signals
    excerpt.value = scanResult.excerpt
    modelChunks.value = scanResult.chunks

    const suggestedAnswers = deriveSuggestedAnswers(parsed, signals.value)
    for (const key of Object.keys(suggestedAnswers)) {
      answers[key] = suggestedAnswers[key]
    }
  } catch (caught) {
    documentResult.value = null
    signals.value = []
    excerpt.value = ''
    modelChunks.value = []
    parseError.value = caught instanceof Error && caught.message === 'unsupported-format'
      ? 'Only `.docx` files are supported.'
      : 'The document could not be parsed.'
  } finally {
    isBusy.value = false
  }
}

const buildRecommendation = async () => {
  if (!documentResult.value) {
    return
  }

  modelSummaryEn.value = rulesOnlySummaryEn
  modelSummaryFr.value = rulesOnlySummaryFr

  recommendation.value = recommend({
    answers,
    signals: signals.value,
    modelAssist: {
      summaryEn: rulesOnlySummaryEn,
      summaryFr: rulesOnlySummaryFr,
      rationaleEn: rulesOnlyRationaleEn,
      rationaleFr: rulesOnlyRationaleFr,
      evidence: [],
      caveats: ['rules-first']
    },
    overrideLabel: overrideLabel.value || undefined,
    overrideReason: overrideReason.value
  })

  report.value = {
    documentName: documentResult.value.fileName,
    generatedAt: new Date().toISOString(),
    recommendation: recommendation.value,
    answers: { ...answers },
    signals: [...signals.value],
    modelSummaryEn: modelSummaryEn.value,
    modelSummaryFr: modelSummaryFr.value
  }

  warmup()
}

const enhanceRecommendation = async () => {
  if (!documentResult.value || !recommendation.value) {
    return
  }

  isEnhancing.value = true

  try {
    const modelAssist = await analyze({
      locale: locale.value,
      chunks: modelChunks.value,
      signals: signals.value,
      answers
    })

    modelSummaryEn.value = modelAssist.summaryEn
    modelSummaryFr.value = modelAssist.summaryFr

    recommendation.value = recommend({
      answers,
      signals: signals.value,
      modelAssist,
      overrideLabel: overrideLabel.value || undefined,
      overrideReason: overrideReason.value
    })

    if (report.value) {
      report.value.recommendation = recommendation.value
      report.value.modelSummaryEn = modelSummaryEn.value
      report.value.modelSummaryFr = modelSummaryFr.value
    }
  } finally {
    isEnhancing.value = false
  }
}

const exportJson = () => {
  if (!report.value) {
    return
  }

  const blob = new Blob([JSON.stringify(report.value, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${report.value.documentName.replace(/\.docx$/i, '')}-classification.json`
  anchor.click()
  URL.revokeObjectURL(url)
}

watch(
  () => [overrideLabel.value, overrideReason.value],
  () => {
    if (!recommendation.value || !report.value) {
      return
    }

    report.value.recommendation.finalLabel = finalLabel.value ?? recommendation.value.recommendedLabel
    report.value.recommendation.overrideReason = overrideReason.value
  }
)
</script>

<template>
  <main class="px-4 py-5 md:px-6 lg:px-8">
    <div class="mx-auto max-w-[88rem]">
      <section class="no-print grid gap-8 pb-8 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p class="data-kicker text-amber-300/80">{{ t('appTitle') }}</p>
          <h1 class="mt-4 max-w-3xl text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
            {{ locale === 'fr' ? 'Classer sans quitter le navigateur.' : 'Classify without leaving the browser.' }}
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {{ t('appSubtitle') }}
          </p>
        </div>

        <div class="flex flex-col items-start gap-4 lg:items-end">
          <div class="flex flex-wrap items-center gap-3">
            <UButton to="/benchmarks" color="neutral" variant="outline" size="sm">
              {{ locale === 'fr' ? 'Voir les références' : 'View benchmarks' }}
            </UButton>
            <LanguageToggle v-model="locale" />
          </div>

          <div class="panel-shell w-full max-w-md p-5 lg:p-6">
            <div class="flex items-center justify-between text-sm text-slate-300">
              <span>{{ scanState }}</span>
              <span>{{ progress }}%</span>
            </div>
            <div class="mt-3 h-2 overflow-hidden bg-white/7">
              <div class="h-full bg-amber-400 transition-all duration-500" :style="{ width: `${progress}%` }" />
            </div>
            <p class="mt-4 text-sm text-slate-400">
              {{ modelStatus === 'ready'
                ? (locale === 'fr' ? 'Modèle local disponible.' : 'Local model available.')
                : modelStatus === 'loading'
                  ? (locale === 'fr' ? 'Amélioration locale en cours en arrière-plan.' : 'Local enhancement is running in the background.')
                  : (locale === 'fr' ? 'Le moteur à règles peut terminer le flux sans attendre le modèle local.' : 'The rules engine can complete the workflow without waiting for the local model.') }}
            </p>
            <div class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">{{ locale === 'fr' ? 'Mode' : 'Mode' }}</p>
                <p class="mt-1 text-slate-100">{{ locale === 'fr' ? 'Flux d’examen' : 'Review workflow' }}</p>
              </div>
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">{{ locale === 'fr' ? 'Sortie' : 'Output' }}</p>
                <p class="mt-1 text-slate-100">{{ locale === 'fr' ? 'Rapport bilingue' : 'Bilingual report' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="no-print grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
        <div class="space-y-6">
          <DocumentDropzone @upload="handleUpload" />

          <UAlert
            v-if="parseError"
            color="error"
            variant="soft"
            :title="locale === 'fr' ? 'Échec de l’analyse' : 'Parsing failed'"
            :description="parseError"
          />

          <Transition name="fade-rise">
            <EvidencePane :document="documentResult" :signals="signals" :focused-section-id="focusedSectionId" />
          </Transition>
        </div>

        <div class="space-y-6">
          <QuestionnairePanel v-model="answers" :locale="locale" />

          <div class="flex flex-wrap gap-3">
            <UButton color="primary" size="lg" :loading="isEnhancing" :disabled="!documentResult" @click="buildRecommendation">
              {{ locale === 'fr' ? 'Calculer la recommandation' : 'Compute recommendation' }}
            </UButton>
            <UButton color="neutral" variant="soft" :loading="isEnhancing" :disabled="!recommendation" @click="enhanceRecommendation">
              {{ locale === 'fr' ? 'Améliorer avec le modèle local' : 'Enhance with local model' }}
            </UButton>
            <UButton color="neutral" variant="soft" :disabled="!report" @click="exportJson">
              {{ t('exportJson') }}
            </UButton>
            <UButton color="neutral" variant="outline" :disabled="!report" @click="window.print()">
              {{ t('printReport') }}
            </UButton>
          </div>

          <Transition name="fade-rise">
            <RecommendationPanel
              v-model:override-label="overrideLabel"
              v-model:override-reason="overrideReason"
              :locale="locale"
              :recommendation="recommendation"
              :model-status="modelStatus"
              @focus-section="focusSection"
            />
          </Transition>
        </div>
      </div>

      <section v-if="report" class="print-report hidden pt-10">
        <div class="mx-auto max-w-4xl border border-slate-200 bg-white p-10 shadow-xl">
          <p class="data-kicker text-slate-500">{{ t('reportSummary') }}</p>
          <div class="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-3xl font-semibold text-slate-950">{{ report.documentName }}</h2>
              <p class="mt-2 text-sm text-slate-600">
                {{ t('reportGenerated') }} {{ new Date(report.generatedAt).toLocaleString(locale === 'fr' ? 'fr-CA' : 'en-CA') }}
              </p>
            </div>
            <div class="border border-amber-200 bg-amber-50 px-5 py-4">
              <p class="text-xs uppercase tracking-[0.18em] text-amber-800">
                {{ locale === 'fr' ? 'Niveau final' : 'Final label' }}
              </p>
              <p class="mt-1 text-2xl font-semibold text-slate-950">{{ report.recommendation.finalLabel }}</p>
            </div>
          </div>

          <div class="mt-8 grid gap-8 md:grid-cols-2">
            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">English</h3>
              <p class="mt-3 text-sm leading-7 text-slate-700">{{ report.modelSummaryEn }}</p>
              <p class="mt-4 text-sm leading-7 text-slate-700">{{ report.recommendation.rationaleEn }}</p>
            </section>
            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Français</h3>
              <p class="mt-3 text-sm leading-7 text-slate-700">{{ report.modelSummaryFr }}</p>
              <p class="mt-4 text-sm leading-7 text-slate-700">{{ report.recommendation.rationaleFr }}</p>
            </section>
          </div>

          <div class="mt-8 grid gap-8 md:grid-cols-2">
            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {{ locale === 'fr' ? 'Fondements' : 'Decision basis' }}
              </h3>
              <ul class="mt-3 space-y-2 text-sm text-slate-700">
                <li v-for="item in report.recommendation.basis" :key="item">{{ item }}</li>
              </ul>
            </section>
            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {{ locale === 'fr' ? 'Signaux' : 'Signals' }}
              </h3>
              <ul class="mt-3 space-y-2 text-sm text-slate-700">
                <li v-for="signal in report.signals.slice(0, 8)" :key="`${signal.code}-${signal.matchedText}`">
                  {{ signal.matchedText }} - {{ signal.severityHint }}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
