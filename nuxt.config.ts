// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules:[
    '@unocss/nuxt',
    "@tresjs/nuxt",
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: ['~/assets/css/main.css'],
  //todo figure out why transitions show me a problem with the nodes?
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' }
  },
  // routeRules: {
  //   // Admin dashboard renders only on client-side
  //   '/about/**': { ssr: false },
  // }
})
