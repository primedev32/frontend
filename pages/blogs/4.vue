<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">{{ $t('blog-4.title') }}</h1>
        <h2 class="blog__subtitle">
          {{ $t('blog-4.description') }}
        </h2>
        <img src="/img/blog-4-0.jpg" alt="img" class="blog__img" />
        <p class="blog__description">
          {{ $t('blog-4.description-2') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-4.description-3') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-4.description-4') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-4.description-5') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-4.description-6') }}
        </p>
        <p class="blog__description">
          {{ $t('blog-4.description-7') }}
        </p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Зачем вообще нужен веб-дизайн бизнесу? | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Узнайте, почему качественный веб-дизайн — это не просто эстетика, а важный инструмент для привлечения клиентов и повышения конверсии вашего бизнеса.',
    },
    {
      property: 'og:title',
      content: 'Зачем вообще нужен веб-дизайн бизнесу? | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Веб-дизайн — это не только внешний вид сайта. Он помогает создавать позитивное впечатление о бизнесе и улучшать пользовательский опыт. Узнайте, как.',
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://primedev.pro/blogs/4' },
    // { property: 'og:image', content: 'https://primedev.pro/images/blog-web-design.jpg' },
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
