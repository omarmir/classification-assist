import { env, pipeline } from '@huggingface/transformers'
import type { AnalysisChunk, ModelAssistResult, QuestionnaireAnswers, SensitivitySignal, SupportedLocale } from '~~/lib/classification/types'

const MODEL_ID = 'SmolLM2-135M-ONNX'
const SYSTEM_NOTE = [
  'You are helping classify Government of Canada documents.',
  'Do not assign the final label.',
  'Return compact JSON only.',
  'Focus on evidence, uncertainty, and injury cues.'
].join(' ')

type WorkerStatus = 'idle' | 'loading' | 'ready' | 'fallback'

type AnalyzePayload = {
  baseUrl: string
  locale: SupportedLocale
  chunks: AnalysisChunk[]
  signals: SensitivitySignal[]
  answers: QuestionnaireAnswers
}

type WorkerRequest =
  | { id: number, type: 'warmup', payload: Pick<AnalyzePayload, 'baseUrl'> }
  | { id: number, type: 'analyze', payload: AnalyzePayload }

type WorkerResponse =
  | { id: number, type: 'status', status: WorkerStatus, error?: string }
  | { id: number, type: 'result', result: ModelAssistResult }
  | { id: number, type: 'error', error: string, fallback: ModelAssistResult }

let cachedPipeline: Awaited<ReturnType<typeof pipeline>> | null = null
let initializingPipeline: Promise<Awaited<ReturnType<typeof pipeline>> | null> | null = null
let runtimeBaseUrl = ''

const postStatus = (id: number, status: WorkerStatus, error?: string) => {
  self.postMessage({ id, type: 'status', status, error } satisfies WorkerResponse)
}

const fallbackResult = (): ModelAssistResult => ({
  summaryEn: 'Rules-only mode. The local model was not available, so the recommendation is based on extracted markings, heuristics, and reviewer answers.',
  summaryFr: 'Mode fondé sur les règles. Le modèle local n’était pas disponible; la recommandation repose sur les marquages détectés, les heuristiques et les réponses du réviseur.',
  rationaleEn: 'Review the evidence excerpts and confirm the injury threshold manually before final release.',
  rationaleFr: 'Examinez les extraits de preuve et confirmez manuellement le seuil de préjudice avant la diffusion finale.',
  evidence: [],
  caveats: ['local-model-unavailable']
})

const summarizeFreeformOutput = (text: string): ModelAssistResult => {
  const cleaned = text.replace(/\s+/g, ' ').trim()
  const fallback = fallbackResult()

  if (!cleaned) {
    return fallback
  }

  const short = cleaned.slice(0, 700)

  return {
    summaryEn: short,
    summaryFr: fallback.summaryFr,
    rationaleEn: short,
    rationaleFr: fallback.rationaleFr,
    evidence: [],
    caveats: ['model-output-not-json']
  }
}

const extractJson = (text: string) => {
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')

  if (start === -1 || end === -1 || end <= start) {
    throw new Error('model-json-missing')
  }

  return JSON.parse(text.slice(start, end + 1)) as Record<string, unknown>
}

