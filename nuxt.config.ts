export default defineNuxtConfig({
  compatibilityDate: '2026-05-07',
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  future: {
    compatibilityVersion: 4
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Classification Assist',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Client-side document security classification assistant for Government of Canada review workflows.'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2216%22 fill=%22%2307111f%22/%3E%3Cpath d=%22M32 12l16 6v12c0 10.4-6.8 19.9-16 22-9.2-2.1-16-11.6-16-22V18l16-6z%22 fill=%22%23f59e0b%22/%3E%3Cpath d=%22M24 31l5 5 11-11%22 fill=%22none%22 stroke=%22%2307111f%22 stroke-width=%224%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  hooks: {
    'prerender:routes'(ctx) {
      ctx.routes.clear()
    }
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          manualChunks: undefined
        }
      }
    }
  }
})
