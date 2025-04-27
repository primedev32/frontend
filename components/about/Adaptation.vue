<template>
  <section class="adaptation" ref="progressSection">
    <div class="container">
      <div class="adaptation__wrapper">
        <div class="adaptation__image">
          <img
            src="/img/phone-adaptation.webp"
            alt="img"
            class="adaptation__img"
          />
        </div>
        <div class="adaptation__content">
          <h2 class="adaptation__title">
            {{ $t('about.adaptation-title') }}
            <span class="adaptation__title-span">{{ progress }} %</span>
          </h2>
          <p class="adaptation__description">
            {{ $t('about.adaptation-description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const progress = ref(0)
const progressSection = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  if (progressSection.value) {
    $gsap.to(progress, {
      value: 80,
      duration: 3,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: progressSection.value, // Секция, при видимости которой анимация запускается
        start: 'top 80%', // Когда верхняя часть секции пересечет нижнюю границу экрана
      },
      onUpdate: () => {
        progress.value = Math.round(progress.value)
      },
    })
  }
})
</script>

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
