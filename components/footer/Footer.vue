<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <h3 class="footer__title">Primedev</h3>
        <nav class="footer__nav">
          <ul class="list-reset footer__list">
            <li v-for="(item, index) in navList" :key="index">
              <NuxtLink :to="item.link" class="footer__link">{{
                item.title
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__wrapper-2">
        <div class="footer__wrapper-policy">
          <a
            href="/doc/policy.pdf"
            class="footer__wrapper-policy-link"
            target="_blank"
            >Политика конфиденциальности</a
          >
          <span class="footer__wrapper-policy-text">© Primedev 2020–2025</span>
        </div>
        <ul class="list-reset footer__list-social">
          <li v-for="(item, index) in socialList" :key="index">
            <a :href="item.link" target="_blank" class="footer__link-social"
              ><img :src="item.icon" alt="img" class="footer__img-social"
            /></a>
          </li>
        </ul>
        <a href="tel:+79996211951" class="footer__phone">+7 (999) 621-19-51</a>
      </div>
      <h2 class="footer__title-2">Primedev</h2>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  padding: 100px 0 0px 0;
  @media screen and (max-width: 817px) {
    padding: 80px 0 0px 0;
  }
  &__wrapper {
    margin-bottom: 40px;
    display: flex;
    gap: 400px;
    @media screen and (max-width: 1500px) {
      gap: 50px;
      justify-content: space-between;
    }
    @media screen and (max-width: 1086px) {
      flex-direction: column;
      gap: 30px;
    }
    @media screen and (max-width: 817px) {
      margin-bottom: 30px;
    }
  }
  &__list {
    display: flex;
    gap: 80px;
    @media screen and (max-width: 817px) {
      gap: 40px;
    }
    @media screen and (max-width: 463px) {
      gap: 20px;
    }
  }
  &__title {
    color: #fff;
    font-family: 'Onest';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    @media screen and (max-width: 1500px) {
      font-size: 24px;
    }
  }
  &__wrapper-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @media screen and (max-width: 817px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }
  &__link {
    position: relative;
    color: #fff;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
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
    @media screen and (max-width: 463px) {
      font-size: 15px;
    }
  }
  &__wrapper-policy {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__wrapper-policy-link {
    color: #fff;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 463px) {
      font-size: 15px;
    }
  }
  &__wrapper-policy-text {
    color: #fff;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 463px) {
      font-size: 15px;
    }
  }
  &__list-social {
    display: flex;
    gap: 25px;
  }
  &__phone {
    position: relative;
    color: #fff;
    font-family: 'Onest';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 38.4px */
    text-decoration: none;
    &::after {
      content: '';
      position: absolute;
      top: 38px;
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
      font-size: 24px;
    }
    @media screen and (max-width: 463px) {
      font-size: 15px;
    }
  }
  &__title-2 {
    color: #fff;
    text-align: center;
    font-family: 'Raleway';
    font-size: clamp(60px, 15vw, 285px);
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 342px */
    letter-spacing: 31.35px;
    text-transform: uppercase;
    opacity: 0.15;
    @media screen and (max-width: 1500px) {
      font-size: clamp(60px, 13vw, 285px);
    }
    @media screen and (max-width: 913px) {
      font-size: clamp(20px, 10vw, 285px);
      width: 100%;
    }
    @media screen and (max-width: 655px) {
      font-size: clamp(20px, 8vw, 285px);
      letter-spacing: 19.35px;
      text-align: left;
    }
  }
  &__img-social {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
    @media screen and (max-width: 1500px) {
      width: 25px;
      height: auto;
    }
  }
}
</style>
