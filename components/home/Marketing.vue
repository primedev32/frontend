<template>
  <section class="marketing">
    <div class="container">
      <h2 class="marketing__title" ref="title">
        {{ $t('marketing.title') }}
      </h2>
      <p class="marketing__description" ref="description">
        {{ $t('marketing.description') }}
      </p>
      <div class="btn-reset marketing__wrapper">
        <CommonSwiper
          :slidesperview="slidesPerView"
          :breakpoints="breakpoints"
          @instance="setSwiperInstance"
          :slide-card="marketingCard"
          custom-button-next="marketing__custom-button-next"
          custom-button-prev="marketing__custom-button-prev"
        >
          <template #slide="{ item }">
            <div
              class="marketing__marketing-wrapper"
              :style="{
                backgroundColor: item.backgroundColor,
                backgroundImage: item.backgroundImg
                  ? `url(${item.backgroundImg})`
                  : '',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }"
              :class="{ marketing__bordered: item.hasBorder }"
            >
              <img
                v-if="item.topBtn"
                :src="item.topBtn"
                alt="bool"
                class="marketing__swiper-bool"
              />

              <h3
                class="marketing__swiper-title"
                :style="{ color: item.colorTitle }"
              >
                {{ $t(`marketing.${item.title}`) }}
              </h3>
              <p
                class="marketing__swiper-description"
                :style="{ color: item.colorDescription }"
              >
                {{ $t(`marketing.${item.description}`) }}
              </p>
            </div>
          </template></CommonSwiper
        >
      </div>
      <div class="marketing__buttons">
        <button
          @click="handleClickPrev"
          :disabled="!swiperRef || swiperRef.activeIndex === 0"
          class="btn-reset marketing__custom-button-prev"
        ></button>
        <button
          @click="handleClickNext"
          :disabled="!swiperRef || swiperRef.isEnd"
          class="btn-reset marketing__custom-button-next"
        ></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

const title = ref<HTMLElement | null>(null)
const description = ref<HTMLElement | null>(null)
const swiperRef = ref<any>(null)
const slidesPerView = ref()

const breakpoints = {
  1200: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 1,
  },
}
const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance
}

const handleClickPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev()
  }
}

const handleClickNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext()
  }
}

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
        start: 'top 50%',
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
        start: 'top 50%',
        once: true,
      },
    }
  )
})
</script>

<style lang="scss" scoped>
.marketing {
  padding: 80px 0;
  background: #222624;
  overflow: hidden;
  @media screen and (max-width: 463px) {
    padding: 80px 0 30px 0;
  }
  &__title {
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Raleway';
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 40px;
    }
    @media screen and (max-width: 655px) {
      font-size: 28px;
    }
    @media screen and (max-width: 463px) {
      font-size: 20px;
    }
  }
  &__wrapper {
    margin-bottom: 50px;
  }
  &__description {
    margin-bottom: 100px;
    max-width: 750px;
    color: #fff;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 18px;
      margin-bottom: 80px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__marketing-wrapper {
    position: relative;
    padding: 102px 40px 20px 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    min-height: 324px;
    height: 100%;
    @media screen and (max-width: 1500px) {
      padding: 92px 40px 20px 20px;
      min-height: 253px;
    }
    @media screen and (max-width: 655px) {
      min-height: 252px;
    }
  }
  &__swiper-content {
    display: flex;
    flex-direction: column;
  }
  &__swiper-title {
    margin-bottom: 10px;
    min-height: 61px;
    font-family: 'Raleway';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    letter-spacing: -0.72px;
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 20px;
      min-height: 45px;
    }
    @media screen and (max-width: 655px) {
      min-height: 34px;
    }
    @media screen and (max-width: 463px) {
      font-size: 18px;
    }
  }
  &__swiper-description {
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
    @media screen and (max-width: 655px) {
      font-size: 12px;
    }
  }
  &__swiper-bool {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 55px;
    height: auto;
  }
  &__bordered {
    border: 1px solid #fff;
  }
  &__custom-button-next {
    background-image: url('/svg/arrow-swiper-next.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 1500px) {
      width: 30px;
      height: 30px;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
  &__custom-button-prev {
    background-image: url('/svg/arrow-swiper-prev.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 1500px) {
      width: 30px;
      height: 30px;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}
</style>
<style>
.swiper {
  overflow: visible;
}
</style>
