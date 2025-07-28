<template>
  <section class="about">
    <Header />
    <div class="about__wrapper-imgage">
      <img class="about__img" src="/img/hero-about.webp" alt="img" />
    </div>
    <div class="container" style="position: relative">
      <div class="about__description-wrapper">
        <h2 class="about__title" ref="title">
          {{ $t('about.title') }}
        </h2>
        <p class="about__description" ref="description">
          {{ $t('about.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

const title = ref<HTMLElement | null>(null)
const description = ref<HTMLElement | null>(null)
onMounted(() => {
  $gsap.fromTo(
    title.value,
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: title.value,
        start: 'top 90%',
        once: true,
      },
    }
  )

  $gsap.fromTo(
    description.value,
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: description.value,
        start: 'top 90%',
        once: true,
      },
    }
  )
})
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  min-height: 650px;
  position: relative;
  overflow: hidden;
  background: #fff;
  z-index: 1;
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
  // @media screen and (max-width: 655px) {
  //   min-height: 462px;
  // }
  // @media screen and (max-width: 463px) {
  //   min-height: 438px;
  // }
  &__wrapper-imgage {
    position: relative;
    margin: 0 auto;
    max-width: 1870px;
    width: 100%;
  }
  &__img {
    position: absolute;
    margin: 0;
    top: 50%;
    right: -20px;
    transform: translate(0%, -21%);
    z-index: -1;
    max-width: 600px;
    height: auto;
    @media screen and (max-width: 1500px) {
      max-width: 500px;
      transform: translate(0%, -24%);
    }
    @media screen and (max-width: 817px) {
      max-width: 400px;
      transform: translate(0%, -27%);
    }
    @media screen and (max-width: 655px) {
      max-width: 300px;
      transform: translate(0%, -34%);
    }
  }
  &__description-wrapper {
    max-width: 1200px;
    padding: 0 50px;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, 152px);
    @media screen and (max-width: 1500px) {
      transform: translate(0%, 192px);
    }
    @media screen and (max-width: 1024px) {
      padding: 0 40px;
      transform: translate(0%, 232px);
    }
    @media screen and (max-width: 655px) {
      transform: translate(0%, 180px);
    }
    @media screen and (max-width: 480px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 463px) {
      // transform: translate(0%, 162px);
    }
  }
  &__title {
    color: #000;
    font-family: 'Raleway';
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 46px;
    }
    @media screen and (max-width: 1022px) {
      font-size: 36px;
    }
    @media screen and (max-width: 834px) {
      font-size: 26px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
  &__description {
    color: #000;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    max-width: 500px;
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
      max-width: 400px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
}
</style>
