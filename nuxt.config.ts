// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules:[
    '@unocss/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' }
  },
  // routeRules: {
  //   // Admin dashboard renders only on client-side
  //   '/about/**': { ssr: false },
  // }
})
