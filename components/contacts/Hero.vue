<template>
  <section class="contacts">
    <Header />
    <div class="container">
      <div class="contacts__wrapper">
        <img
          src="/img/hero-img-contacts.webp"
          alt="img"
          class="contacts__img"
        />
        <div class="contacts__content">
          <div class="contacts__description-wrapper">
            <h1 class="contacts__title" ref="title">КОНТАКТЫ</h1>
            <p class="contacts__description" ref="description">
              Вы можете связаться с нами любым удобным способом
            </p>
          </div>
        </div>
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
.contacts {
  width: 100%;
  min-height: 791px;
  position: relative;
  overflow: hidden;
  background-image: url('/img/hero-contacts.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    width: 1361px;
    height: 564px;
    background-image: url('/img/shadow-contacts.webp');
    background-repeat: no-repeat;
    background-size: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    z-index: -1;
  }
  @media screen and (max-width: 1500px) {
    min-height: 651px;
    &::after {
      width: 1138px;
      height: 512px;
    }
  }
  @media screen and (max-width: 1500px) {
    min-height: 651px;
    &::after {
      display: none;
    }
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
  &__title {
    color: #fff;
    text-align: center;
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
    color: #fff;
    text-align: center;
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
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    min-width: 800px;
    height: auto;
    @media screen and (max-width: 1500px) {
      min-width: 600px;
    }
    @media screen and (max-width: 817px) {
      transform: translate(-50%, -46%);
    }
    @media screen and (max-width: 655px) {
      min-width: 500px;
      transform: translate(-50%, -44%);
    }
    @media screen and (max-width: 463px) {
      min-width: 450px;
    }
  }
  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
  }
  &__content {
    position: relative;
  }
  &__description-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    @media screen and (max-width: 655px) {
      min-width: 400px;
    }
    @media screen and (max-width: 463px) {
      transform: translate(-50%, 65%);
      min-width: 271px;
    }
  }
}
</style>
