// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      title: 'NUXT App',
      meta: [
        { name: 'description', content: 'NUXT APP' },
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  css: ['./assets/css/main.css'],
  // css: ['./assets/css/output.css'],
  devtools: { enabled: true },
  $development: {},

  $env: {
    staging: {
      //
    }
  },

  formkit: {
    // Experimental support for auto Loading (see note)
    autoImport: true,
    // defaultConfig: false,
    configFile: './formkit.config.ts'
  },
  future: {
    compatibilityVersion: 4
  },

  modules: ['@formkit/nuxt', '@nuxt/image', 'nuxt-auth-utils', '@nuxt/icon'],

  // Prerender
  nitro: {
    prerender: {
      routes: ["./pages/posts/[1].vue", "./pages/posts/[2].vue"],
      ignore: ["./pages/index.vue", "./pages/about.vue"]
    }
  },

  $production: {
    routeRules: {
      '*/**': { isr: true }
    }
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

  typescript: {
    shim: false
  },  

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },  

})