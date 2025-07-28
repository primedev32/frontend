<template>
  <section class="hero">
    <div class="blur-background">
      <Header />
      <div class="hero__video-wrapper">
        <video class="hero__video" autoplay muted loop>
          <source src="/video/home-hero.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div class="hero__overlay-dark"></div>
        <picture class="hero__overlay">
          <img class="hero__image" src="/img/home-hero.webp" alt="Hero" />
        </picture>
      </div>

      <div class="hero__content-wrapper">
        <div class="hero__stats">
          <span class="hero__stats-text">{{ $t(`hero-home.stat1`) }}</span>
          <span class="hero__stats-text-2">{{ $t(`hero-home.stat2`) }}</span>
        </div>
        <div class="hero__content">
          <!-- <span class="hero__subtitle">
            {{ $t(`hero-home.span`) }}
          </span> -->
          <h1 class="hero__title">{{ $t(`hero-home.span`) }}</h1>
          <p class="hero__description">
            {{ $t(`hero-home.description`) }}
          </p>
          <button
            @click="scrollToSection('contacts')"
            class="btn-reset hero__btn"
          >
            <span class="hero__btn-text">{{ $t(`hero-home.button`) }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  const content = document.querySelector('.hero__content')
  if (content) {
    $gsap.from(content, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
    })
  }

  const btn = document.querySelector('.hero__btn')
  if (btn) {
    $gsap.from(btn, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.7,
    })
  }

  const stats = document.querySelector('.hero__stats')
  if (stats) {
    $gsap.from(stats, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1,
    })
  }
})
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 130px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  // @media screen and (max-width: 1500px) {
  //   margin-bottom: 100px;
  // }
  @media screen and (max-width: 1086px) {
    height: 100%;
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
    z-index: 2;
  }
  &__overlay-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  &__subtitle {
    margin-bottom: 15px;
    color: #fff;
    font-family: 'Onest';
    font-size: 18px;
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
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-align: right;
    @media screen and (max-width: 1500px) {
      font-size: 40px;
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
    max-width: 150px;
    padding: 7px 20px;
    border-radius: 5px;
    background: #ffcb9b;
    transition: background 0.3s ease-out;
    &-text {
      color: #000;
      font-family: 'Onest';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 913px) {
      }
      @media screen and (max-width: 463px) {
        font-size: 14px;
      }
    }
    &:hover {
      background: #d6b089;
    }
  }
  &__description {
    max-width: 600px;
    margin-bottom: 31px;
    color: #fff;
    font-family: 'Onest';
    font-size: 16px;
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
    }
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
    @media screen and (max-width: 517px) {
      max-width: 617px;
    }
  }
  &__content-wrapper {
    // position: absolute;
    // bottom: 10%;
    // right: 5%;
    // transform: translate(0, 0);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1470px;
    width: 100%;
    padding: 100px 50px;
    z-index: 3;
    @media screen and (max-width: 1024px) {
      padding: 50px 40px;
      justify-content: flex-end;
    }

    @media screen and (max-width: 480px) {
      padding: 50px 15px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // max-width: 1200px;
    // position: absolute;
    // bottom: 10%;
    // right: 5%;
    // transform: translate(0, 0);
    // @media screen and (max-width: 1500px) {
    //   bottom: 19%;
    // }
    // @media screen and (max-width: 655px) {
    //   bottom: 11%;
    // }
  }
  &__stats {
    display: flex;
    flex-direction: column;
    // position: absolute;
    // bottom: 10%;
    // left: 3%;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0);
    max-width: 230px;
    height: max-content;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(7.5px);
    @media screen and (max-width: 1500px) {
      padding: 17px;
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__stats-text {
    color: #fff;
    font-family: 'Raleway';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 57.6px */
    @media screen and (max-width: 1500px) {
      font-size: 18px;
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
// .blur-background {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// }
</style>
