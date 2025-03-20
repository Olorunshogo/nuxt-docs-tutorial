// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    shim: false
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'NUXT App',
      titleTemplate: '%s - Get Started with NUXT',
      meta: [
        { name: 'description', content: 'NUXT APP' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './public/favicon.ico' }
      ]
    }
  },

  modules: ['@formkit/nuxt'],
  formkit: {
    // Experimental support for auto Loading (see note)
    autoImport: true,
    // defaultConfig: false,
    configFile: './formkit.config.ts'
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys withing public are alse exposed client-side
    public: {
      apiBase: '/api',
      // backendBaseUrl: BACKEND_URL,
      // // production | development
      // appEnvironment: ProcessingInstruction.env.APP_ENVIRONMENT || "development",
      // imageBaseUrlAws: ProcessingInstruction.env.IMAGE_BASE_URL_AWS || "",
    }
  },

  $production: {
    routeRules: {
      '*/**': { isr: true }
    }
  },

  $development: {},

  $env: {
    staging: {
      //
    }
  },

})