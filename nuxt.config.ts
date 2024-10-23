const pkg = require("./package");
const path = require('path')

module.exports = {
  router: {
    base: "/HorseBrain/"
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

  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-import': {},
        'postcss-nested': {}
      },
    },
  }
}