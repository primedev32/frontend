<template>
  <section class="types-site">
    <div class="container">
      <h2 class="types-site__title" ref="title1">
        {{ $t('types-site.title1') }}
      </h2>
      <h2 class="types-site__title-2" ref="title2">
        {{ $t('types-site.title2') }}
      </h2>
      <ul class="list-reset types-site__list">
        <li
          v-for="(item, index) in typesList"
          :key="index"
          class="types-site__item"
          :style="{
            backgroundColor: item.backgroundColor,
          }"
        >
          <picture>
            <source :srcset="item.img1086" media="(max-width: 1086px)" />
            <img
              v-if="item.img"
              :src="item.img"
              alt="img-types"
              class="types-site__item-img"
              :class="item.imgClass"
            />
          </picture>
          <h3
            class="types-site__item-title"
            :style="{ color: item.colorTitle }"
          >
            {{ $t(`types-site.${item.title}`) }}
          </h3>
          <p
            class="types-site__item-description"
            :style="{ color: item.colorDescription }"
          >
            {{ $t(`types-site.${item.description}`) }}
          </p>

          <div class="types-site__item-wrapper">
            <span
              class="types-site__item-price"
              :style="{ color: item.colorPrice }"
              >{{ item.price }}</span
            >
            <button
              @click="scrollToSection('contacts')"
              class="btn-reset types-site__item-btn"
              :style="{
                border: item.backgroundBtnBorder,
                color: item.colorBtn,
              }"
            >
              {{ $t(`types-site.button`) }}
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const title1 = ref<HTMLElement | null>(null)
const title2 = ref<HTMLElement | null>(null)
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
  $gsap.fromTo(
    title1.value,
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
        trigger: title1.value,
        start: 'top 50%',
        once: true,
      },
    }
  )

  $gsap.fromTo(
    title2.value,
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
        trigger: title2.value,
        start: 'top 50%',
        once: true,
      },
    }
  )
})
</script>

<style lang="scss" scoped>
.types-site {
  padding: 130px 0;
  background: #fff;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 655px) {
    padding: 80px 0;
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
      font-size: 50px;
    }
    @media screen and (max-width: 655px) {
      font-size: 32px;
    }
    @media screen and (max-width: 463px) {
      font-size: 24px;
      text-align: left;
    }
  }
  &__title-2 {
    margin-bottom: 100px;
    color: #000;
    text-align: right;
    font-family: 'Raleway';
    font-size: 90px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 50px;
      margin-bottom: 80px;
    }
    @media screen and (max-width: 655px) {
      font-size: 32px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 463px) {
      font-size: 24px;
      text-align: right;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media screen and (max-width: 1086px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 655px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    position: relative;
    padding: 330px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 654px;
    border-radius: 15px;
    overflow: hidden;
    @media screen and (max-width: 1500px) {
      padding: 244px 15px 30px 15px;
      min-height: 562px;
    }
    @media screen and (max-width: 1086px) {
      padding: 197px 15px 30px 15px;
      min-height: 444px;
    }
    @media screen and (max-width: 655px) {
      padding: 191px 15px 30px 15px;
      min-height: 402px;
    }
  }

  &__item-title {
    margin-bottom: 10px;
    min-height: 73px;
    font-family: 'Raleway';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    text-transform: uppercase;
    z-index: 1;
    @media screen and (max-width: 1500px) {
      font-size: 20px;
      min-height: 52px;
    }
    @media screen and (max-width: 655px) {
      min-height: 34px;
    }
  }
  &__item-description {
    margin-bottom: 32px;
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
    z-index: 2;
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
    @media screen and (max-width: 1086px) {
      margin-bottom: 10px;
    }
  }
  &__item-price {
    margin-bottom: 32px;
    font-family: 'Onest';
    text-align: right;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    text-transform: uppercase;
    z-index: 3;
    @media screen and (max-width: 1500px) {
      font-size: 24px;
    }
    @media screen and (max-width: 1086px) {
      margin-bottom: 16px;
    }
  }
  &__item-btn {
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 4;
    transition: background 0.3s ease-out, color 0.3s ease-out,
      border 0.3s ease-out;
    &:hover {
      background: #fff;
      color: #000 !important;
      border: 1px solid #fff !important;
    }
  }
  &__item-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }
  &__item-img {
    position: absolute;
    height: auto;
    z-index: 1;
    &.img-1 {
      top: 0;
      left: 0;
      width: 390px;
    }
    &.img-2 {
      top: 0;
      left: 40px;
      width: 390px;
    }
    &.img-3 {
      top: 0;
      left: 0;
      width: 430px;
    }
    @media screen and (max-width: 1086px) {
      &.img-1 {
        top: 0px;
        left: 0px;
        width: 200px;
      }
      &.img-2 {
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 250px;
      }
      &.img-3 {
        top: 0px;
        left: 0px;
        width: 320px;
      }
    }
  }
}
</style>
