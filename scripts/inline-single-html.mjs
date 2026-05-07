import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const outputDir = path.join(projectRoot, '.output', 'public')
const distDir = path.join(projectRoot, 'dist-single')
const modelName = 'SmolLM2-135M-ONNX'

const readText = (target) => readFile(target, 'utf8')

const resolveOutputAssetPath = (assetUrl) => {
  const cleanUrl = assetUrl.replace(/^https?:\/\/[^/]+/i, '').split('?')[0]
  const parts = cleanUrl.split('/').filter(Boolean)
  const nuxtIndex = parts.indexOf('_nuxt')

  if (nuxtIndex !== -1) {
    return path.join(outputDir, ...parts.slice(nuxtIndex))
  }

  return path.join(outputDir, ...parts)
}

const copyDir = async (source, target) => {
  await mkdir(target, { recursive: true })
  const entries = await readdir(source, { withFileTypes: true })

  for (const entry of entries) {
    const from = path.join(source, entry.name)
    const to = path.join(target, entry.name)
    if (entry.isDirectory()) {
      await copyDir(from, to)
    } else {
      await copyFile(from, to)
    }
  }
}

await rm(distDir, { recursive: true, force: true })
await mkdir(distDir, { recursive: true })

let html = await readText(path.join(outputDir, 'index.html'))

const stylesheetTags = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g)]
for (const match of stylesheetTags) {
  const [fullTag, href] = match
  const css = await readText(resolveOutputAssetPath(href))
  html = html.replace(fullTag, () => `<style>\n${css}\n</style>`)
}

const modulePreloadTags = [...html.matchAll(/<link[^>]+modulepreload[^>]*>/g)]
for (const match of modulePreloadTags) {
  html = html.replace(match[0], '')
}

const scriptTags = [...html.matchAll(/<script type="module"[^>]+src="([^"]+)"[^>]*><\/script>/g)]
for (const match of scriptTags) {
  const [fullTag, src] = match
  const js = await readText(resolveOutputAssetPath(src))
  const escapedJs = js.replace(/<\/script>/g, '<\\/script>')
  html = html.replace(fullTag, () => `<script type="module">\n${escapedJs}\n</script>`)
}

await writeFile(path.join(distDir, 'index.html'), html)
await writeFile(path.join(distDir, '200.html'), html)
await writeFile(path.join(distDir, '404.html'), html)
await writeFile(path.join(distDir, '.nojekyll'), '')

const runtimeAssets = [
  {
    source: path.join(projectRoot, 'public', 'models', modelName),
    target: path.join(distDir, 'models', modelName)
  },
  {
    source: path.join(projectRoot, 'public', 'wasm'),
    target: path.join(distDir, 'wasm')
  }
]

for (const asset of runtimeAssets) {
  try {
    const details = await stat(asset.source)
    if (details.isDirectory()) {
      await copyDir(asset.source, asset.target)
    }
  } catch {
    // Ignore missing runtime assets.
  }
}

const nuxtAssetDir = path.join(outputDir, '_nuxt')

try {
  const entries = await readdir(nuxtAssetDir)
  const ortAssets = entries.filter((name) => name.startsWith('ort-') && name.endsWith('.wasm'))

  if (ortAssets.length) {
    await mkdir(path.join(distDir, '_nuxt'), { recursive: true })
    for (const asset of ortAssets) {
      await copyFile(path.join(nuxtAssetDir, asset), path.join(distDir, '_nuxt', asset))
    }
  }
} catch {
  // Ignore missing emitted ONNX runtime assets.
}
