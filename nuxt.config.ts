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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-aos'],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },


  head: {
    link: [
      {rel: 'stylesheet', type: 'text/css', href: '/bootstrap/css/bootstrap.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/bootstrap-icons/bootstrap-icons.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/aos/aos.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/swiper/swiper-bundle.min.css'}
    ],
    script: [
      {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js', tagPosition: 'bodyClose'},
      {src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', tagPosition: 'bodyClose'}
    ]
  },

  css: ['@/assets/css/main.css', '@/assets/scss/main.scss', '~/node_modules/bootstrap/dist/css/bootstrap.min.css'],

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
});