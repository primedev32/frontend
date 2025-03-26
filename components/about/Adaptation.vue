<template>
  <section class="adaptation">
    <div class="container">
      <div class="adaptation__wrapper">
        <div class="adaptation__image">
          <img
            src="/img/phone-adaptation.png"
            alt="img"
            class="adaptation__img"
          />
        </div>
        <div class="adaptation__content">
          <h2 class="adaptation__title">
            более <span class="adaptation__title-span">85%</span>
          </h2>
          <p class="adaptation__description">
            Пользователей заходят на сайт с мобильных устройств, поэтому мы
            уделяем особое внимание адаптивности и удобству интерфейса.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.adaptation {
  background: #fff;
  padding: 130px 0;
  @media screen and (max-width: 1500px) {
    padding: 80px 0;
  }
  @media screen and (max-width: 463px) {
    padding: 80px 0 30px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    @media screen and (max-width: 913px) {
      grid-template-columns: 1fr;
    }
  }
  &__img {
    @media screen and (max-width: 913px) {
      max-width: 600px;
      height: auto;
    }
    @media screen and (max-width: 676px) {
      width: 100%;
    }
  }
  &__content {
    @media screen and (max-width: 913px) {
      order: 1;
    }
  }
  &__image {
    @media screen and (max-width: 913px) {
      display: flex;
      justify-content: flex-end;
      order: 2;
    }
  }
  &__title {
    color: #000;
    font-family: 'Raleway';
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 80px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 40px;
    }
    &-span {
      font-family: 'Onest';
    }
  }
  &__description {
    max-width: 500px;
    color: #000;
    font-family: 'Raleway';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
}
</style>
