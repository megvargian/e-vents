// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-particles',
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime',
  ],
  runtimeConfig: {
    public: {
        wordpressUrl: 'https://sarpysevents.com/graphql'
    }
  },
  anime: {
    composables: true
  },
  plugins: [
    {
      src: '~/plugins/vue3-particles.ts',
      mode: 'client',
    },
  ],
})