const dedupeEvidence = (items: ModelAssistResult['evidence']) => {
  const seen = new Set<string>()

  return items.filter((item) => {
    const key = `${item.excerpt}::${item.reason}`
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

const mergeChunkResults = (results: Array<ModelAssistResult & { marker: string }>): ModelAssistResult => {
  const summaryEn = results
    .map((result) => `[${result.marker}] ${result.summaryEn}`)
    .join(' ')
    .slice(0, 1400)

  const summaryFr = results
    .map((result) => `[${result.marker}] ${result.summaryFr}`)
    .join(' ')
    .slice(0, 1400)

  return {
    summaryEn: summaryEn || fallbackResult().summaryEn,
    summaryFr: summaryFr || fallbackResult().summaryFr,
    rationaleEn: `Chunked local analysis stitched ${results.length} chunk summaries together for the final review.`,
    rationaleFr: `L’analyse locale par segments a réuni ${results.length} résumés de segments pour l’examen final.`,
    evidence: dedupeEvidence(
      results.flatMap((result) =>
        result.evidence.map((item) => ({
          ...item,
          sourceMarker: item.sourceMarker ?? result.marker
        }))
      )
    ).slice(0, 6),
    caveats: Array.from(new Set(results.flatMap((result) => result.caveats)))
  }
}

const runPrompt = async (
  runner: Awaited<ReturnType<typeof pipeline>>,
  prompt: string,
  maxNewTokens: number
): Promise<ModelAssistResult> => {
  const output = await runner(prompt, {
    max_new_tokens: maxNewTokens,
    do_sample: false,
    temperature: 0.1,
    return_full_text: false
  })

  const generatedText = Array.isArray(output) ? String(output[0]?.generated_text ?? '') : ''

  let parsed: Record<string, unknown>
  try {
    parsed = extractJson(generatedText)
  } catch {
    return summarizeFreeformOutput(generatedText)
  }

  return {
    summaryEn: String(parsed.summaryEn ?? fallbackResult().summaryEn),
    summaryFr: String(parsed.summaryFr ?? fallbackResult().summaryFr),
    rationaleEn: String(parsed.rationaleEn ?? fallbackResult().rationaleEn),
    rationaleFr: String(parsed.rationaleFr ?? fallbackResult().rationaleFr),
    evidence: Array.isArray(parsed.evidence)
      ? parsed.evidence
          .slice(0, 4)
          .map((item: Record<string, unknown>) => ({
            excerpt: String(item.excerpt ?? ''),
            reason: String(item.reason ?? ''),
            sourceMarker: item.sourceMarker ? String(item.sourceMarker) : undefined,
            sectionIds: Array.isArray(item.sectionIds) ? item.sectionIds.map(String) : undefined
          }))
            .filter((item) => item.excerpt && item.reason)
      : [],
    caveats: Array.isArray(parsed.caveats) ? parsed.caveats.map(String) : []
  }
}

const ensurePipeline = async (id: number, baseUrl: string) => {
  if (cachedPipeline) {
    postStatus(id, 'ready')
    return cachedPipeline
  }

  if (initializingPipeline) {
    return initializingPipeline
  }

  initializingPipeline = (async () => {
    try {
      postStatus(id, 'loading')
      runtimeBaseUrl = baseUrl.replace(/\/$/, '')
      env.allowRemoteModels = false
      env.allowLocalModels = true
      env.localModelPath = `${runtimeBaseUrl}/models/`
      env.backends.onnx.wasm.wasmPaths = `${runtimeBaseUrl}/wasm/`
      env.useBrowserCache = false

      cachedPipeline = await pipeline('text-generation', MODEL_ID, {
        dtype: 'q4',
        device: 'wasm'
      })

      postStatus(id, 'ready')
      return cachedPipeline
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : 'model-initialization-failed'
      postStatus(id, 'fallback', message)
      return null
    } finally {
      initializingPipeline = null
    }
  })()

  return initializingPipeline
}

const runAnalysis = async (id: number, payload: AnalyzePayload) => {
  const runner = await ensurePipeline(id, payload.baseUrl)

  if (!runner) {
    self.postMessage({ id, type: 'error', error: 'model-initialization-failed', fallback: fallbackResult() } satisfies WorkerResponse)
    return
  }

  try {
    const chunkResults: Array<ModelAssistResult & { marker: string }> = []

    for (const chunk of payload.chunks.slice(0, 6)) {
      const chunkPrompt = [
        SYSTEM_NOTE,
        '',
        'Analyze this document chunk. Preserve the chunk marker in your reasoning.',
        chunk.text.slice(0, 3200),
        '',
        'Chunk-local signals:',
        JSON.stringify(chunk.signalMatches),
        '',
        'Reviewer answers:',
        JSON.stringify(payload.answers),
        '',
        'Return JSON with keys:',
        'summaryEn, summaryFr, rationaleEn, rationaleFr, evidence, caveats.',
        'Evidence must be an array of objects with excerpt, reason, sourceMarker, and sectionIds.'
      ].join('\n')

      const chunkResult = await runPrompt(runner, chunkPrompt, 140)
      chunkResults.push({
        ...chunkResult,
        evidence: chunkResult.evidence.map((item) => ({
          ...item,
          sourceMarker: item.sourceMarker ?? chunk.marker,
          sectionIds: item.sectionIds?.length ? item.sectionIds : chunk.sectionIds
        })),
        marker: chunk.marker
      })
    }

    if (!chunkResults.length) {
      self.postMessage({ id, type: 'result', result: fallbackResult() } satisfies WorkerResponse)
      return
    }

    const synthesisPrompt = [
      SYSTEM_NOTE,
      '',
      'Stitch together the following chunk analyses into a single document-level result.',
      'Use the chunk markers to avoid losing cross-references between sections.',
      '',
      ...chunkResults.map((result) =>
        [
          `[${result.marker}]`,
          `summaryEn: ${result.summaryEn}`,
          `summaryFr: ${result.summaryFr}`,
          `evidence: ${JSON.stringify(result.evidence)}`
        ].join('\n')
      ),
      '',
      'Reviewer answers:',
      JSON.stringify(payload.answers),
      '',
      'Return JSON with keys:',
      'summaryEn, summaryFr, rationaleEn, rationaleFr, evidence, caveats.',
      'Evidence must be an array of objects with excerpt, reason, sourceMarker, and sectionIds.'
    ].join('\n\n')

    const synthesized = await runPrompt(runner, synthesisPrompt, 180)
    const mergedFallback = mergeChunkResults(chunkResults)

    const result: ModelAssistResult = {
      summaryEn: synthesized.summaryEn || mergedFallback.summaryEn,
      summaryFr: synthesized.summaryFr || mergedFallback.summaryFr,
      rationaleEn: synthesized.rationaleEn || mergedFallback.rationaleEn,
      rationaleFr: synthesized.rationaleFr || mergedFallback.rationaleFr,
      evidence: dedupeEvidence([...synthesized.evidence, ...mergedFallback.evidence]).slice(0, 6),
      caveats: Array.from(new Set([...synthesized.caveats, ...mergedFallback.caveats]))
    }

    self.postMessage({ id, type: 'result', result } satisfies WorkerResponse)
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : 'model-inference-failed'
    postStatus(id, 'fallback', message)
    self.postMessage({ id, type: 'error', error: message, fallback: fallbackResult() } satisfies WorkerResponse)
  }
}

self.addEventListener('message', async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data

  if (message.type === 'warmup') {
    await ensurePipeline(message.id, message.payload.baseUrl)
    return
  }

  await runAnalysis(message.id, message.payload)
})
