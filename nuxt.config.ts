// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon', 
    '@nuxt/eslint', 
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],
  
  colorMode: {
    classSuffix: ''
  },
  
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.json'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },
  
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID
    }
  }
})