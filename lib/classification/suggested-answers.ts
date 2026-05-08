import {
  extremeImpactCueScore,
  hasAggregationCue,
  minorImpactCueScore,
  nationalExceptionalCueScore,
  nationalSeriousCueScore,
  publicReleaseCueScore,
  publicSafeCueScore,
  restrictedCueScore,
  seriousImpactCueScore
} from './cues'
import { questionDefinitions } from './rubric'
import type { DocumentParseResult, QuestionnaireAnswers, SensitivitySignal, SeverityHint } from './types'

const nonNationalOrder: SeverityHint[] = ['none', 'injury', 'serious', 'extremely_grave']
const nationalOrder: SeverityHint[] = ['none', 'national_injury', 'national_serious', 'national_exceptional']

const maxSeverity = (values: SeverityHint[], order: SeverityHint[]) =>
  values.reduce<SeverityHint>((current, value) => order.indexOf(value) > order.indexOf(current) ? value : current, 'none')

export const deriveSuggestedAnswers = (
  parsed: DocumentParseResult,
  signals: SensitivitySignal[]
): QuestionnaireAnswers => {
  const answers = Object.fromEntries(questionDefinitions.map((question) => [question.key, ''])) as QuestionnaireAnswers
  const fullText = parsed.text
  const publicCue = publicReleaseCueScore(fullText)
  const publicSafeCue = publicSafeCueScore(fullText)
  const restrictedCue = restrictedCueScore(fullText)
  const aggregationCue = hasAggregationCue(fullText)
  const minorImpactCue = minorImpactCueScore(fullText)
  const seriousImpactCue = seriousImpactCueScore(fullText)
  const extremeImpactCue = extremeImpactCueScore(fullText)
  const nationalSeriousCue = nationalSeriousCueScore(fullText)
  const nationalExceptionalCue = nationalExceptionalCueScore(fullText)
  const nonNationalSignals = signals.filter((signal) => ['marking', 'national'].includes(signal.category) === false)
  const nationalSignals = signals.filter((signal) => signal.severityHint.startsWith('national_'))
  const textNonNationalSeverity: SeverityHint = extremeImpactCue > 0
    ? 'extremely_grave'
    : seriousImpactCue > 0
      ? 'serious'
      : minorImpactCue > 0
        ? 'injury'
        : 'none'
  const textNationalSeverity: SeverityHint = nationalExceptionalCue > 0
    ? 'national_exceptional'
    : nationalSeriousCue > 0
      ? 'national_serious'
      : 'none'
  const strongestNonNational = maxSeverity(
    [...nonNationalSignals.map((signal) => signal.severityHint), textNonNationalSeverity],
    nonNationalOrder
  )
  const strongestNational = maxSeverity(
    [...nationalSignals.map((signal) => signal.severityHint), textNationalSeverity],
    nationalOrder
  )
  const publicPreferred = (publicCue > 0 || publicSafeCue > 0)
    && (publicCue + publicSafeCue) >= restrictedCue
    && strongestNonNational === 'none'
    && strongestNational === 'none'
  const lowSensitivitySignalsOnly = nonNationalSignals.length > 0
    && nonNationalSignals.every((signal) => signal.severityHint === 'injury')

  answers.officialMarking = parsed.extractedMarkings[0] ?? 'unknown'
  answers.nonNationalImpact = strongestNonNational === 'none'
    ? (signals.length === 0 && publicPreferred
      ? 'none'
      : restrictedCue > 0 || nonNationalSignals.length > 0 || minorImpactCue > 0
        ? 'injury'
        : 'none')
    : strongestNonNational
  answers.nationalInterestImpact = strongestNational
  answers.aggregationRisk = strongestNational !== 'none' || strongestNonNational === 'serious' || strongestNonNational === 'extremely_grave'
    ? 'yes'
    : aggregationCue && (lowSensitivitySignalsOnly ? signals.length >= 4 : signals.length >= 2)
      ? 'yes'
      : aggregationCue || signals.length >= 2
      ? 'possible'
      : 'no'
  answers.distributionScope = parsed.extractedMarkings.includes('Public') || publicPreferred
    ? 'public_release'
    : answers.nationalInterestImpact !== 'none'
      || answers.nonNationalImpact === 'serious'
      || answers.nonNationalImpact === 'extremely_grave'
      || (restrictedCue > publicCue + publicSafeCue)
      ? 'restricted_need_to_know'
      : 'internal_limited'

  return answers
}
