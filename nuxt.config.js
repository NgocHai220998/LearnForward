module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Learn Forward',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: 'Learn Forward', },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg', },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070', },
  css: [
    '@/assets/style/main.scss',
  ],
  /**
   * ENV
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  /**
   * Config modules
   */
  modules: [
    '@nuxtjs/pwa',
  ],
};
