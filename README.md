# Classification Assist

Single-page Nuxt 4 app for reviewing `.docx` documents against the Government of Canada security ladder. The client parses the document locally, asks a short reviewer questionnaire, and combines deterministic rules with a local Transformers.js model for evidence summarization.

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS
- Nuxt UI
- Mammoth for `.docx` text extraction
- Transformers.js with a local ONNX model

## Commands

```bash
npm install
npm run prepare:runtime
npm run dev
```

Build the deployable package:

```bash
npm run build:single
```

Build for GitHub Pages under a repo subpath:

```bash
NUXT_APP_BASE_URL=/classification-assist/ npm run build:single
```

This writes `dist-single/` with:

- `index.html`
- `200.html`
- `404.html`
- `.nojekyll`
- `models/`
- `wasm/`

## Notes

- Version 1 supports `.docx` only.
- The final label is advisory and remains reviewer-controlled.
- The bundled local model is `onnx-community/SmolLM2-135M-ONNX` in `q4` form to keep the runtime small enough for browser use.
- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml` and publishes the generated `dist-single/` artifact through the official Pages Actions flow.
