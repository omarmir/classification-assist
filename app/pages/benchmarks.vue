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
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <header class="border-t-[14px] border-blue-800 bg-white">
      <div class="border-b border-slate-300">
        <div class="mx-auto max-w-[88rem] px-4 py-7 sm:px-6 lg:px-8">
          <UButton to="/" color="neutral" variant="outline">
            Back to classifier
          </UButton>
          <p class="mt-6 data-kicker text-slate-500">Benchmarks</p>
          <h1 class="mt-2 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Hand-authored corpus, automatic scoring, visible misses.
          </h1>
          <p class="mt-4 max-w-4xl text-base leading-7 text-slate-700">
            The benchmark corpus contains 300 manually authored government-style document cases across four difficulty tiers.
            Automatic mode uses the same suggested-answer defaults as upload. Reviewed mode uses the hand-authored benchmark answers.
          </p>
        </div>
      </div>
      <div class="border-b border-slate-300 bg-slate-50">
        <div class="mx-auto grid max-w-[88rem] gap-4 px-4 py-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div class="border-l-4 border-blue-800 bg-white px-4 py-3">
            <p class="data-kicker text-slate-500">Corpus</p>
            <p class="mt-1 text-sm font-semibold text-slate-950">{{ report.totalCases }} cases</p>
          </div>
          <div class="border-l-4 border-slate-400 bg-white px-4 py-3">
            <p class="data-kicker text-slate-500">Modes</p>
            <p class="mt-1 text-sm font-semibold text-slate-950">Automatic and reviewed</p>
          </div>
          <div class="border-l-4 border-amber-500 bg-white px-4 py-3">
            <p class="data-kicker text-slate-500">Generated</p>
            <p class="mt-1 text-sm font-semibold text-slate-950">{{ new Date(report.generatedAt).toLocaleString('en-CA') }}</p>
          </div>
        </div>
      </div>
    </header>

    <main class="px-4 py-8 md:px-6 lg:px-8">
      <div class="mx-auto max-w-[88rem] space-y-8">
        <section class="grid gap-6 xl:grid-cols-[1fr_25rem]">
          <div class="border border-slate-400 bg-white">
            <div class="section-heading">
              <p class="data-kicker text-slate-500">Method note</p>
              <h2 class="mt-1 text-xl font-semibold text-slate-950">How to read these results</h2>
            </div>
            <p class="px-6 py-5 text-sm leading-6 text-slate-700">{{ report.note }}</p>
          </div>

          <div class="panel-shell p-5 lg:p-6">
            <div class="grid gap-3 text-sm sm:grid-cols-2">
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">Corpus</p>
                <p class="mt-1 text-2xl font-semibold text-slate-950">{{ report.totalCases }}</p>
                <p class="mt-1 text-slate-600">4 difficulty levels</p>
              </div>
              <div class="console-stat p-3">
                <p class="data-kicker text-slate-500">Generated</p>
                <p class="mt-1 text-sm text-slate-950">{{ new Date(report.generatedAt).toLocaleString('en-CA') }}</p>
                <p class="mt-1 text-slate-600">Client-side report</p>
              </div>
            </div>
          </div>
        </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <div class="panel-shell p-6 md:p-7">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="data-kicker text-slate-500">Automatic mode</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-950">Upload defaults only</h2>
            </div>
            <UBadge color="warning" variant="outline">{{ report.automatic.correct }}/{{ report.automatic.total }}</UBadge>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Accuracy</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.automatic.accuracy }}%</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Passes</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.automatic.correct }}</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Failures</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.automatic.total - report.automatic.correct }}</p>
            </div>
          </div>
        </div>

        <div class="panel-shell p-6 md:p-7">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="data-kicker text-slate-500">Reviewed mode</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-950">Hand-authored answers applied</h2>
            </div>
            <UBadge color="success" variant="outline">{{ report.reviewed.correct }}/{{ report.reviewed.total }}</UBadge>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Accuracy</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.reviewed.accuracy }}%</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Passes</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.reviewed.correct }}</p>
            </div>
            <div class="console-stat p-4">
              <p class="data-kicker text-slate-500">Failures</p>
              <p class="mt-2 text-3xl font-semibold text-slate-950">{{ report.reviewed.total - report.reviewed.correct }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-500">By difficulty</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-950">Automatic mode by tier</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full border-collapse text-left text-sm">
              <thead class="bg-slate-50 text-slate-700">
                <tr class="scan-divider">
                  <th class="py-3 pr-4 font-medium">Tier</th>
                  <th class="py-3 pr-4 font-medium">Correct</th>
                  <th class="py-3 pr-4 font-medium">Total</th>
                  <th class="py-3 font-medium">Accuracy</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
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
          <p class="data-kicker text-slate-500">By difficulty</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-950">Reviewed mode by tier</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full border-collapse text-left text-sm">
              <thead class="bg-slate-50 text-slate-700">
                <tr class="scan-divider">
                  <th class="py-3 pr-4 font-medium">Tier</th>
                  <th class="py-3 pr-4 font-medium">Correct</th>
                  <th class="py-3 pr-4 font-medium">Total</th>
                  <th class="py-3 font-medium">Accuracy</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
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
        <p class="data-kicker text-slate-500">By label</p>
        <h2 class="mt-2 text-xl font-semibold text-slate-950">Automatic mode by expected label</h2>
        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full border-collapse text-left text-sm">
            <thead class="bg-slate-50 text-slate-700">
              <tr class="scan-divider">
                <th class="py-3 pr-4 font-medium">Expected label</th>
                <th class="py-3 pr-4 font-medium">Correct</th>
                <th class="py-3 pr-4 font-medium">Total</th>
                <th class="py-3 font-medium">Accuracy</th>
              </tr>
            </thead>
            <tbody class="text-slate-700">
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
          <p class="data-kicker text-slate-500">Automatic misses</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-950">Representative failure cases</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="item in automaticFailures" :key="item.id" class="border border-slate-300 bg-slate-50 p-4">
              <div class="flex flex-wrap items-center gap-2">
                <UBadge color="neutral" variant="outline">{{ item.id }}</UBadge>
                <UBadge color="warning" variant="outline">{{ item.difficulty }}</UBadge>
              </div>
              <p class="mt-3 text-sm font-medium text-slate-950">{{ item.title }}</p>
              <p class="mt-2 text-sm text-slate-700">{{ item.excerpt }}</p>
              <p class="mt-3 text-sm text-slate-600">Expected: {{ item.expectedLabel }} | Automatic: {{ item.automaticLabel }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ item.notes }}</p>
            </li>
          </ul>
        </div>

        <div class="panel-shell p-6 md:p-7">
          <p class="data-kicker text-slate-500">Reviewed misses</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-950">Cases still failing with benchmark answers</h2>
          <div v-if="!reviewedFailures.length" class="mt-6 border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
            Reviewed mode cleared the full corpus with the hand-authored answers.
          </div>
          <ul v-else class="mt-6 space-y-4">
            <li v-for="item in reviewedFailures" :key="item.id" class="border border-slate-300 bg-slate-50 p-4">
              <div class="flex flex-wrap items-center gap-2">
                <UBadge color="neutral" variant="outline">{{ item.id }}</UBadge>
                <UBadge color="error" variant="outline">{{ item.difficulty }}</UBadge>
              </div>
              <p class="mt-3 text-sm font-medium text-slate-950">{{ item.title }}</p>
              <p class="mt-2 text-sm text-slate-700">{{ item.excerpt }}</p>
              <p class="mt-3 text-sm text-slate-600">Expected: {{ item.expectedLabel }} | Reviewed: {{ item.reviewedLabel }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ item.notes }}</p>
            </li>
          </ul>
        </div>
      </section>
      </div>
    </main>
  </div>
</template>
