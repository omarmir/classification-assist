<script setup lang="ts">
import type { SupportedLocale } from '~~/lib/classification/types'

const modelValue = defineModel<SupportedLocale>({ required: true })
</script>

<template>
  <div class="inline-flex border border-slate-400 bg-white p-1">
    <button
      v-for="option in ['en', 'fr'] as SupportedLocale[]"
      :key="option"
      type="button"
      class="step-chip px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em]"
      :class="modelValue === option ? 'bg-blue-800 text-white' : 'text-slate-700 hover:bg-slate-50'"
      @click="modelValue = option"
    >
      {{ option }}
    </button>
  </div>
</template>
