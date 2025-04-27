<template>
  <section class="maps">
    <div class="container">
      <div class="maps__wrapper">
        <div class="maps__content">
          <h2 class="maps__content-title">
            {{ $t('contact-page.map-title') }}
          </h2>
          <p class="maps__discription">
            {{ $t('contact-page.map-description') }}
          </p>
          <ul class="list-reset maps__list">
            <li class="maps__item">
              <a href="tel:+79996211951" class="maps__link"
                >+7 (999) 621-19-51</a
              >
            </li>
            <li class="maps__item">
              <a href="mailto:support@primedev.pro" class="maps__link"
                >support@primedev.pro</a
              >
            </li>
          </ul>
          <ul class="list-reset maps__social">
            <li v-for="(item, index) in socialList" :key="index">
              <a :href="item.link" target="_blank" class="maps__link-social"
                ><img :src="item.icon" alt="img" class="maps__img-social"
              /></a>
            </li>
          </ul>
        </div>
        <div class="maps__component">
          <ClientOnly>
            <ContactsMapComponent />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.maps {
  padding: 160px 0;
  @media screen and (max-width: 1500px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 463px) {
    padding: 80px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
  &__content-title {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Raleway';
    font-size: 59px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 55px;
    }
    @media screen and (max-width: 655px) {
      font-size: 40px;
    }
    @media screen and (max-width: 463px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  &__content {
    max-width: 700px;
  }
  &__discription {
    width: 100%;
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
  &__link {
    color: #fff;
    text-align: right;
    font-family: 'Onest';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 38.4px */
    @media screen and (max-width: 1500px) {
      font-size: 22px;
    }
    @media screen and (max-width: 655px) {
      font-size: 20px;
    }
    @media screen and (max-width: 463px) {
      font-size: 18px;
    }
  }
  &__list {
    margin-bottom: 30px;
  }
  &__social {
    display: flex;
    gap: 15px;
  }
  &__component {
    width: 100%;
    min-height: 350px;
    border-radius: 25px;
    border: 1px solid #8f8f8f;
    overflow: hidden;
    @media screen and (max-width: 463px) {
      min-height: 300px;
    }
  }
  &__img-social {
    @media screen and (max-width: 1500px) {
      width: 30px;
      height: auto;
    }
    @media screen and (max-width: 655px) {
      width: 25px;
    }
  }
}
</style>
