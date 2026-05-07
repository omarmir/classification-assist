import type {
  ClassificationLabel,
  ClassificationRecommendation,
  ModelEvidence,
  ModelAssistResult,
  QuestionnaireAnswers,
  SensitivitySignal
} from '~~/lib/classification/types'
import { labelWeight, maxLabel, severityToLabel } from '~~/lib/classification/rubric'

const impactMap: Record<string, ClassificationLabel> = {
  none: 'Public',
  injury: 'Protected A',
  serious: 'Protected B',
  extremely_grave: 'Protected C',
  national_injury: 'Confidential',
  national_serious: 'Secret',
  national_exceptional: 'Top Secret'
}

export const useClassificationEngine = () => {
  const recommend = (input: {
    answers: QuestionnaireAnswers
    signals: SensitivitySignal[]
    modelAssist: ModelAssistResult
    overrideLabel?: ClassificationLabel
    overrideReason?: string
  }): ClassificationRecommendation => {
    let label: ClassificationLabel = 'Public'
    const basis: string[] = []
    const evidence: ModelEvidence[] = input.signals.slice(0, 6).map((signal) => ({
      excerpt: signal.matchedText,
      reason: signal.code,
      sectionIds: [signal.sectionId]
    }))

    const explicitMarking = input.answers.officialMarking

    if (explicitMarking && explicitMarking !== 'unknown') {
      label = explicitMarking as ClassificationLabel
      basis.push('existing-marking')
    } else if (input.answers.nationalInterestImpact && input.answers.nationalInterestImpact !== 'none') {
      label = impactMap[input.answers.nationalInterestImpact] ?? 'Public'
      basis.push('national-interest-threshold')
    } else if (input.answers.nonNationalImpact) {
      label = impactMap[input.answers.nonNationalImpact] ?? 'Public'
      basis.push('non-national-injury-threshold')
    }

    for (const signal of input.signals) {
      label = maxLabel(label, severityToLabel(signal.severityHint))
    }

    if (input.answers.aggregationRisk === 'yes' && labelWeight[label] < labelWeight['Protected B']) {
      label = 'Protected B'
      basis.push('aggregation-escalation')
    }

    if (
      input.answers.distributionScope === 'public_release' &&
      !input.signals.length &&
      input.answers.nonNationalImpact === 'none' &&
      input.answers.nationalInterestImpact === 'none'
    ) {
      label = 'Public'
      basis.push('public-release-compatible')
    }

    const finalLabel = input.overrideLabel ?? label
    const confidence = Math.min(0.99, 0.54 + input.signals.length * 0.05 + basis.length * 0.06)

    return {
      recommendedLabel: label,
      finalLabel,
      confidence,
      basis,
      evidence: input.modelAssist.evidence.length ? input.modelAssist.evidence : evidence,
      rationaleEn: input.modelAssist.rationaleEn,
      rationaleFr: input.modelAssist.rationaleFr,
      overrideReason: input.overrideReason ?? ''
    }
  }

  return { recommend }
}
