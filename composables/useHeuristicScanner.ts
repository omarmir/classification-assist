import type { AnalysisChunk, DocumentParseResult, SensitivitySignal, SeverityHint } from '~~/lib/classification/types'
import { severityToLabel } from '~~/lib/classification/rubric'

const MAX_CHUNK_CHARS = 1800

const signalRules: Array<{
  code: string
  category: SensitivitySignal['category']
  severityHint: SeverityHint
  confidence: number
  pattern: RegExp
}> = [
  {
    code: 'pii-id',
    category: 'personal',
    severityHint: 'serious',
    confidence: 0.86,
    pattern: /\b(sin|social insurance number|passport|date of birth|employee id|personnel file)\b/gi
  },
  {
    code: 'health',
    category: 'health',
    severityHint: 'serious',
    confidence: 0.86,
    pattern: /\b(medical|diagnosis|patient|health record|mental health|accommodation)\b/gi
  },
  {
    code: 'financial',
    category: 'financial',
    severityHint: 'serious',
    confidence: 0.82,
    pattern: /\b(bank account|direct deposit|salary|budget pressure|financial statement|procurement strategy)\b/gi
  },
  {
    code: 'credentials',
    category: 'credentials',
    severityHint: 'serious',
    confidence: 0.84,
    pattern: /\b(password|credential|token|vpn|mfa|secret key|private key)\b/gi
  },
  {
    code: 'hr-labour',
    category: 'hr',
    severityHint: 'injury',
    confidence: 0.7,
    pattern: /\b(disciplinary|grievance|performance review|labour relations|staffing complaint)\b/gi
  },
  {
    code: 'operations',
    category: 'operations',
    severityHint: 'injury',
    confidence: 0.65,
    pattern: /\b(business continuity|incident response|security plan|evacuation|critical service)\b/gi
  },
  {
    code: 'law-enforcement',
    category: 'national',
    severityHint: 'national_injury',
    confidence: 0.74,
    pattern: /\b(intelligence|law enforcement|border security|investigation target|protected source)\b/gi
  },
  {
    code: 'cabinet',
    category: 'national',
    severityHint: 'national_serious',
    confidence: 0.7,
    pattern: /\b(cabinet confidence|national defence|classified network|signals intelligence)\b/gi
  }
]

export const useHeuristicScanner = () => {
  const scan = (document: DocumentParseResult) => {
    const signals: SensitivitySignal[] = []

    for (const section of document.sections) {
      for (const rule of signalRules) {
        const matches = Array.from(section.text.matchAll(rule.pattern))

        for (const match of matches.slice(0, 3)) {
          signals.push({
            code: rule.code,
            category: rule.category,
            severityHint: rule.severityHint,
            matchedText: match[0],
            sectionId: section.id,
            confidence: rule.confidence
          })
        }
      }
    }

    for (const marking of document.extractedMarkings) {
      signals.push({
        code: 'detected-marking',
        category: 'marking',
        severityHint: labelToSeverity(marking),
        matchedText: marking,
        sectionId: document.sections[0]?.id ?? 'section-0',
        confidence: 0.98
      })
    }

    const chunks = buildChunks(document, signals)
    const excerpt = chunks.map((chunk) => chunk.text).join('\n\n').slice(0, 6000)

    return {
      signals,
      excerpt,
      chunks
    }
  }

  return { scan }
}

const buildChunks = (document: DocumentParseResult, signals: SensitivitySignal[]): AnalysisChunk[] => {
  const drafts: Array<{ sectionIds: string[], parts: string[] }> = []
  let current: { sectionIds: string[], parts: string[] } = { sectionIds: [], parts: [] }
  let currentLength = 0

  for (const section of document.sections) {
    const sectionBlock = `[SECTION ${section.id} | ${section.title}]\n${section.text.trim()}`

    if (current.parts.length && currentLength + sectionBlock.length > MAX_CHUNK_CHARS) {
      drafts.push(current)
      current = { sectionIds: [], parts: [] }
      currentLength = 0
    }

    current.parts.push(sectionBlock)
    current.sectionIds.push(section.id)
    currentLength += sectionBlock.length
  }

  if (current.parts.length) {
    drafts.push(current)
  }

  return drafts.map((draft, index) => {
    const id = `chunk-${String(index + 1).padStart(2, '0')}`
    const marker = `CHUNK ${index + 1}/${drafts.length} | ${id}`
    const chunkSignals = Array.from(
      new Set(
        signals
          .filter((signal) => draft.sectionIds.includes(signal.sectionId))
          .map((signal) => signal.matchedText)
      )
    ).slice(0, 8)

    return {
      id,
      marker,
      sectionIds: draft.sectionIds,
      signalMatches: chunkSignals,
      text: [
        `[DOCUMENT ${document.fileName}]`,
        `[${marker}]`,
        ...draft.parts
      ].join('\n\n')
    }
  })
}

const labelToSeverity = (label: ReturnType<typeof severityToLabel>): SeverityHint => {
  switch (label) {
    case 'Protected A':
      return 'injury'
    case 'Protected B':
      return 'serious'
    case 'Protected C':
      return 'extremely_grave'
    case 'Confidential':
      return 'national_injury'
    case 'Secret':
      return 'national_serious'
    case 'Top Secret':
      return 'national_exceptional'
    default:
      return 'none'
  }
}
