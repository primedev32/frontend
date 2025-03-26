<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews__title">Мнение наших клиентов</h2>
      <div class="reviews__wrapper">
        <CommonSwiper
          :slidesperview="slidesPerView"
          :progress="true"
          :breakpoints="breakpoints"
          @instance="setSwiperInstance"
          :slide-card="reviewsCard"
          custom-button-next="reviews__custom-button-next"
          custom-button-prev="reviews__custom-button-prev"
        >
          <template #slide="{ item }">
            <div class="reviews__reviews-wrapper">
              <img
                :src="item.avatar"
                alt="avatar"
                class="reviews__swiper-avatar"
              />
              <p class="reviews__swiper-description">
                {{ item.description }}
              </p>
              <h3 class="reviews__swiper-title">
                {{ item.name }}
              </h3>
            </div>
          </template></CommonSwiper
        >
      </div>
      <div class="reviews__buttons">
        <button
          @click="handleClickPrev"
          :disabled="!swiperRef || swiperRef.activeIndex === 0"
          class="btn-reset reviews__custom-button-prev"
        ></button>
        <div class="reviews__swiper-pagination-progress">
          <div
            class="reviews__swiper-pagination-progress-bar"
            :style="{ width: progressWidth }"
          ></div>
        </div>
        <button
          @click="handleClickNext"
          :disabled="!swiperRef || swiperRef.isEnd"
          class="btn-reset reviews__custom-button-next"
        ></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
const progressWidth = ref('0%')
const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance

  updateProgress(instance)

  instance.on('slideChange', () => updateProgress(instance))
}

const updateProgress = (instance: any) => {
  const progress = (instance.realIndex + 1) / instance.snapGrid.length
  progressWidth.value = `${progress * 100}%`
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
</script>

<style lang="scss" scoped>
.reviews {
  padding-bottom: 150px;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    padding-bottom: 100px;
  }
  @media screen and (max-width: 655px) {
    padding-bottom: 80px;
  }
  &__title {
    margin-bottom: 100px;
    color: #fff;
    font-family: 'Raleway';
    text-align: right;
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 45px;
      margin-bottom: 80px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 32px;
    }
    @media screen and (max-width: 463px) {
      font-size: 24px;
    }
  }
  &__swiper-description {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__swiper-title {
    margin-top: auto;
    color: #000;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
  }
  &__swiper-avatar {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 140px;
    height: 140px;
    @media screen and (max-width: 1500px) {
      width: 90px;
      height: 90px;
    }
  }
  &__wrapper {
    margin-bottom: 50px;
  }
  &__reviews-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 240px 20px 20px 20px;
    border-radius: 15px;
    min-height: 456px;
    height: 100%;
    background: url('/img/quote-small.webp') no-repeat 20px 20px / 40px auto,
      url('/img/quote.webp') no-repeat 20px 30px / 170px auto, #fff;

    @media screen and (max-width: 1500px) {
      padding: 169px 20px 20px 20px;
      min-height: 384px;
      background: url(/img/quote-small.webp) no-repeat 20px 20px / 35px auto,
        url(/img/quote.webp) no-repeat 20px 30px / 115px auto, #fff;
    }
    @media screen and (max-width: 1200px) {
      min-height: 325px;
    }
    @media screen and (max-width: 463px) {
      background: url(/img/quote-small.webp) no-repeat 20px 20px / 35px auto,
        url(/img/quote.webp) no-repeat 20px 30px / 100px auto, #fff;
    }
  }
  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  &__custom-button-next {
    background-image: url('/svg/arrow-swiper-next.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    @media screen and (max-width: 1500px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
  &__custom-button-prev {
    background-image: url('/svg/arrow-swiper-prev.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    @media screen and (max-width: 1500px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
  &__swiper-pagination-progress {
    width: 506px;
    height: 10px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    @media screen and (max-width: 1500px) {
      width: 423px;
      height: 7px;
    }
  }

  &__swiper-pagination-progress-bar {
    height: 100%;
    background: orange;
    border-radius: 5px;
    width: 0%;
    transition: width 0.3s;
  }
}
</style>
<style>
.swiper-slide {
  height: auto;
  display: flex;
}
</style>
