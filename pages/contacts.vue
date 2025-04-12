<template>
  <div>
    <ContactsHero />
    <ContactsMap />
    <CommonContacts :title="'оставляй заявку!'" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Контакты | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Свяжитесь с нами! Контактная информация Primedev.pro: email, телефон, социальные сети. Мы всегда на связи!',
    },
    { property: 'og:title', content: 'Контакты | Primedev.pro' },
    {
      property: 'og:description',
      content:
        'Как связаться с Primedev.pro? Телефон, email, адрес и соцсети — вся информация для удобной коммуникации.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://primedev.pro/contacts' },
    // { property: 'og:image', content: 'https://primedev.pro/og-image.jpg' }, // Добавь реальную картинку
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
