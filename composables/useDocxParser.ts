import mammoth from 'mammoth/mammoth.browser'
import type { DocumentParseResult, ParsedSection, SupportedLocale } from '~~/lib/classification/types'
import { labels } from '~~/lib/classification/translations'

const headingPattern = /^([A-Z][A-Za-z0-9 ,\-()/]{2,80}|[A-ZÉÈÀÂÎÔÙÇ][A-Za-zÀ-ÿ0-9 ,\-()/]{2,80})$/

const detectLocale = (text: string): SupportedLocale => {
  const sample = text.toLowerCase()
  const frenchHits = [' le ', ' la ', ' les ', ' des ', ' pour ', ' avec ', ' document ', ' renseignements ', ' protégé ']
  const score = frenchHits.reduce((count, token) => count + (sample.includes(token) ? 1 : 0), 0)
  return score >= 2 ? 'fr' : 'en'
}

const extractMarkings = (text: string) => {
  const normalized = text
    .replace(/prot[ée]g[ée]\s*a/gi, 'Protected A')
    .replace(/prot[ée]g[ée]\s*b/gi, 'Protected B')
    .replace(/prot[ée]g[ée]\s*c/gi, 'Protected C')
    .replace(/tr[eè]s secret/gi, 'Top Secret')
    .replace(/confidentiel/gi, 'Confidential')

  return labels.filter((label) => new RegExp(`\\b${label.replace(' ', '\\s*')}\\b`, 'i').test(normalized))
}

const toSections = (text: string): ParsedSection[] => {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  const sections: ParsedSection[] = []

  let currentTitle = 'Document Overview'
  let currentLines: string[] = []
  let index = 0

  for (const block of blocks) {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
    const firstLine = lines[0] ?? block

    if (lines.length <= 3 && headingPattern.test(firstLine)) {
      if (currentLines.length) {
        sections.push({
          id: `section-${index++}`,
          title: currentTitle,
          text: currentLines.join('\n\n')
        })
      }

      currentTitle = firstLine
      currentLines = lines.slice(1)
      continue
    }

    currentLines.push(block)
  }

  if (currentLines.length) {
    sections.push({
      id: `section-${index}`,
      title: currentTitle,
      text: currentLines.join('\n\n')
    })
  }

  return sections.length
    ? sections
    : [
        {
          id: 'section-0',
          title: 'Document Overview',
          text
        }
      ]
}

export const useDocxParser = () => {
  const parse = async (file: File): Promise<DocumentParseResult> => {
    if (!file.name.toLowerCase().endsWith('.docx')) {
      throw new Error('unsupported-format')
    }

    const arrayBuffer = await file.arrayBuffer()
    const { value, messages } = await mammoth.extractRawText({ arrayBuffer })
    const text = value.replace(/\r/g, '').trim()

    if (!text) {
      return {
        fileName: file.name,
        languageGuess: 'en',
        text: '',
        sections: [],
        extractedMarkings: [],
        parseWarnings: [{ type: 'empty', message: 'No extractable text was found in the document.' }]
      }
    }

    return {
      fileName: file.name,
      languageGuess: detectLocale(text),
      text,
      sections: toSections(text),
      extractedMarkings: extractMarkings(text),
      parseWarnings: messages.length
        ? messages.map((message) => ({
            type: 'parser' as const,
            message: message.message
          }))
        : []
    }
  }

  return { parse }
}
