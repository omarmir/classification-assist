<script setup lang="ts">
import { questionDefinitions } from '~~/lib/classification/rubric'
import type { QuestionnaireAnswers, SupportedLocale } from '~~/lib/classification/types'

const props = defineProps<{
  locale: SupportedLocale
}>()

const answers = defineModel<QuestionnaireAnswers>({ required: true })

const text = (entry: Record<SupportedLocale, string>) => entry[props.locale]
</script>

<template>
  <section class="panel-shell p-6 md:p-7">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="data-kicker text-slate-400">Reviewer questions</p>
        <h2 class="mt-2 text-xl font-semibold text-white">Lock the injury threshold</h2>
      </div>
      <UBadge color="primary" variant="subtle">
        {{ Object.values(answers).filter(Boolean).length }}/{{ questionDefinitions.length }}
      </UBadge>
    </div>

    <div class="mt-6 space-y-6">
      <article
        v-for="question in questionDefinitions"
        :key="question.key"
        class="border border-white/8 bg-white/4 p-4"
      >
        <p class="text-sm font-semibold text-white">{{ text(question.title) }}</p>
        <p class="mt-1 text-sm leading-6 text-slate-400">{{ text(question.help) }}</p>

        <select
          v-model="answers[question.key]"
          class="mt-4 w-full border border-white/10 bg-slate-950/70 px-3 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-400/60"
        >
          <option disabled value="">
            {{ locale === 'fr' ? 'Sélectionner une réponse' : 'Select an answer' }}
          </option>
          <option
            v-for="option in question.options"
            :key="option.value"
            :value="option.value"
          >
            {{ text(option.label) }}
          </option>
        </select>
      </article>
    </div>
  </section>
</template>
