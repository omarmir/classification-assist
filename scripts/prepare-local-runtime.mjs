import { mkdir, copyFile, access, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')
const wasmDir = path.join(publicDir, 'wasm')
const modelName = 'SmolLM2-135M-ONNX'
const modelRepo = `onnx-community/${modelName}`
const modelDir = path.join(publicDir, 'models', modelName)
const runtimeSource = path.join(projectRoot, 'node_modules', 'onnxruntime-web', 'dist')

const requiredModelFiles = [
  'config.json',
  'generation_config.json',
  'special_tokens_map.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'vocab.json',
  'merges.txt',
  'onnx/model_q4.onnx',
  'onnx/model_q4.onnx_data'
]

const optionalModelFiles = ['added_tokens.json']

const ensureDir = async (dir) => {
  await mkdir(dir, { recursive: true })
}

const exists = async (target) => {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

const copyRuntime = async () => {
  await ensureDir(wasmDir)

  const runtimeFiles = (await readdir(runtimeSource)).filter(
    (file) => (file.startsWith('ort-') || file.startsWith('ort.')) && !file.endsWith('.map')
  )

  for (const file of runtimeFiles) {
    const source = path.join(runtimeSource, file)
    const target = path.join(wasmDir, file)
    if (await exists(source)) {
      await copyFile(source, target)
    }
  }
}

const writeNodeFile = async (target, buffer) => {
  const { writeFile } = await import('node:fs/promises')
  await writeFile(target, buffer)
}

const fetchRepoFile = async (file, optional = false) => {
  const target = path.join(modelDir, file)

  if (await exists(target)) {
    return
  }

  const url = `https://huggingface.co/${modelRepo}/resolve/main/${file}`
  const response = await fetch(url)

  if (!response.ok || !response.body) {
    if (optional && response.status === 404) {
      return
    }

    throw new Error(`Failed to download ${file}: ${response.status}`)
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  await ensureDir(path.dirname(target))
  await writeNodeFile(target, buffer)
}

const downloadModel = async () => {
  await ensureDir(modelDir)

  for (const file of requiredModelFiles) {
    await fetchRepoFile(file)
  }

  for (const file of optionalModelFiles) {
    await fetchRepoFile(file, true)
  }
}

await ensureDir(publicDir)
await copyRuntime()
await downloadModel()
