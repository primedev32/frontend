<template>
  <section class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__logo-link" to="/"
          ><span class="header__logo">Primedev</span></NuxtLink
        >

        <NuxtLink to="/blogs" class="header__btn">
          <span class="header__btn-text">Вернуться на главную</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 38px 0 36px 0;
  border-radius: 0px 0px 15px 15px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 100;
  @media screen and (max-width: 655px) {
    padding: 25px 0 25px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    color: #fff;
    font-family: 'Onest';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    @media screen and (max-width: 913px) {
      font-size: 25px;
    }
    &-link {
      text-decoration: none;
    }
  }

  &__link {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::after {
      content: '';
      position: absolute;
      top: 31px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
  }
  &__btn {
    padding: 18px 50px;
    border-radius: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #ffffff4f;
    }
    @media screen and (max-width: 1500px) {
      padding: 10px 20px;
    }
    @media screen and (max-width: 913px) {
      padding: 5px 10px;
    }
  }
  &__btn-text {
    color: #fff;
    text-align: center;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 913px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
}
</style>
