const resolve = require('path').resolve
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Porfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [],
  },
  srcDir: resolve(__dirname, 'src'),
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['boxicons/css/boxicons.min.css', 'remixicon/fonts/remixicon.css', '@/assets/styles/porfolio/global.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-carousel.js', ssr: false }, { src: "@/plugins/request.js" }, { src: '@/plugins/scroll-reveal.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://fakestoreapi.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    // your settings here
    sass: [],
    scss: [],
    less: [
      '@/assets/styles/porfolio/config/_variables.less', '@/assets/styles/porfolio/theme/_theme.less',
    ],
    stylus: [],
  },
}
