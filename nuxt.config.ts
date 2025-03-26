// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', 'swiper/swiper-bundle.css',],
  modules: [
    '@vueuse/nuxt', 'nuxt-swiper', '@vee-validate/nuxt', 'vue-yandex-maps/nuxt'
  ],
  build: {
    transpile: ['gsap'],
  },
  yandexMaps: {
    apikey: '54a27b4b-995e-4730-ab68-4da252a2b940',
  },
})
