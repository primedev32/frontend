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
      [
        '@nuxtjs/i18n',
        {
          vueI18n: './vueI18n/i18n.config.ts',
          locales: [
            { code: 'ru', name: 'RU', files: ['ru.json'] },
            { code: 'en', name: 'EN', files: ['en.json'] },
          ],
          lazy: true,
          langDir: './vueI18n/lang',
          defaultLocale: 'ru',
        }
      ],
    ],
  build: {
    transpile: ['gsap'],
  },
  vite: {
    server: {
      allowedHosts: [
        'primedev.pro',
        'www.primedev.pro',
        'admin.primedev.pro',
        'token.primedev.pro',
        'localhost',
        '127.0.0.1'
      ]
    }
  },
  yandexMaps: {
    apikey: '54a27b4b-995e-4730-ab68-4da252a2b940',
  },
  runtimeConfig: {
    apiKey: process.env.NUXT_PRIVATE_KEY_FOR_STRAPI,
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  }
})