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
      apiBase: '/api'
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