// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/css/themes.css'
  ],

  // Fix #8 — Brotli/gzip compression + minification for all served assets
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true
    },
    minify: true
  },

  // Fix #8 — Static asset caching headers
  routeRules: {
    // Cat sprite frames + icons: cache forever (content-addressed by filename)
    '/**.png': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/**.ico': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    // HTML: always revalidate
    '/': { headers: { 'Cache-Control': 'public, max-age=0, must-revalidate' } }
  },

  app: {
    head: {
      title: 'Kamel Fares — Software Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Kamel Fares — Software Developer based in Hamburg. Vue.js, Nuxt, Machine Learning, Hardware Design.' },
        // Fix #13 — match dark background on mobile browser chrome
        { name: 'theme-color', content: '#0d0c07' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/hiss.png', sizes: 'any' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Fix #1 — font-display:optional prevents invisible text flash and layout shift (CLS)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700;800&display=optional' },
        // Fix #8 — preload first cat animation frame to avoid LCP image pop-in
        { rel: 'preload', as: 'image', href: '/1.png' }
      ]
    }
  }
})