<template>
  <section class="blogs">
    <Header />
    <div class="blogs__wrapper">
      <img class="blogs__img-1" src="/img/blogs-hero-1.webp" alt="img" />
      <img class="blogs__img-2" src="/img/blogs-hero-2.webp" alt="img" />
      <div class="blogs__wrapper-content">
        <h1 class="blogs__title">Блог</h1>
        <p class="blogs__description">Полезные статьи для вашего бизнеса</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.blogs {
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 791px;
  background-image: url('/img/hero-blogs.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1500px) {
    min-height: 651px;
  }
  @media screen and (max-width: 913px) {
    min-height: 627px;
  }
  @media screen and (max-width: 817px) {
    background-image: url('/img/blogs-hero-817.webp');
    min-height: 563px;
  }
  @media screen and (max-width: 655px) {
    min-height: 462px;
  }
  @media screen and (max-width: 463px) {
    min-height: 438px;
  }
  &__title {
    color: #000;
    font-family: 'Raleway';
    font-size: 86px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 66px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 655px) {
      font-size: 30px;
    }
    @media screen and (max-width: 463px) {
      font-size: 25px;
    }
  }
  &__description {
    color: #000;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 20px;
    }
    @media screen and (max-width: 655px) {
      font-size: 18px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
  &__wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 1870px;
    width: 100%;
    height: 100%;
    padding: 0 50px;
    &-content {
      position: absolute;
      top: 350px;
      left: 50px;
      @media screen and (max-width: 1024px) {
        left: 40px;
      }
      @media screen and (max-width: 817px) {
        top: 55px;
      }
      @media screen and (max-width: 480px) {
        left: 15px;
      }
    }
  }
  &__img-1 {
    position: absolute;
    top: -140px;
    left: -20px;
    width: 878px;
    height: auto;
    @media screen and (max-width: 1500px) {
      top: -116px;
      left: 0px;
      width: 765px;
    }
    @media screen and (max-width: 1200px) {
      top: -120px;
      width: 569px;
    }
  }
  &__img-2 {
    position: absolute;
    top: 150px;
    right: 250px;
    width: 380px;
    height: auto;
    @media screen and (max-width: 1500px) {
      top: 97px;
      right: 50px;
      width: 296px;
    }
    @media screen and (max-width: 1200px) {
      top: 138px;
      width: 244px;
    }
    @media screen and (max-width: 817px) {
      left: 40px;
      top: 196px;
      width: 190px;
    }
    @media screen and (max-width: 655px) {
      top: 149px;
    }
    @media screen and (max-width: 480px) {
      left: 15px;
    }
  }
}
</style>
