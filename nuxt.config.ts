const pkg = require("./package");
const path = require('path')

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: "/HorseBrain/"
  },
  app: {
    baseURL: "/HorseBrain/"
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  css: ['@/assets/css/main.css'],

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
})
