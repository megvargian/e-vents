// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime'
  ],
  runtimeConfig: {
    public: {
        wordpressUrl: 'https://sarpysevents.com/graphql'
    }
  },
  anime: {
    composables: true
  }
})
