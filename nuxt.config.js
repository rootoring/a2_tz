export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com"},
      { rel: "preconnect", href: "https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap", rel:"stylesheet"}
    ],
    script: [
      { hid: 'avesome', crossorigin:'anonymous', src: 'https://kit.fontawesome.com/42a8ed112b.js', defer: true }
    ] 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
], 
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.av100.ru/v3/',
    headers:{
      common: {
        'Content-Type': 'application/json',
        'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
        'X-Device-OS': '1'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
