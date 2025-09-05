<template>
  <div>
    <AboutHero />
    <AboutAdvantages />
    <AboutAdaptation />
    <CommonContacts :title="$t('contacts.title1')" />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'О нас ',
  meta: [
    {
      name: 'description',
      content: 'Мы специализируемся на веб-разработке и IT-услугах.',
    },
    { property: 'og:title', content: 'О нас ' },
    {
      property: 'og:description',
      content: 'Мы специализируемся на веб-разработке и IT-услугах.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://primedev.pro/about' },
    // { property: 'og:image', content: 'https://primedev.pro/og-image.jpg' },
    { property: 'og:site_name', content: 'Primedev.pro' },
    { property: 'og:locale', content: 'ru_RU' },

    // {
    //   name: 'yandex-verification',
    //   content: 'код_подтверждения_яндекс_вебмастер',
    // },
    // { name: 'yandex', content: 'noindex, nofollow' }, // Если нужно запретить индексацию

    // {
    //   name: 'google-site-verification',
    //   content: 'код_подтверждения_google_search_console',
    // },
    { name: 'robots', content: 'index, follow' }, // Разрешает индексацию страницы
  ],
})
</script>

<style></style>
