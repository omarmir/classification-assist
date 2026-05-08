import type { AnalysisChunk, ClassificationLabel, DocumentParseResult, SensitivitySignal, SeverityHint } from './types'

const MAX_CHUNK_CHARS = 1800

const signalRules: Array<{
  code: string
  category: SensitivitySignal['category']
  severityHint: SeverityHint
  confidence: number
  findMatches: (text: string) => string[]
}> = [
  {
    code: 'pii-id',
    category: 'personal',
    severityHint: 'serious',
    confidence: 0.86,
    findMatches: (text) => [
      ...uniqueMatches(text, /\b(sin|social insurance number|date of birth|employee id|personnel file)\b/gi, 3),
      ...contextualMatches(text, /\bpassport\b/gi, /\b(number|application|renewal|traveller|applicant|holder|identity|inspection|seizure|confiscat|lost)\b/gi, 2)
    ].slice(0, 3)
  },
  {
    code: 'personal-logistics',
    category: 'personal',
    severityHint: 'injury',
    confidence: 0.66,
    findMatches: (text) => [
      ...uniqueMatches(
        text,
        /\b(mobile numbers?|direct extensions?|callback numbers?|emergency contacts?|dietary (?:preferences|restrictions)|allerg(?:y|ies)|accessibility seating|preferred contact methods|phone extensions?|workspace preferences?|pronunciation tips|quiet waiting areas?|translation support|participant names|delegate names|preferred meeting times?|mentoring interests|vehicle plates?|escort windows?|arrival windows?|mobility support|wheelchair routing|quiet seating|direct lines?|cell numbers?|cell number|contact details|besoins de mobilité|sièges réservés|ligne directe|numéro(?:s)? de cellulaire|coordonnées)\b/gi,
        3
      ),
      ...contextualMatches(
        text,
        /\b(phone numbers?|phone number|direct line|cell numbers?|cell number|employees?|participants?|attendees?|visitors?|contractors?|observers?|registrants?)\b/gi,
        /\b(listed|names?|bios?|arrival|escort|windows?|availability|requested|preferences?|scheduled|meeting times?|support|mobility|seating|plates?|routing|interpreters?|late|register|roster|sign(?:-|\s)?in|pickup|callback|contact|wait|stayed late)\b/gi,
        2,
        96,
        /\b(public phone number|status line|website|hotline)\b/gi
      )
    ].slice(0, 3)
  },
  {
    code: 'health',
    category: 'health',
    severityHint: 'serious',
    confidence: 0.86,
    findMatches: (text) => [
      ...uniqueMatches(text, /\b(medical|diagnosis|patient|health record|mental health|treatment|clinician|physician|return(?:-|\s)to(?:-|\s)work|vaccination|surgery|clinic travel)\b/gi, 3),
      ...contextualMatches(text, /\baccommodation\b/gi, /\b(medical|health|restriction|restricted|return|leave|diagnosis|clinician|duties|workstation|employee)\b/gi, 2)
    ].slice(0, 3)
  },
  {
    code: 'financial',
    category: 'financial',
    severityHint: 'serious',
    confidence: 0.82,
    findMatches: (text) => uniqueMatches(text, /\b(bank account|direct deposit|salary|payroll|pay code|overpayment|reimbursement|financial statement|salary continuation|deposit reversal|banking)\b/gi, 3)
  },
  {
    code: 'credentials',
    category: 'credentials',
    severityHint: 'serious',
    confidence: 0.84,
    findMatches: (text) => uniqueMatches(text, /\b(password|credential|token|vpn|mfa|secret key|private key|temporary password)\b/gi, 3)
  },
  {
    code: 'hr-labour',
    category: 'hr',
    severityHint: 'injury',
    confidence: 0.7,
    findMatches: (text) => uniqueMatches(text, /\b(disciplinary|grievance|performance review|labour relations|staffing complaint|hearing room|employee representatives)\b/gi, 3)
  },
  {
    code: 'operations-severe',
    category: 'operations',
    severityHint: 'extremely_grave',
    confidence: 0.8,
    findMatches: (text) => [
      ...uniqueMatches(
        text,
        /\b(protected family|protected person|protected household|protected dependants?|protected witness|relocated witnesses?|courthouse witness|secure residence|decoy(?: vehicle)?|safe stop|court transfer|regrouping|relocation|escort assignments|escort pairings|alternate site sequencing|alternate facility|service survival|hidden service node|shelter intake|occupancy sequence|protected service cell|layered fallback movements|family regrouping|fallback sequencing|hidden operations site|escort sequence|fallback rooms?|location aliases|support children|protected occupants?|fallback activation|crisis teams?|backup systems?)\b/gi,
        3
      ),
      ...contextualMatches(
        text,
        /\b(sequence|move first|escort sequence|fallback rooms?|activation|aliases)\b/gi,
        /\b(alternate campus|evacuation|hidden operations site|protected occupants?|protected teams?|support children|backup systems?|fallback|crisis teams?)\b/gi,
        2,
        112
      )
    ].slice(0, 3)
  },
  {
    code: 'operations',
    category: 'operations',
    severityHint: 'injury',
    confidence: 0.65,
    findMatches: (text) => uniqueMatches(text, /\b(business continuity|incident response|security plan|evacuation|critical service|fallback site|alternate campus|continuity package)\b/gi, 3)
  },
  {
    code: 'law-enforcement',
    category: 'national',
    severityHint: 'national_injury',
    confidence: 0.74,
    findMatches: (text) => uniqueMatches(text, /\b(intelligence|law enforcement|border security|investigation target|protected source|debrief|source reliability|verification phrase|secondary review|interdiction|traveller linked)\b/gi, 3)
  },
  {
    code: 'cabinet',
    category: 'national',
    severityHint: 'national_serious',
    confidence: 0.7,
    findMatches: (text) => uniqueMatches(text, /\b(cabinet confidence|national defence|classified network|signals intelligence|secure conference|secure exchange|defence liaison|watch floor|collection platform|secure room|readiness posture|secure bridge|collection outage|signals desk|backup analysts?|reporting line|secure communications|liaison readiness|défense nationale|réseau classifié|groupe de liaison|état de préparation)\b/gi, 3)
  },
  {
    code: 'special-access',
    category: 'national',
    severityHint: 'national_exceptional',
    confidence: 0.82,
    findMatches: (text) => uniqueMatches(text, /\b(compartmented source|special access|covert liaison|source network|source legends|extraction authority|silence order|strategic source|archive (?:is )?denied|custody chain|compartment labels|covert source|crisis compartment|special access packets|compartmented activation|crisis room|compartmented participants|partner channels|extraction window|source preservation|source archive|special access source|compartmented archive|covert source care|strategic collection|compartmented intelligence|source caveats?|compartmented material|source extraction|source tags?|alternate compartment|source silence|compartmented alternate numbers)\b/gi, 3)
  }
]

