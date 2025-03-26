<template>
  <section class="hero">
    <Header />
    <div class="hero__video-wrapper">
      <video class="hero__video" autoplay muted loop>
        <source src="/video/home-hero.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <picture class="hero__overlay">
        <img class="hero__image" src="/img/home-hero.webp" alt="Hero" />
      </picture>
    </div>
    <div class="container">
      <div class="hero__content">
        <span class="hero__subtitle">Профессиональная веб-студия</span>
        <h1 class="hero__title">РАЗРАБОТКА САЙТОВ БЕЗ ОГРАНИЧЕНИЙ</h1>
        <p class="hero__description">
          Большинство сайтов теряют клиентов из-за медленной загрузки и
          неудобного интерфейса. Мы создаем современные, быстрые и адаптивные
          сайты, которые не только привлекают внимание, но и превращают
          посетителей в ваших клиентов.
        </p>
        <button
          @click="scrollToSection('contacts')"
          class="btn-reset hero__btn"
        >
          <span class="hero__btn-text">Создать сайт</span>
        </button>
      </div>
      <div class="hero__stats">
        <span class="hero__stats-text">Более 100</span>
        <span class="hero__stats-text-2"
          >сайтов успешно запущены и приносят прибыль своим владельцам</span
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 130px;
  width: 100%;
  min-height: 950px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 1086px) {
    min-height: 791px;
  }
  @media screen and (max-width: 913px) {
    min-height: 627px;
  }
  @media screen and (max-width: 817px) {
    min-height: 563px;
  }
  @media screen and (max-width: 655px) {
    min-height: 462px;
  }
  @media screen and (max-width: 463px) {
    min-height: 438px;
  }
  &__video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.2s ease-out;
  }

  &__video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1086px) {
      display: none;
    }
  }
  &__image {
    display: none;
    @media screen and (max-width: 1086px) {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__subtitle {
    margin-bottom: 15px;
    color: #fff;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 913px) {
      font-size: 16px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
  &__title {
    color: #fff;
    font-family: 'Raleway';
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-align: right;
    @media screen and (max-width: 1500px) {
      font-size: 69px;
    }
    @media screen and (max-width: 913px) {
      font-size: 56px;
    }
    @media screen and (max-width: 817px) {
      font-size: 46px;
    }
    @media screen and (max-width: 655px) {
      font-size: 36px;
    }
    @media screen and (max-width: 463px) {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
  &__btn {
    max-width: 300px;
    padding: 10px 30px;
    border-radius: 5px;
    background: #ffcb9b;
    transition: background 0.3s ease-out;
    &-text {
      color: #000;
      font-family: 'Onest';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 913px) {
        font-size: 18px;
        padding: 10px 21px;
      }
    }
    &:hover {
      background: #d6b089;
    }
  }
  &__description {
    max-width: 1041px;
    margin-bottom: 31px;
    color: #fff;
    font-family: 'Onest';
    font-size: 18px;
    text-align: right;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 17px;
      max-width: 726px;
    }
    @media screen and (max-width: 913px) {
      font-size: 14px;
      max-width: 617px;
    }
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
    @media screen and (max-width: 517px) {
      max-width: 617px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 1200px;
    position: absolute;
    bottom: 10%;
    right: 5%;
    transform: translateY(0);
    @media screen and (max-width: 1500px) {
      bottom: 19%;
    }
    @media screen and (max-width: 655px) {
      bottom: 11%;
    }
  }
  &__stats {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10%;
    left: 3%;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0);
    max-width: 230px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(7.5px);
    @media screen and (max-width: 1500px) {
      padding: 17px;
    }
    @media screen and (max-width: 913px) {
      display: none;
    }
  }
  &__stats-text {
    color: #fff;
    font-family: 'Raleway';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 57.6px */
    @media screen and (max-width: 1500px) {
      font-size: 28px;
    }
  }
  &__stats-text-2 {
    color: #fff;
    font-family: 'Onest';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
  }
}
</style>
