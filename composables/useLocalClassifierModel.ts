import type { AnalysisChunk, ModelAssistResult, QuestionnaireAnswers, SensitivitySignal, SupportedLocale } from '~~/lib/classification/types'
import LocalClassifierWorker from '../app/workers/local-classifier.worker?worker&inline'

type WorkerStatus = 'idle' | 'loading' | 'ready' | 'fallback'

type AnalyzePayload = {
  baseUrl: string
  locale: SupportedLocale
  chunks: AnalysisChunk[]
  signals: SensitivitySignal[]
  answers: QuestionnaireAnswers
}

type AnalyzeInput = Omit<AnalyzePayload, 'baseUrl'>

type WorkerRequest =
  | { id: number, type: 'warmup' }
  | { id: number, type: 'analyze', payload: AnalyzePayload }

type WorkerResponse =
  | { id: number, type: 'status', status: WorkerStatus, error?: string }
  | { id: number, type: 'result', result: ModelAssistResult }
  | { id: number, type: 'error', error: string, fallback: ModelAssistResult }

let workerInstance: Worker | null = null
let nextRequestId = 0
const pendingRequests = new Map<number, {
  resolve: (value: ModelAssistResult) => void
  reject: (reason?: unknown) => void
}>()

const resolveBaseUrl = () => {
  if (!import.meta.client) {
    return ''
  }

  return new URL('.', window.location.href).toString().replace(/\/$/, '')
}

const fallbackResult = (): ModelAssistResult => ({
  summaryEn: 'Rules-only mode. The local model was not available, so the recommendation is based on extracted markings, heuristics, and reviewer answers.',
  summaryFr: 'Mode fondé sur les règles. Le modèle local n’était pas disponible; la recommandation repose sur les marquages détectés, les heuristiques et les réponses du réviseur.',
  rationaleEn: 'Review the evidence excerpts and confirm the injury threshold manually before final release.',
  rationaleFr: 'Examinez les extraits de preuve et confirmez manuellement le seuil de préjudice avant la diffusion finale.',
  evidence: [],
  caveats: ['local-model-unavailable']
})

const createWorker = (
  onStatus: (status: WorkerStatus, error?: string) => void
) => {
  if (!import.meta.client) {
    return null
  }

  if (workerInstance) {
    return workerInstance
  }

  workerInstance = new LocalClassifierWorker()

  workerInstance.addEventListener('message', (event: MessageEvent<WorkerResponse>) => {
    const message = event.data

    if (message.type === 'status') {
      onStatus(message.status, message.error)
      return
    }

    if (message.type === 'result') {
      pendingRequests.get(message.id)?.resolve(message.result)
      pendingRequests.delete(message.id)
      return
    }

    if (message.type === 'error') {
      onStatus('fallback', message.error)
      pendingRequests.get(message.id)?.resolve(message.fallback)
      pendingRequests.delete(message.id)
    }
  })

  workerInstance.addEventListener('error', (event) => {
    onStatus('fallback', event.message)
    for (const pending of pendingRequests.values()) {
      pending.resolve(fallbackResult())
    }
    pendingRequests.clear()
  })

  return workerInstance
}

export const useLocalClassifierModel = () => {
  const status = useState<WorkerStatus>('model-status', () => 'idle')
  const error = useState<string | null>('model-error', () => null)
  const warmupStarted = useState<boolean>('model-warmup-started', () => false)

  const updateStatus = (nextStatus: WorkerStatus, nextError?: string) => {
    status.value = nextStatus
    error.value = nextError ?? null
  }

  const postMessage = (message: WorkerRequest) => {
    const worker = createWorker(updateStatus)

    if (!worker) {
      updateStatus('fallback', 'worker-unavailable')
      return null
    }

    worker.postMessage(message)
    return worker
  }

  const warmup = () => {
    if (!import.meta.client || warmupStarted.value || status.value === 'ready') {
      return
    }

    warmupStarted.value = true
    const id = ++nextRequestId
    postMessage({ id, type: 'warmup', payload: { baseUrl: resolveBaseUrl() } })
  }

  const analyze = async (payload: AnalyzeInput): Promise<ModelAssistResult> => {
    const id = ++nextRequestId
    const safePayload: AnalyzePayload = {
      baseUrl: resolveBaseUrl(),
      locale: payload.locale,
      chunks: payload.chunks.map((chunk) => ({
        id: chunk.id,
        marker: chunk.marker,
        sectionIds: [...chunk.sectionIds],
        signalMatches: [...chunk.signalMatches],
        text: chunk.text
      })),
      signals: payload.signals.map((signal) => ({
        code: signal.code,
        category: signal.category,
        severityHint: signal.severityHint,
        matchedText: signal.matchedText,
        sectionId: signal.sectionId,
        confidence: signal.confidence
      })),
      answers: { ...payload.answers }
    }

    const worker = postMessage({ id, type: 'analyze', payload: safePayload })
    if (!worker) {
      return fallbackResult()
    }

    return new Promise<ModelAssistResult>((resolve, reject) => {
      pendingRequests.set(id, { resolve, reject })
    })
  }

  return {
    status,
    error,
    warmup,
    analyze
  }
}
