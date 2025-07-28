<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews__title" ref="title">{{ $t('reviews.title') }}</h2>
      <div class="reviews__wrapper">
        <CommonSwiper
          :slidesperview="slidesPerView"
          :progress="true"
          :breakpoints="breakpoints"
          @instance="setSwiperInstance"
          :slide-card="homeReviews?.data"
          custom-button-next="reviews__custom-button-next"
          custom-button-prev="reviews__custom-button-prev"
        >
          <template #slide="{ item }">
            <div class="reviews__reviews-wrapper">
              <p class="reviews__swiper-description">
                {{ item?.attributes?.description || item.description }}
              </p>
              <h3 class="reviews__swiper-title">
                {{ item?.attributes?.autor || item.autor }}
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
      <div class="reviews__link-wrapper">
        <NuxtLinkLocale to="/add-rewiew" class="reviews__link">{{
          $t('reviews.link')
        }}</NuxtLinkLocale>
        <img
          src="/img/home-reviews.png"
          alt="reviews-icon"
          class="reviews__icon"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { apiReviews } from '~/utils/api.ts'

const { $gsap } = useNuxtApp()
const { locale } = useI18n()

interface Review {
  id: number
  attributes: {
    description: string
    autor: string
    createdAt: string
    updatedAt: string
    publishedAt: string | null
  }
}

interface ReviewsResponse {
  data: Review[]
  meta: any
}

const homeReviews = ref<ReviewsResponse | null>(null)

const loadReviews = async () => {
  try {
    const response = await useCustomFetch(apiReviews, {
      query: {
        populate: '*',
        sort: ['createdAt:desc'],
        locale: locale.value,
      },
    })
    homeReviews.value = response as ReviewsResponse
  } catch (error) {
    console.error('Error loading reviews:', error)
  }
}

// Следим за изменением языка
watch(
  locale,
  () => {
    loadReviews()
  },
  { immediate: true }
)
onMounted(() => {
  loadReviews()
})

const title = ref<HTMLElement | null>(null)
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

watch(
  () => homeReviews.value?.data,
  (newVal) => {
    if (swiperRef.value && newVal && newVal.length) {
      swiperRef.value.slideTo(0, 0) // Сброс к первому слайду без анимации
      updateProgress(swiperRef.value)
    }
  }
)

onMounted(() => {
  $gsap.fromTo(
    title.value,
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
        trigger: title.value,
        start: 'top 50%',
        once: true,
      },
    }
  )
})
</script>

<style lang="scss" scoped>
.reviews {
  padding-bottom: 100px;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    padding-bottom: 80px;
  }
  &__title {
    margin-bottom: 80px;
    color: #fff;
    font-family: 'Raleway';
    text-align: right;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 40px;
      margin-bottom: 60px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 28px;
    }
    @media screen and (max-width: 463px) {
      font-size: 20px;
    }
  }
  &__swiper-description {
    margin-bottom: 20px;
    width: 100%;
    color: #000;
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
  &__swiper-title {
    margin-top: auto;
    color: #000;
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 24px */
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
  }
  &__swiper-avatar {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    @media screen and (max-width: 1500px) {
      width: 40px;
      height: 40px;
    }
  }
  &__wrapper {
    margin-bottom: 50px;
  }
  &__reviews-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 113px 20px 20px 20px;
    border-radius: 15px;
    min-height: 311px;
    width: 100%;
    height: 100%;
    background: url('/img/quote-small.webp') no-repeat 20px 20px / 40px auto,
      url('/img/quote.webp') no-repeat 20px 30px / 95px auto, #fff;

    @media screen and (max-width: 1500px) {
      padding: 102px 20px 20px 20px;
      min-height: 276px;
      background: url(/img/quote-small.webp) no-repeat 20px 20px / 35px auto,
        url(/img/quote.webp) no-repeat 20px 30px / 90px auto, #fff;
    }
    @media screen and (max-width: 1200px) {
      min-height: 250px;
    }
    @media screen and (max-width: 463px) {
      background: url(/img/quote-small.webp) no-repeat 20px 20px / 35px auto,
        url(/img/quote.webp) no-repeat 20px 30px / 90px auto, #fff;
    }
  }
  &__buttons {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  &__custom-button-next {
    background-image: url('/svg/arrow-swiper-next.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
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
    width: 40px;
    height: 40px;
    @media screen and (max-width: 1500px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
  &__swiper-pagination-progress {
    width: 423px;
    height: 10px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    @media screen and (max-width: 1500px) {
      width: 352px;
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
  &__link {
    display: inline-block;
    color: #fff;
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 600;
    line-height: 120%;
    text-decoration: none;
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
    &-wrapper {
      display: flex;
      width: fit-content;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          .reviews__icon {
            transform: translateX(10px);
            transition: transform 0.3s ease-in-out;
          }
        }
      }
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
    transition: transform 0.3s ease-in-out;
    @media screen and (max-width: 655px) {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
<style>
.swiper-slide {
  height: auto;
  display: flex;
}
.slider__wrapper {
  width: 100%;
}
</style>
