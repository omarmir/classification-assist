import type {
  ClassificationLabel,
  DocumentParseResult,
  QuestionnaireAnswers,
  SupportedLocale
} from '../classification/types'

export type BenchmarkDifficulty = 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4'

export interface BenchmarkCase {
  id: string
  difficulty: BenchmarkDifficulty
  expectedLabel: ClassificationLabel
  title: string
  notes: string
  locale: SupportedLocale
  document: DocumentParseResult
  reviewedAnswers: QuestionnaireAnswers
}

export interface BenchmarkRunCase {
  id: string
  title: string
  difficulty: BenchmarkDifficulty
  expectedLabel: ClassificationLabel
  automaticLabel: ClassificationLabel
  reviewedLabel: ClassificationLabel
  automaticPassed: boolean
  reviewedPassed: boolean
  signalCount: number
  basisAutomatic: string[]
  basisReviewed: string[]
  excerpt: string
  notes: string
}

export interface BenchmarkModeSummary {
  total: number
  correct: number
  accuracy: number
  byDifficulty: Array<{
    difficulty: BenchmarkDifficulty
    total: number
    correct: number
    accuracy: number
  }>
  byLabel: Array<{
    label: ClassificationLabel
    total: number
    correct: number
    accuracy: number
  }>
  confusion: Record<ClassificationLabel, Record<ClassificationLabel, number>>
}

export interface BenchmarkReport {
  generatedAt: string
  note: string
  totalCases: number
  automatic: BenchmarkModeSummary
  reviewed: BenchmarkModeSummary
  cases: BenchmarkRunCase[]
}
