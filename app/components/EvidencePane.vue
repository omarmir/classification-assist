<script setup lang="ts">
import type { DocumentParseResult, SensitivitySignal } from '~~/lib/classification/types'

defineProps<{
  document: DocumentParseResult | null
  signals: SensitivitySignal[]
  focusedSectionId?: string | null
}>()
</script>

<template>
  <section class="panel-shell panel-accent p-6 pl-8 md:p-7 md:pl-9">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="data-kicker text-slate-500">Evidence review</p>
        <h2 class="mt-2 text-xl font-semibold text-slate-950">Signals and extracted content</h2>
      </div>
      <UBadge color="neutral" variant="soft">
        {{ signals.length }} signal{{ signals.length === 1 ? '' : 's' }}
      </UBadge>
    </div>

    <div v-if="!document" class="mt-6 border border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
      No document loaded yet.
    </div>

    <template v-else>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="signal in signals.slice(0, 10)"
          :key="`${signal.code}-${signal.sectionId}-${signal.matchedText}`"
          class="signal-pill text-slate-700"
        >
          {{ signal.matchedText }}
        </span>
      </div>

      <div class="scan-divider mt-6 pt-6">
        <div class="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span>{{ document.fileName }}</span>
          <span class="h-px w-3 bg-slate-400" />
          <span>{{ document.sections.length }} sections</span>
          <span class="h-px w-3 bg-slate-400" />
          <span>{{ document.languageGuess.toUpperCase() }}</span>
        </div>
      </div>

      <div class="mt-6 space-y-4">
        <article
          v-for="section in document.sections.slice(0, 5)"
          :key="section.id"
          :id="`section-${section.id}`"
          class="border border-slate-300 bg-slate-50 px-4 py-4 scroll-mt-6 transition"
          :class="focusedSectionId === section.id ? 'border-blue-800 bg-blue-50' : ''"
        >
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-slate-950">{{ section.title }}</p>
            <UBadge color="neutral" variant="outline">{{ section.id }}</UBadge>
          </div>
          <p class="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">
            {{ section.text.slice(0, 900) }}<span v-if="section.text.length > 900">…</span>
          </p>
        </article>
      </div>
    </template>
  </section>
</template>
