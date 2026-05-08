<script setup lang="ts">
import { benchmarkCorpus } from '~~/lib/benchmarks/corpus'
import { runBenchmarkSuite } from '~~/lib/benchmarks/runner'
import type { BenchmarkRunCase } from '~~/lib/benchmarks/types'

const report = runBenchmarkSuite(benchmarkCorpus)

const failureSort = (items: BenchmarkRunCase[], mode: 'automatic' | 'reviewed') =>
  [...items]
    .filter((item) => mode === 'automatic' ? !item.automaticPassed : !item.reviewedPassed)
    .slice(0, 18)

const automaticFailures = failureSort(report.cases, 'automatic')
const reviewedFailures = failureSort(report.cases, 'reviewed')

useSeoMeta({
  title: 'Benchmarks | Classification Assist',
  description: 'Benchmark results for the Government of Canada document classification assistant.'
})
</script>

<template>
  <main class="px-4 py-5 md:px-6 lg:px-8">
    <div class="mx-auto max-w-[88rem] space-y-8">
      <section class="grid gap-8 pb-2 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p class="data-kicker text-amber-300/80">Benchmarks</p>
          <h1 class="mt-4 max-w-4xl text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
            Hand-authored corpus, automatic scoring, visible misses.
          </h1>
          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            The benchmark corpus contains 300 manually authored government-style document cases across four difficulty tiers.
            Automatic mode uses the same suggested-answer defaults as upload. Reviewed mode uses the hand-authored benchmark answers.
          </p>
        </div>

        <div class="flex flex-col items-start gap-4 lg:items-end">
          <UButton to="/" color="neutral" variant="outline">
            Back to classifier
          </UButton>

          <div class="panel-shell w-full max-w-md p-5 lg:p-6">
            <div class="grid gap-3 text-sm sm:grid-cols-2">
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">Corpus</p>
                <p class="mt-1 text-2xl font-semibold text-white">{{ report.totalCases }}</p>
                <p class="mt-1 text-slate-400">4 difficulty levels</p>
              </div>
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">Generated</p>
                <p class="mt-1 text-sm text-slate-100">{{ new Date(report.generatedAt).toLocaleString('en-CA') }}</p>
                <p class="mt-1 text-slate-400">Client-side report</p>
              </div>
            </div>
            <p class="mt-4 text-sm text-slate-400">{{ report.note }}</p>
          </div>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <div class="panel-shell p-6 md:p-7">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="data-kicker text-slate-400">Automatic mode</p>
              <h2 class="mt-2 text-xl font-semibold text-white">Upload defaults only</h2>
            </div>
            <UBadge color="warning" variant="outline">{{ report.automatic.correct }}/{{ report.automatic.total }}</UBadge>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Accuracy</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.automatic.accuracy }}%</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Passes</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.automatic.correct }}</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Failures</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.automatic.total - report.automatic.correct }}</p>
            </div>
          </div>
        </div>

        <div class="panel-shell p-6 md:p-7">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="data-kicker text-slate-400">Reviewed mode</p>
              <h2 class="mt-2 text-xl font-semibold text-white">Hand-authored answers applied</h2>
            </div>
            <UBadge color="success" variant="outline">{{ report.reviewed.correct }}/{{ report.reviewed.total }}</UBadge>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Accuracy</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.reviewed.accuracy }}%</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Passes</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.reviewed.correct }}</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Failures</p>
              <p class="mt-2 text-3xl font-semibold text-white">{{ report.reviewed.total - report.reviewed.correct }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-400">By difficulty</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Automatic mode by tier</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full border-collapse text-left text-sm">
              <thead class="text-slate-400">
                <tr class="scan-divider">
                  <th class="py-3 pr-4 font-medium">Tier</th>
                  <th class="py-3 pr-4 font-medium">Correct</th>
                  <th class="py-3 pr-4 font-medium">Total</th>
                  <th class="py-3 font-medium">Accuracy</th>
                </tr>
              </thead>
              <tbody class="text-slate-200">
                <tr v-for="row in report.automatic.byDifficulty" :key="row.difficulty" class="scan-divider">
                  <td class="py-3 pr-4">{{ row.difficulty }}</td>
                  <td class="py-3 pr-4">{{ row.correct }}</td>
                  <td class="py-3 pr-4">{{ row.total }}</td>
                  <td class="py-3">{{ row.accuracy }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-400">By difficulty</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Reviewed mode by tier</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full border-collapse text-left text-sm">
              <thead class="text-slate-400">
                <tr class="scan-divider">
                  <th class="py-3 pr-4 font-medium">Tier</th>
                  <th class="py-3 pr-4 font-medium">Correct</th>
                  <th class="py-3 pr-4 font-medium">Total</th>
                  <th class="py-3 font-medium">Accuracy</th>
                </tr>
              </thead>
              <tbody class="text-slate-200">
                <tr v-for="row in report.reviewed.byDifficulty" :key="row.difficulty" class="scan-divider">
                  <td class="py-3 pr-4">{{ row.difficulty }}</td>
                  <td class="py-3 pr-4">{{ row.correct }}</td>
                  <td class="py-3 pr-4">{{ row.total }}</td>
                  <td class="py-3">{{ row.accuracy }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="panel-shell p-6 md:p-7">
        <p class="data-kicker text-slate-400">By label</p>
        <h2 class="mt-2 text-xl font-semibold text-white">Automatic mode by expected label</h2>
        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full border-collapse text-left text-sm">
            <thead class="text-slate-400">
              <tr class="scan-divider">
                <th class="py-3 pr-4 font-medium">Expected label</th>
                <th class="py-3 pr-4 font-medium">Correct</th>
                <th class="py-3 pr-4 font-medium">Total</th>
                <th class="py-3 font-medium">Accuracy</th>
              </tr>
            </thead>
            <tbody class="text-slate-200">
              <tr v-for="row in report.automatic.byLabel" :key="row.label" class="scan-divider">
                <td class="py-3 pr-4">{{ row.label }}</td>
                <td class="py-3 pr-4">{{ row.correct }}</td>
                <td class="py-3 pr-4">{{ row.total }}</td>
                <td class="py-3">{{ row.accuracy }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-400">Automatic misses</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Representative failure cases</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="item in automaticFailures" :key="item.id" class="border border-white/8 bg-slate-950/55 p-4">
              <div class="flex flex-wrap items-center gap-2">
                <UBadge color="neutral" variant="outline">{{ item.id }}</UBadge>
                <UBadge color="warning" variant="outline">{{ item.difficulty }}</UBadge>
              </div>
              <p class="mt-3 text-sm font-medium text-white">{{ item.title }}</p>
              <p class="mt-2 text-sm text-slate-300">{{ item.excerpt }}</p>
              <p class="mt-3 text-sm text-slate-400">Expected: {{ item.expectedLabel }} | Automatic: {{ item.automaticLabel }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ item.notes }}</p>
            </li>
          </ul>
        </div>

        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-400">Reviewed misses</p>
          <h2 class="mt-2 text-xl font-semibold text-white">Cases still failing with benchmark answers</h2>
          <div v-if="!reviewedFailures.length" class="mt-6 border border-emerald-400/20 bg-emerald-400/8 p-4 text-sm text-emerald-100">
            Reviewed mode cleared the full corpus with the hand-authored answers.
          </div>
          <ul v-else class="mt-6 space-y-4">
            <li v-for="item in reviewedFailures" :key="item.id" class="border border-white/8 bg-slate-950/55 p-4">
              <div class="flex flex-wrap items-center gap-2">
                <UBadge color="neutral" variant="outline">{{ item.id }}</UBadge>
                <UBadge color="error" variant="outline">{{ item.difficulty }}</UBadge>
              </div>
              <p class="mt-3 text-sm font-medium text-white">{{ item.title }}</p>
              <p class="mt-2 text-sm text-slate-300">{{ item.excerpt }}</p>
              <p class="mt-3 text-sm text-slate-400">Expected: {{ item.expectedLabel }} | Reviewed: {{ item.reviewedLabel }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ item.notes }}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>
