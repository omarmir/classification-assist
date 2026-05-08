import type { ParsedSection, QuestionnaireAnswers } from '../classification/types'
import type { BenchmarkCase, BenchmarkDifficulty } from './types'

const sectionize = (sections: Array<{ title: string, text: string }>): ParsedSection[] =>
  sections.map((section, index) => ({
    id: `section-${index}`,
    title: section.title,
    text: section.text.trim()
  }))

export const reviewedAnswers = (partial: Partial<QuestionnaireAnswers>): QuestionnaireAnswers => ({
  officialMarking: 'unknown',
  nonNationalImpact: 'injury',
  nationalInterestImpact: 'none',
  aggregationRisk: 'possible',
  distributionScope: 'internal_limited',
  ...partial
})

export const createBenchmarkCase = (input: {
  id: string
  difficulty: BenchmarkDifficulty
  expectedLabel: BenchmarkCase['expectedLabel']
  title: string
  notes: string
  fileName: string
  locale?: BenchmarkCase['locale']
  extractedMarkings?: BenchmarkCase['document']['extractedMarkings']
  sections: Array<{ title: string, text: string }>
  reviewedAnswers: QuestionnaireAnswers
}): BenchmarkCase => {
  const parsedSections = sectionize(input.sections)
  const text = parsedSections.map((section) => `${section.title}\n${section.text}`).join('\n\n')

  return {
    id: input.id,
    difficulty: input.difficulty,
    expectedLabel: input.expectedLabel,
    title: input.title,
    notes: input.notes,
    locale: input.locale ?? 'en',
    document: {
      fileName: input.fileName,
      languageGuess: input.locale ?? 'en',
      text,
      sections: parsedSections,
      extractedMarkings: input.extractedMarkings ?? [],
      parseWarnings: []
    },
    reviewedAnswers: input.reviewedAnswers
  }
}