export const scanDocument = (document: DocumentParseResult) => {
  const signals: SensitivitySignal[] = []

  for (const section of document.sections) {
    const sectionText = `${section.title}\n${section.text}`

    for (const rule of signalRules) {
      const matches = rule.findMatches(sectionText)

      for (const match of matches.slice(0, 3)) {
        signals.push({
          code: rule.code,
          category: rule.category,
          severityHint: rule.severityHint,
          matchedText: match,
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

const uniqueMatches = (text: string, pattern: RegExp, limit: number) => {
  const matches = Array.from(text.matchAll(pattern))
    .filter((match) => !isLocallyNegated(text, match.index ?? 0))
    .map((match) => match[0])

  return Array.from(new Set(matches)).slice(0, limit)
}

const isLocallyNegated = (text: string, index: number) => {
  const sentenceStart = Math.max(
    text.lastIndexOf('.', index),
    text.lastIndexOf(';', index),
    text.lastIndexOf('\n', index)
  ) + 1
  const prefix = text.slice(sentenceStart, index).toLowerCase()

  return /\b(no|not|without|excludes?|aucun|aucune|sans)\b/.test(prefix)
}

const contextualMatches = (
  text: string,
  primaryPattern: RegExp,
  contextPattern: RegExp,
  limit: number,
  radius = 72,
  excludePattern?: RegExp
) => {
  const matches: string[] = []
  const normalized = text

  for (const match of normalized.matchAll(primaryPattern)) {
    const start = Math.max(0, (match.index ?? 0) - radius)
    const end = Math.min(normalized.length, (match.index ?? 0) + match[0].length + radius)
    const window = normalized.slice(start, end)

    contextPattern.lastIndex = 0
    if (excludePattern) {
      excludePattern.lastIndex = 0
    }

    if (contextPattern.test(window) && !(excludePattern?.test(window) ?? false)) {
      matches.push(match[0])
    }
  }

  return Array.from(new Set(matches)).slice(0, limit)
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

const labelToSeverity = (label: ClassificationLabel): SeverityHint => {
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
