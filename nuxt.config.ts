// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', 'swiper/swiper-bundle.css',],
  site: { 
    url: 'https://primedev.pro/', 
    name: 'Primedev.pro' 
    }, 
  modules: [
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@vee-validate/nuxt',
    'vue-yandex-maps/nuxt',
    '@nuxtjs/sitemap',
  ],
  build: {
    transpile: ['gsap'],
  },
  yandexMaps: {
    apikey: '54a27b4b-995e-4730-ab68-4da252a2b940',
  },
})