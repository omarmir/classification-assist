<script setup lang="ts">
import type { DocumentParseResult, SensitivitySignal } from '~~/lib/classification/types'

defineProps<{
  document: DocumentParseResult | null
  signals: SensitivitySignal[]
  focusedSectionId?: string | null
}>()
</script>

<template>
  <section class="panel-shell panel-accent rounded-[1.4rem] p-6 md:p-7">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="data-kicker text-slate-400">Evidence review</p>
        <h2 class="mt-2 text-xl font-semibold text-white">Signals and extracted content</h2>
      </div>
      <UBadge color="neutral" variant="soft">
        {{ signals.length }} signal{{ signals.length === 1 ? '' : 's' }}
      </UBadge>
    </div>

    <div v-if="!document" class="mt-6 rounded-2xl border border-white/8 bg-white/4 p-5 text-sm text-slate-400">
      No document loaded yet.
    </div>

    <template v-else>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="signal in signals.slice(0, 10)"
          :key="`${signal.code}-${signal.sectionId}-${signal.matchedText}`"
          class="signal-pill rounded-full text-slate-200"
        >
          {{ signal.matchedText }}
        </span>
      </div>

      <div class="scan-divider mt-6 pt-6">
        <div class="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span>{{ document.fileName }}</span>
          <span class="h-1 w-1 rounded-full bg-slate-500" />
          <span>{{ document.sections.length }} sections</span>
          <span class="h-1 w-1 rounded-full bg-slate-500" />
          <span>{{ document.languageGuess.toUpperCase() }}</span>
        </div>
      </div>

      <div class="mt-6 space-y-4">
        <article
          v-for="section in document.sections.slice(0, 5)"
          :key="section.id"
          :id="`section-${section.id}`"
          class="rounded-[1.1rem] border border-white/8 bg-slate-950/55 px-4 py-4 scroll-mt-6 transition"
          :class="focusedSectionId === section.id ? 'border-amber-300/60 bg-amber-400/8' : ''"
        >
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm font-medium text-white">{{ section.title }}</p>
            <UBadge color="neutral" variant="outline">{{ section.id }}</UBadge>
          </div>
          <p class="mt-2 whitespace-pre-line text-sm leading-6 text-slate-300">
            {{ section.text.slice(0, 900) }}<span v-if="section.text.length > 900">…</span>
          </p>
        </article>
      </div>
    </template>
  </section>
</template>
