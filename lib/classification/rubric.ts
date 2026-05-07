import type { ClassificationLabel, QuestionDefinition, SeverityHint } from './types'

export const labelWeight: Record<ClassificationLabel, number> = {
  Public: 0,
  'Protected A': 1,
  'Protected B': 2,
  'Protected C': 3,
  Confidential: 4,
  Secret: 5,
  'Top Secret': 6
}

export const questionDefinitions: QuestionDefinition[] = [
  {
    key: 'officialMarking',
    title: {
      en: 'What existing marking, if any, is already on the document?',
      fr: 'Quel marquage existant, le cas échéant, figure déjà sur le document?'
    },
    help: {
      en: 'Treat existing markings as strong evidence, then confirm whether they still fit the content.',
      fr: 'Traitez les marquages existants comme une preuve solide, puis confirmez s’ils correspondent toujours au contenu.'
    },
    options: [
      { value: 'unknown', label: { en: 'No explicit marking', fr: 'Aucun marquage explicite' } },
      { value: 'Public', label: { en: 'Public', fr: 'Public' } },
      { value: 'Protected A', label: { en: 'Protected A', fr: 'Protégé A' } },
      { value: 'Protected B', label: { en: 'Protected B', fr: 'Protégé B' } },
      { value: 'Protected C', label: { en: 'Protected C', fr: 'Protégé C' } },
      { value: 'Confidential', label: { en: 'Confidential', fr: 'Confidentiel' } },
      { value: 'Secret', label: { en: 'Secret', fr: 'Secret' } },
      { value: 'Top Secret', label: { en: 'Top Secret', fr: 'Très secret' } }
    ]
  },
  {
    key: 'nonNationalImpact',
    title: {
      en: 'If disclosed, what level of injury outside the national interest is most plausible?',
      fr: 'En cas de divulgation, quel niveau de préjudice hors de l’intérêt national est le plus plausible?'
    },
    help: {
      en: 'Use this for effects on individuals, organizations, programs, finances, or operations.',
      fr: 'Utilisez ce critère pour les effets sur les personnes, les organisations, les programmes, les finances ou les opérations.'
    },
    options: [
      { value: 'none', label: { en: 'No material injury', fr: 'Aucun préjudice notable' } },
      { value: 'injury', label: { en: 'Injury', fr: 'Préjudice' } },
      { value: 'serious', label: { en: 'Serious injury', fr: 'Préjudice grave' } },
      { value: 'extremely_grave', label: { en: 'Extremely grave injury', fr: 'Préjudice extrêmement grave' } }
    ]
  },
  {
    key: 'nationalInterestImpact',
    title: {
      en: 'Would compromise injure the national interest, defence, or the social, political, or economic stability of Canada?',
      fr: 'Une atteinte causerait-elle un préjudice à l’intérêt national, à la défense ou à la stabilité sociale, politique ou économique du Canada?'
    },
    help: {
      en: 'If yes, the document moves into the classified ladder.',
      fr: 'Si oui, le document passe dans l’échelle des renseignements classifiés.'
    },
    options: [
      { value: 'none', label: { en: 'No', fr: 'Non' } },
      { value: 'national_injury', label: { en: 'Injury to the national interest', fr: 'Préjudice à l’intérêt national' } },
      { value: 'national_serious', label: { en: 'Serious injury to the national interest', fr: 'Préjudice grave à l’intérêt national' } },
      { value: 'national_exceptional', label: { en: 'Exceptionally grave injury to the national interest', fr: 'Préjudice exceptionnellement grave à l’intérêt national' } }
    ]
  },
  {
    key: 'aggregationRisk',
    title: {
      en: 'Does the document aggregate enough personal or operational detail to raise the sensitivity level?',
      fr: 'Le document agrège-t-il suffisamment de renseignements personnels ou opérationnels pour augmenter le niveau de sensibilité?'
    },
    help: {
      en: 'Aggregation can elevate low-risk details into a more sensitive package.',
      fr: 'L’agrégation peut faire passer des détails à faible risque à un ensemble plus sensible.'
    },
    options: [
      { value: 'no', label: { en: 'No', fr: 'Non' } },
      { value: 'possible', label: { en: 'Possibly', fr: 'Possiblement' } },
      { value: 'yes', label: { en: 'Yes', fr: 'Oui' } }
    ]
  },
  {
    key: 'distributionScope',
    title: {
      en: 'What distribution scope is appropriate for this document?',
      fr: 'Quelle portée de diffusion convient à ce document?'
    },
    help: {
      en: 'Use this as a validation check, not as the primary classification rule.',
      fr: 'Utilisez cette question comme vérification, et non comme règle principale de classification.'
    },
    options: [
      { value: 'public_release', label: { en: 'Public release is acceptable', fr: 'Une diffusion publique est acceptable' } },
      { value: 'internal_limited', label: { en: 'Internal distribution only', fr: 'Diffusion interne seulement' } },
      { value: 'restricted_need_to_know', label: { en: 'Restricted to a need-to-know audience', fr: 'Restreint aux personnes ayant besoin de savoir' } }
    ]
  }
]

export const severityToLabel = (severity: SeverityHint): ClassificationLabel => {
  switch (severity) {
    case 'injury':
      return 'Protected A'
    case 'serious':
      return 'Protected B'
    case 'extremely_grave':
      return 'Protected C'
    case 'national_injury':
      return 'Confidential'
    case 'national_serious':
      return 'Secret'
    case 'national_exceptional':
      return 'Top Secret'
    default:
      return 'Public'
  }
}

export const maxLabel = (current: ClassificationLabel, candidate: ClassificationLabel): ClassificationLabel =>
  labelWeight[candidate] > labelWeight[current] ? candidate : current
