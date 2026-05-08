<script setup lang="ts">
import { labels } from '~~/lib/classification/translations'
import type { ClassificationLabel, ClassificationRecommendation, ModelEvidence, SupportedLocale } from '~~/lib/classification/types'

const props = defineProps<{
  locale: SupportedLocale
  recommendation: ClassificationRecommendation | null
  modelStatus: 'idle' | 'loading' | 'ready' | 'fallback'
}>()
const emit = defineEmits<{
  focusSection: [sectionId: string]
}>()

const overrideLabel = defineModel<ClassificationLabel | ''>('overrideLabel', { required: true })
const overrideReason = defineModel<string>('overrideReason', { required: true })

const score = computed(() => Math.round((props.recommendation?.confidence ?? 0) * 100))
const jumpLabel = (item: ModelEvidence) => item.sectionIds?.[0] ?? ''
</script>

<template>
  <section class="panel-shell report-surface p-6 md:p-7">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="data-kicker text-slate-500">Classification result</p>
        <h2 class="mt-2 text-xl font-semibold text-slate-950">Recommendation and reviewer control</h2>
      </div>
      <UBadge
        :color="modelStatus === 'ready' ? 'success' : modelStatus === 'loading' ? 'primary' : modelStatus === 'fallback' ? 'warning' : 'neutral'"
        variant="soft"
      >
        {{ modelStatus === 'ready'
          ? (locale === 'fr' ? 'Modèle local prêt' : 'Local model ready')
          : modelStatus === 'loading'
            ? (locale === 'fr' ? 'Amélioration locale en cours' : 'Local enhancement running')
            : modelStatus === 'fallback'
              ? (locale === 'fr' ? 'Mode règles' : 'Rules mode')
              : (locale === 'fr' ? 'Modèle local facultatif' : 'Local model optional') }}
      </UBadge>
    </div>

    <div v-if="!recommendation" class="mt-6 border border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
      {{ locale === 'fr'
        ? 'Chargez un document et répondez au questionnaire pour produire une recommandation.'
        : 'Load a document and answer the questionnaire to produce a recommendation.' }}
    </div>

    <template v-else>
      <div class="mt-6 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div class="border border-blue-200 bg-blue-50 p-5">
          <p class="text-sm uppercase tracking-[0.18em] text-blue-900">
            {{ locale === 'fr' ? 'Niveau recommandé' : 'Recommended level' }}
          </p>
          <p class="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            {{ recommendation.recommendedLabel }}
          </p>
          <p class="mt-3 text-sm text-slate-700">
            {{ locale === 'fr' ? recommendation.rationaleFr : recommendation.rationaleEn }}
          </p>
        </div>

        <div class="border border-slate-300 bg-slate-50 p-5">
          <p class="text-sm uppercase tracking-[0.18em] text-slate-600">
            {{ locale === 'fr' ? 'Confiance' : 'Confidence' }}
          </p>
          <p class="mt-3 text-4xl font-semibold text-slate-950">{{ score }}%</p>
          <div class="model-progress mt-4">
            <div class="h-full bg-blue-800 transition-all duration-500" :style="{ width: `${score}%` }" />
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="item in recommendation.basis"
              :key="item"
              color="neutral"
              variant="outline"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>
      </div>

      <div class="scan-divider mt-6 pt-6">
        <p class="text-sm font-medium text-slate-950">
          {{ locale === 'fr' ? 'Remplacement du réviseur' : 'Reviewer override' }}
        </p>
        <div class="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <select
            v-model="overrideLabel"
            class="w-full border border-slate-400 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-blue-800"
          >
            <option value="">
              {{ locale === 'fr' ? 'Conserver la recommandation' : 'Keep recommended label' }}
            </option>
            <option v-for="label in labels" :key="label" :value="label">
              {{ label }}
            </option>
          </select>

          <UTextarea
            v-model="overrideReason"
            :rows="3"
            :placeholder="locale === 'fr'
              ? 'Expliquez pourquoi le niveau final doit différer de la recommandation.'
              : 'Explain why the final level should differ from the recommendation.'"
          />
        </div>
      </div>

      <div class="scan-divider mt-6 pt-6">
        <p class="text-sm font-medium text-slate-950">
          {{ locale === 'fr' ? 'Éléments de preuve' : 'Evidence notes' }}
        </p>
        <ul class="mt-4 space-y-3 text-sm leading-6 text-slate-700">
          <li
            v-for="item in recommendation.evidence"
            :key="`${item.excerpt}-${item.reason}-${item.sourceMarker ?? ''}`"
            class="border border-slate-300 bg-slate-50 px-4 py-3"
          >
            <p class="text-sm text-slate-950">{{ item.excerpt }}</p>
            <p class="mt-1 text-sm text-slate-700">{{ item.reason }}</p>
            <div class="mt-3 flex flex-wrap items-center gap-2">
              <UBadge v-if="item.sourceMarker" color="neutral" variant="outline">
                {{ item.sourceMarker }}
              </UBadge>
              <UButton
                v-if="jumpLabel(item)"
                color="neutral"
                variant="ghost"
                size="xs"
                @click="emit('focusSection', jumpLabel(item))"
              >
                {{ locale === 'fr' ? `Voir ${jumpLabel(item)}` : `Jump to ${jumpLabel(item)}` }}
              </UButton>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>
