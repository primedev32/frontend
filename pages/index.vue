<template>
  <div>
    <HomeHero />
    <HomeAdvantage />
    <HomeProjects />
    <HomeTypesSite />
    <HomeMarketing />
    <HomeReviews />
    <CommonContacts :title="'Начнём работу?'" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Создание сайтов под ключ | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Мы предлагаем создание сайтов под ключ, включая разработку дизайна, функционала, SEO-оптимизацию и поддержку. Узнайте, как современные технологии и тенденции помогут вашему бизнесу.',
    },
    {
      property: 'og:title',
      content: 'Создание сайтов под ключ | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Мы разрабатываем сайты под ключ с учетом самых современных технологий: адаптивный дизайн, интеграция с CRM, SEO-оптимизация, безопасность и поддержка на всех этапах.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://primedev.pro/' },
    // { property: 'og:image', content: 'https://primedev.pro/images/website-development.jpg' },
    { property: 'og:site_name', content: 'Primedev.pro' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
