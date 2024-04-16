// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-particles",
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-anime",
    "nuxt-swiper",
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: "https://sarpysevents.com/graphql",
    },
  },
  anime: {
    composables: true,
  },
  plugins: [
    {
      src: "~/plugins/vue3-particles.ts",
      mode: "client",
    },
  ],
  build: {
    transpile: ["gsap"],
  },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        proxy: 'http://localhost:8080/api/**',
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "./assets/images/logo-favicon.png" }
      ]
  }
});
