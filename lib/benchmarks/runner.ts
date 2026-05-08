import { recommendClassification } from '../classification/engine'
import { scanDocument } from '../classification/scanner'
import { deriveSuggestedAnswers } from '../classification/suggested-answers'
import type { ClassificationLabel, QuestionnaireAnswers } from '../classification/types'
import type { BenchmarkCase, BenchmarkModeSummary, BenchmarkReport, BenchmarkRunCase } from './types'

const labels: ClassificationLabel[] = [
  'Public',
  'Protected A',
  'Protected B',
  'Protected C',
  'Confidential',
  'Secret',
  'Top Secret'
]

const rulesAssist = {
  summaryEn: 'Rules-only benchmark path.',
  summaryFr: 'Parcours de référence fondé sur les règles.',
  rationaleEn: 'Benchmarking the recommendation label only.',
  rationaleFr: 'Référence du niveau recommandé seulement.',
  evidence: [],
  caveats: ['benchmark']
}

const accuracy = (correct: number, total: number) => total ? Number(((correct / total) * 100).toFixed(1)) : 0

const emptyConfusion = (): BenchmarkModeSummary['confusion'] =>
  Object.fromEntries(labels.map((expected) => [
    expected,
    Object.fromEntries(labels.map((actual) => [actual, 0]))
  ])) as BenchmarkModeSummary['confusion']

const summarizeMode = (
  cases: BenchmarkRunCase[],
  pickPassed: (item: BenchmarkRunCase) => boolean,
  pickLabel: (item: BenchmarkRunCase) => ClassificationLabel
): BenchmarkModeSummary => {
  const confusion = emptyConfusion()

  for (const item of cases) {
    confusion[item.expectedLabel][pickLabel(item)] += 1
  }

  return {
    total: cases.length,
    correct: cases.filter(pickPassed).length,
    accuracy: accuracy(cases.filter(pickPassed).length, cases.length),
    byDifficulty: ['Level 1', 'Level 2', 'Level 3', 'Level 4'].map((difficulty) => {
      const subset = cases.filter((item) => item.difficulty === difficulty)
      const correct = subset.filter(pickPassed).length
      return {
        difficulty,
        total: subset.length,
        correct,
        accuracy: accuracy(correct, subset.length)
      }
    }),
    byLabel: labels.map((label) => {
      const subset = cases.filter((item) => item.expectedLabel === label)
      const correct = subset.filter(pickPassed).length
      return {
        label,
        total: subset.length,
        correct,
        accuracy: accuracy(correct, subset.length)
      }
    }),
    confusion
  }
}

const excerpt = (text: string) => text.replace(/\s+/g, ' ').trim().slice(0, 220)

export const runBenchmarkSuite = (cases: BenchmarkCase[]): BenchmarkReport => {
  const results = cases.map<BenchmarkRunCase>((item) => {
    const scan = scanDocument(item.document)
    const automaticAnswers: QuestionnaireAnswers = deriveSuggestedAnswers(item.document, scan.signals)
    const automatic = recommendClassification({
      answers: automaticAnswers,
      signals: scan.signals,
      modelAssist: rulesAssist
    })
    const reviewed = recommendClassification({
      answers: item.reviewedAnswers,
      signals: scan.signals,
      modelAssist: rulesAssist
    })

    return {
      id: item.id,
      title: item.title,
      difficulty: item.difficulty,
      expectedLabel: item.expectedLabel,
      automaticLabel: automatic.recommendedLabel,
      reviewedLabel: reviewed.recommendedLabel,
      automaticPassed: automatic.recommendedLabel === item.expectedLabel,
      reviewedPassed: reviewed.recommendedLabel === item.expectedLabel,
      signalCount: scan.signals.length,
      basisAutomatic: automatic.basis,
      basisReviewed: reviewed.basis,
      excerpt: excerpt(item.document.text),
      notes: item.notes
    }
  })

  return {
    generatedAt: new Date().toISOString(),
    note: 'Automatic mode uses the same suggested-answer defaults as the upload workflow. Reviewed mode uses the hand-authored benchmark answers.',
    totalCases: results.length,
    automatic: summarizeMode(results, (item) => item.automaticPassed, (item) => item.automaticLabel),
    reviewed: summarizeMode(results, (item) => item.reviewedPassed, (item) => item.reviewedLabel),
    cases: results
  }
}
