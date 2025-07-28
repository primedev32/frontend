<template>
  <section class="blog">
    <BlogsHeader />
    <div class="blog__container">
      <div class="blog__wrapper">
        <h1 class="blog__title">
          {{ $t('blog-3.title') }}
        </h1>
        <h2 class="blog__subtitle">
          {{ $t('blog-3.description') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-3.description-2') }}
        </p>
        <img src="/img/blog-3-0.png" alt="img" class="blog__img" />
        <h2 class="blog__subtitle">
          {{ $t('blog-3.subtitle') }}
        </h2>
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-1') }}</h3>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-1-description') }}
        </p>
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-2') }}</h3>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-2-description') }}
        </p>
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-3') }}</h3>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-3-description') }}
        </p>
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-4') }}</h3>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-4-description') }}
        </p>
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-5') }}</h3>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-5-description') }}
        </p>

        <h2 class="blog__subtitle">
          {{ $t('blog-3.subtitle-6') }}
        </h2>
        <p class="blog__description">
          {{ $t('blog-3.subtitle-6-description') }}
        </p>
        <img src="/img/blog-3-1.jpg" alt="img" class="blog__img" />
        <h3 class="blog__subtitle-2">{{ $t('blog-3.subtitle-7') }}</h3>

        <p class="blog__description">
          {{ $t('blog-3.subtitle-captain-1') }}
        </p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-item-2') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">{{ $t('blog-3.subtitle-captain-2') }}</p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-2-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-2-item-2') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">{{ $t('blog-3.subtitle-captain-3') }}</p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-3-item-1') }}
            </p>
          </li>
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-3-item-2') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">{{ $t('blog-3.subtitle-captain-4') }}</p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-4-item-1') }}
            </p>
          </li>
        </ul>
        <p class="blog__description">{{ $t('blog-3.subtitle-captain-5') }}</p>
        <ul class="list-reset blog__list">
          <li class="blog__item">
            <p class="blog__item-text">
              {{ $t('blog-3.subtitle-captain-5-item-1') }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script lang="ts" setup>
useHead({
  title:
    'Почему без современного сайта ваш бизнес теряет клиентов и как это исправить | Primedev.pro',
  meta: [
    {
      name: 'description',
      content:
        'Узнайте, почему современный сайт — это ключ к успеху вашего бизнеса. Советы, как обновить сайт и вернуть потерянных клиентов.',
    },
    {
      property: 'og:title',
      content:
        'Почему без современного сайта ваш бизнес теряет клиентов и как это исправить | Primedev.pro',
    },
    {
      property: 'og:description',
      content:
        'Если ваш сайт устарел, вы теряете клиентов. Узнайте, как модернизация сайта может вернуть конкурентоспособность вашему бизнесу.',
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://primedev.pro/blogs/3' },
    // { property: 'og:image', content: 'https://primedev.pro/images/blog-modern-website.jpg' },
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
