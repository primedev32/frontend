<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">{{ $t('blog-5.title') }}</h1>
        <h2 class="blog__subtitle">
          {{ $t('blog-5.description') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-5.description-2') }}
        </p>
        <img src="/img/blog-5-0.jpg" alt="img" class="blog__img" />
        <h2 class="blog__subtitle">{{ $t('blog-5.subtitle-1') }}</h2>
        <p class="blog__description">
          {{ $t('blog-5.description-3') }}
        </p>
        <h2 class="blog__subtitle">{{ $t('blog-5.subtitle-2') }}</h2>
        <p class="blog__description">
          {{ $t('blog-5.description-4') }}
        </p>
        <h2 class="blog__subtitle">{{ $t('blog-5.subtitle-3') }}</h2>
        <p class="blog__description">
          {{ $t('blog-5.description-5') }}
        </p>
        <h2 class="blog__subtitle">{{ $t('blog-5.subtitle-4') }}</h2>
        <p class="blog__description">
          {{ $t('blog-5.description-6') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-5.description-7') }}
        </p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Принципы хорошего веб-дизайна | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Изучите ключевые принципы хорошего веб-дизайна, которые помогают создавать удобные, функциональные и привлекательные сайты для бизнеса.',
    },
    {
      property: 'og:title',
      content: 'Принципы хорошего веб-дизайна | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Дизайн — это не только красота, но и функциональность. Узнайте, какие принципы помогут вам создать эффективный веб-сайт для вашего бизнеса.',
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://primedev.pro/blogs/5' },
    // { property: 'og:image', content: 'https://primedev.pro/images/blog-web-design-principles.jpg' },
    { property: 'og:site_name', content: 'Primedev.pro' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  &__container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 100px 50px;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 1024px) {
      padding: 100px 40px;
    }
    @media screen and (max-width: 913px) {
      padding: 70px 40px 10px 40px;
    }
    @media screen and (max-width: 480px) {
      padding: 50px 15px 10px 15px;
    }
  }
  &__wrapper {
    width: 100%;
  }
  &__title {
    margin-bottom: 50px;
    width: 100%;
    color: #fff;
    font-family: 'Raleway';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 655px) {
      margin-bottom: 25px;
      font-size: 18px;
    }
  }
  &__subtitle-2 {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #cccccc;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__subtitle {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
  }
  &__item-text {
    color: #cccccc;
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 14px;
    }
    @media screen and (max-width: 655px) {
      font-size: 12px;
    }
  }
  &__list {
    margin-bottom: 20px;
    padding: 0 20px;
  }
  &__item {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e82626;
    }
  }
  &__img {
    border-radius: 30px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 700px;
    height: auto;
  }
}
</style>
