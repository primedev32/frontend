<template>
  <div>
    <BlogsHero />
    <BlogsItems />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Блог',
  meta: [
    {
      name: 'description',
      content: 'Читайте свежие статьи о веб-разработке, дизайне и IT-решениях.',
    },
    { property: 'og:title', content: 'Блог' },
    {
      property: 'og:description',
      content:
        'Последние статьи о технологиях, разработке и цифровых решениях.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://primedev.pro/blogs' },
    // { property: 'og:image', content: 'https://primedev.pro/blog-preview.jpg' },
    { property: 'og:site_name', content: 'Primedev.pro' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
