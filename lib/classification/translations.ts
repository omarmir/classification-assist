import type { ClassificationLabel, SupportedLocale } from './types'

type DictionaryValue = string | Record<SupportedLocale, string>

export const labels: ClassificationLabel[] = [
  'Public',
  'Protected A',
  'Protected B',
  'Protected C',
  'Confidential',
  'Secret',
  'Top Secret'
]

export const labelTranslations: Record<ClassificationLabel, Record<SupportedLocale, string>> = {
  Public: { en: 'Public', fr: 'Public' },
  'Protected A': { en: 'Protected A', fr: 'Protégé A' },
  'Protected B': { en: 'Protected B', fr: 'Protégé B' },
  'Protected C': { en: 'Protected C', fr: 'Protégé C' },
  Confidential: { en: 'Confidential', fr: 'Confidentiel' },
  Secret: { en: 'Secret', fr: 'Secret' },
  'Top Secret': { en: 'Top Secret', fr: 'Très secret' }
}

export const dictionary: Record<string, DictionaryValue> = {
  appTitle: {
    en: 'Classification Assist',
    fr: 'Assistant de classification'
  },
  appSubtitle: {
    en: 'Local review console for Government of Canada document sensitivity triage.',
    fr: 'Console locale d’examen pour le triage de la sensibilité des documents du gouvernement du Canada.'
  },
  uploadTitle: {
    en: 'Upload a Word document',
    fr: 'Téléverser un document Word'
  },
  uploadHelp: {
    en: 'Client-side `.docx` parsing only. No document text is sent to a server.',
    fr: 'Analyse locale des fichiers `.docx` seulement. Aucun texte du document n’est envoyé à un serveur.'
  },
  chooseFile: {
    en: 'Choose `.docx`',
    fr: 'Choisir un fichier `.docx`'
  },
  dragDrop: {
    en: 'Drop a file here or use the button above.',
    fr: 'Déposez un fichier ici ou utilisez le bouton ci-dessus.'
  },
  evidenceTitle: {
    en: 'Evidence review',
    fr: 'Examen des éléments'
  },
  signalsTitle: {
    en: 'Detected signals',
    fr: 'Signaux détectés'
  },
  questionnaireTitle: {
    en: 'Reviewer questions',
    fr: 'Questions au réviseur'
  },
  recommendationTitle: {
    en: 'Classification result',
    fr: 'Résultat de classification'
  },
  reportTitle: {
    en: 'Printable report',
    fr: 'Rapport imprimable'
  },
  buildReport: {
    en: 'Build report',
    fr: 'Créer le rapport'
  },
  exportJson: {
    en: 'Export JSON',
    fr: 'Exporter le JSON'
  },
  printReport: {
    en: 'Print report',
    fr: 'Imprimer le rapport'
  },
  reviewerOverride: {
    en: 'Reviewer override',
    fr: 'Remplacement du réviseur'
  },
  overrideReason: {
    en: 'Override reason',
    fr: 'Motif du remplacement'
  },
  localModelStatus: {
    en: 'Local model status',
    fr: 'État du modèle local'
  },
  rulesMode: {
    en: 'Rules-only fallback active',
    fr: 'Mode de rechange fondé sur les règles actif'
  },
  modelReady: {
    en: 'Local model ready',
    fr: 'Modèle local prêt'
  },
  scanning: {
    en: 'Scanning document',
    fr: 'Analyse du document'
  },
  complete: {
    en: 'Complete',
    fr: 'Terminé'
  },
  noDocument: {
    en: 'No document loaded yet.',
    fr: 'Aucun document chargé pour le moment.'
  },
  parseError: {
    en: 'The document could not be parsed as a valid `.docx` file.',
    fr: 'Le document n’a pas pu être analysé comme un fichier `.docx` valide.'
  },
  reportSummary: {
    en: 'Decision support summary',
    fr: 'Résumé d’aide à la décision'
  },
  reportGenerated: {
    en: 'Generated',
    fr: 'Produit le'
  }
}

export const translate = (locale: SupportedLocale, key: string): string => {
  const value = dictionary[key]

  if (!value) {
    return key
  }

  return typeof value === 'string' ? value : value[locale]
}

export const translateLabel = (locale: SupportedLocale, label: ClassificationLabel): string =>
  labelTranslations[label][locale]
