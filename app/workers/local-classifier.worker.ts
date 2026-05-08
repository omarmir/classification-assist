import { env, GPT2Tokenizer, pipeline } from '@huggingface/transformers'
import type {
  AnalysisChunk,
  ModelAssistResult,
  ModelProgressState,
  QuestionnaireAnswers,
  SensitivitySignal,
  SupportedLocale
} from '~~/lib/classification/types'

const MODEL_ID = 'SmolLM2-135M-ONNX'

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
  | { id: number, type: 'progress', progress: Partial<ModelProgressState> }
  | { id: number, type: 'result', result: ModelAssistResult }
  | { id: number, type: 'error', error: string, fallback: ModelAssistResult }

let cachedPipeline: Awaited<ReturnType<typeof pipeline>> | null = null
let initializingPipeline: Promise<Awaited<ReturnType<typeof pipeline>> | null> | null = null
let runtimeBaseUrl = ''

type TextGenerationRunner = Awaited<ReturnType<typeof pipeline>> & {
  tokenizer?: unknown
}

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`)
  }
  return response.json() as Promise<T>
}

const loadLocalTokenizer = async () => {
  const modelBaseUrl = `${runtimeBaseUrl}/models/${MODEL_ID}`
  const [tokenizerJson, tokenizerConfig] = await Promise.all([
    fetchJson<Record<string, unknown>>(`${modelBaseUrl}/tokenizer.json`),
    fetchJson<Record<string, unknown>>(`${modelBaseUrl}/tokenizer_config.json`)
  ])

  return new GPT2Tokenizer(tokenizerJson, tokenizerConfig)
}

const postStatus = (id: number, status: WorkerStatus, error?: string) => {
  self.postMessage({ id, type: 'status', status, error } satisfies WorkerResponse)
}

type ProgressInfo = {
  status: string
  file?: string
  progress?: number
  loaded?: number
  total?: number
  files?: Record<string, { loaded: number; total: number }>
}

const postProgress = (id: number, progress: Partial<ModelProgressState>) => {
  self.postMessage({ id, type: 'progress', progress } satisfies WorkerResponse)
}

const fallbackResult = (): ModelAssistResult => ({
  summaryEn: 'Rules-only mode. The local model was not available, so the recommendation is based on extracted markings, heuristics, and reviewer answers.',
  summaryFr: 'Mode fondé sur les règles. Le modèle local n’était pas disponible; la recommandation repose sur les marquages détectés, les heuristiques et les réponses du réviseur.',
  rationaleEn: 'Review the evidence excerpts and confirm the injury threshold manually before final release.',
  rationaleFr: 'Examinez les extraits de preuve et confirmez manuellement le seuil de préjudice avant la diffusion finale.',
  evidence: [],
  caveats: ['local-model-unavailable']
})

const severitySummary: Record<SensitivitySignal['severityHint'], { en: string, fr: string }> = {
  none: {
    en: 'no material sensitivity cue',
    fr: 'aucun indice de sensibilité notable'
  },
  injury: {
    en: 'injury-level non-national sensitivity',
    fr: 'sensibilité hors intérêt national au niveau du préjudice'
  },
  serious: {
    en: 'serious non-national injury cues',
    fr: 'indices de préjudice grave hors intérêt national'
  },
  extremely_grave: {
    en: 'extremely grave non-national injury cues',
    fr: 'indices de préjudice extrêmement grave hors intérêt national'
  },
  national_injury: {
    en: 'national-interest injury cues',
    fr: 'indices de préjudice à l’intérêt national'
  },
  national_serious: {
    en: 'serious national-interest injury cues',
    fr: 'indices de préjudice grave à l’intérêt national'
  },
  national_exceptional: {
    en: 'exceptionally grave national-interest injury cues',
    fr: 'indices de préjudice exceptionnellement grave à l’intérêt national'
  }
}

const buildLocalAssistResult = (payload: AnalyzePayload): ModelAssistResult => {
  const topSignals = payload.signals.slice(0, 6)
  const signalGroups = Array.from(new Set(topSignals.map((signal) => signal.code)))
  const strongestSignal = payload.signals.reduce<SensitivitySignal | null>((current, signal) => {
    if (!current) {
      return signal
    }

    const currentIndex = Object.keys(severitySummary).indexOf(current.severityHint)
    const nextIndex = Object.keys(severitySummary).indexOf(signal.severityHint)
    return nextIndex > currentIndex ? signal : current
  }, null)
  const strongestDescription = strongestSignal
    ? severitySummary[strongestSignal.severityHint]
    : severitySummary.none
  const chunkMarkers = payload.chunks.slice(0, 3).map((chunk) => chunk.marker).join(', ')
  const evidence = topSignals.map((signal) => ({
    excerpt: signal.matchedText,
    reason: `${signal.code}: ${severitySummary[signal.severityHint].en}`,
    sourceMarker: payload.chunks.find((chunk) => chunk.sectionIds.includes(signal.sectionId))?.marker,
    sectionIds: [signal.sectionId]
  }))

  return {
    summaryEn: payload.signals.length
      ? `Local evidence synthesis reviewed ${payload.chunks.length} chunk(s) and found ${payload.signals.length} sensitivity cue(s), led by ${strongestDescription.en}. Primary cue groups: ${signalGroups.join(', ')}.`
      : `Local evidence synthesis reviewed ${payload.chunks.length} chunk(s) and found no sensitivity cue beyond the reviewer answers.`,
    summaryFr: payload.signals.length
      ? `La synthèse locale des éléments de preuve a examiné ${payload.chunks.length} segment(s) et trouvé ${payload.signals.length} indice(s) de sensibilité, principalement ${strongestDescription.fr}. Groupes d’indices principaux : ${signalGroups.join(', ')}.`
      : `La synthèse locale des éléments de preuve a examiné ${payload.chunks.length} segment(s) et n’a trouvé aucun indice de sensibilité au-delà des réponses du réviseur.`,
    rationaleEn: chunkMarkers
      ? `Local evidence synthesis prioritized matched excerpts and reviewer answers across ${chunkMarkers}. Confirm the final injury threshold against the source text before release.`
      : 'Local evidence synthesis used reviewer answers and extracted evidence. Confirm the final injury threshold against the source text before release.',
    rationaleFr: chunkMarkers
      ? `La synthèse locale des éléments de preuve a priorisé les extraits correspondants et les réponses du réviseur dans ${chunkMarkers}. Confirmez le seuil de préjudice final avec le texte source avant la diffusion.`
      : `La synthèse locale des éléments de preuve a utilisé les réponses du réviseur et les éléments de preuve extraits. Confirmez le seuil de préjudice final avec le texte source avant la diffusion.`,
    evidence,
    caveats: ['local-evidence-synthesis']
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
      postProgress(id, {
        stage: 'loading',
        label: 'Starting local model',
        percent: 0,
        loadedBytes: 0,
        totalBytes: 0,
        currentFile: '',
        files: {}
      })
      runtimeBaseUrl = baseUrl.replace(/\/$/, '')
      env.allowRemoteModels = false
      env.allowLocalModels = true
      env.localModelPath = `${runtimeBaseUrl}/models/`
      env.backends.onnx.wasm.wasmPaths = `${runtimeBaseUrl}/wasm/`
      env.useBrowserCache = false

      cachedPipeline = await pipeline('text-generation', MODEL_ID, {
        dtype: 'q4',
        device: 'wasm',
        progress_callback(info: ProgressInfo) {
          if (info.status === 'progress_total') {
            postProgress(id, {
              stage: 'loading',
              label: 'Loading local model',
              percent: Math.round(info.progress ?? 0),
              loadedBytes: info.loaded ?? 0,
              totalBytes: info.total ?? 0,
              currentFile: info.file ?? '',
              files: info.files ?? {}
            })
            return
          }

          if (info.status === 'download' || info.status === 'progress') {
            postProgress(id, {
              stage: 'loading',
              label: 'Loading local model',
              currentFile: info.file ?? ''
            })
            return
          }

          if (info.status === 'ready') {
            postProgress(id, {
              stage: 'ready',
              label: 'Local model ready',
              percent: 100
            })
          }
        }
      })

      const runner = cachedPipeline as TextGenerationRunner
      if (!runner.tokenizer) {
        postProgress(id, {
          stage: 'loading',
          label: 'Loading local tokenizer',
          currentFile: 'tokenizer.json'
        })
        runner.tokenizer = await loadLocalTokenizer()
      }

      postStatus(id, 'ready')
      postProgress(id, {
        stage: 'ready',
        label: 'Local model ready',
        percent: 100,
        currentFile: ''
      })
      return cachedPipeline
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : 'model-initialization-failed'
      console.error('Local model initialization failed:', caught)
      postStatus(id, 'fallback', message)
      postProgress(id, {
        stage: 'fallback',
        label: `Local model unavailable: ${message}`
      })
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
    self.postMessage({ id, type: 'result', result: buildLocalAssistResult(payload) } satisfies WorkerResponse)
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : 'model-inference-failed'
    console.error('Local model inference failed:', caught)
    postStatus(id, 'fallback', message)
    postProgress(id, {
      stage: 'fallback',
      label: `Local model inference failed: ${message}`
    })
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
