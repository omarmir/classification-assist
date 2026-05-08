export type SupportedLocale = 'en' | 'fr'

export type ModelProgressStage = 'idle' | 'loading' | 'ready' | 'fallback'

export type ModelProgressFileInfo = {
  loaded: number
  total: number
}

export type ModelProgressState = {
  stage: ModelProgressStage
  label: string
  percent: number
  loadedBytes: number
  totalBytes: number
  currentFile: string
  files: Record<string, ModelProgressFileInfo>
}

export type ClassificationLabel =
  | 'Public'
  | 'Protected A'
  | 'Protected B'
  | 'Protected C'
  | 'Confidential'
  | 'Secret'
  | 'Top Secret'

export type SeverityHint =
  | 'none'
  | 'injury'
  | 'serious'
  | 'extremely_grave'
  | 'national_injury'
  | 'national_serious'
  | 'national_exceptional'

export interface ParsedSection {
  id: string
  title: string
  text: string
}

export interface ParseWarning {
  type: 'unsupported' | 'parser' | 'empty'
  message: string
}

export interface DocumentParseResult {
  fileName: string
  languageGuess: SupportedLocale
  text: string
  sections: ParsedSection[]
  extractedMarkings: ClassificationLabel[]
  parseWarnings: ParseWarning[]
}

export interface SensitivitySignal {
  code: string
  category: 'marking' | 'personal' | 'financial' | 'health' | 'hr' | 'operations' | 'national' | 'legal' | 'credentials'
  severityHint: SeverityHint
  matchedText: string
  sectionId: string
  confidence: number
}

export interface AnalysisChunk {
  id: string
  marker: string
  sectionIds: string[]
  signalMatches: string[]
  text: string
}

export interface QuestionDefinition {
  key: string
  title: Record<SupportedLocale, string>
  help: Record<SupportedLocale, string>
  options: Array<{
    value: string
    label: Record<SupportedLocale, string>
  }>
}

export type QuestionnaireAnswers = Record<string, string>

export interface ModelEvidence {
  excerpt: string
  reason: string
  sourceMarker?: string
  sectionIds?: string[]
}

export interface ModelAssistResult {
  summaryEn: string
  summaryFr: string
  rationaleEn: string
  rationaleFr: string
  evidence: ModelEvidence[]
  caveats: string[]
}

export interface ClassificationRecommendation {
  recommendedLabel: ClassificationLabel
  finalLabel: ClassificationLabel
  confidence: number
  basis: string[]
  evidence: ModelEvidence[]
  rationaleEn: string
  rationaleFr: string
  overrideReason: string
}

export interface PrintReportData {
  documentName: string
  generatedAt: string
  recommendation: ClassificationRecommendation
  answers: QuestionnaireAnswers
  signals: SensitivitySignal[]
  modelSummaryEn: string
  modelSummaryFr: string
}
