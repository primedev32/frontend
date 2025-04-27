<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">
          {{ $t('blog-1.title') }}
        </h1>
        <p class="blog__description">
          {{ $t('blog-1.description') }}
        </p>
        <img src="/img/blog-1-0.png" alt="img" class="blog__img" />
        <h2 class="blog__subtitle">
          {{ $t('blog-1.subtitle-1') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-1-description') }}
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-1-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-1-item-2') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-1-item-3') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-1-item-4') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-1-description-2') }}
        </p>
        <h2 class="blog__subtitle">
          {{ $t('blog-1.subtitle-2') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-2-description') }}
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">{{ $t('blog-1.subtitle-2-item-1') }}</p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">{{ $t('blog-1.subtitle-2-item-2') }}</p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-2-item-3') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-2-description-2') }}
        </p>
        <h2 class="blog__subtitle">
          {{ $t('blog-1.subtitle-3') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-3-description') }}
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-3-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-3-item-2') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-3-item-3') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-3-item-4') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-3-description-2') }}
        </p>
        <div class="blog__img-wrapper">
          <img src="/img/blog-1-1.png" alt="img" class="blog__img" />
        </div>
        <h2 class="blog__subtitle">
          {{ $t('blog-1.subtitle-4') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-4-description') }}
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-4-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-1.subtitle-4-item-2') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">
          {{ $t('blog-1.subtitle-4-description-2') }}
        </p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script lang="ts" setup>
import { BlogsHeader } from '#components'
useHead({
  title: 'Как привлечь новых клиентов на сайт в 2025 году? | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Эффективные стратегии интернет-маркетинга, SEO, контент-маркетинга и таргетированной рекламы для привлечения новых клиентов в 2025 году.',
    },
    {
      property: 'og:title',
      content:
        'Как привлечь новых клиентов на сайт в 2025 году? | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Рассказываем, как использовать современные digital-инструменты, чтобы увеличить трафик и конверсию на сайте в 2025 году.',
    },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:url',
      content: 'https://primedev.pro/blogs/1',
    },
    // {
    //   property: 'og:image',
    //   content: 'https://primedev.pro/images/blog-attract-clients.jpg',
    // },
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
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 655px) {
      margin-bottom: 25px;
      font-size: 22px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #cccccc;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
  }
  &__subtitle {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    @media screen and (max-width: 913px) {
      font-size: 22px;
    }
    @media screen and (max-width: 655px) {
      font-size: 18px;
    }
  }
  &__item-text {
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
