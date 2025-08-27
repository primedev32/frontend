<template>
  <section class="advantage" ref="advantageSection">
    <div class="container">
      <div class="advantage__wrapper">
        <div class="advantage__content-1" ref="leftContent">
          <h2 class="advantage__title">
            {{ $t('home-advantage.title') }}
          </h2>
          <div class="advantage__img-wrapper">
            <img src="/img/advantage.webp" alt="img" class="advantage__img" />
            <span class="advantage__img-shadow"></span>
          </div>
          <div class="advantage__wrapper-btn">
            <NuxtLinkLocale to="/about" class="advantage__btn"
              ><span class="advantage__btn-text">
                {{ $t('home-advantage.btn-text') }}</span
              ></NuxtLinkLocale
            >
            <img
              src="/img/home-arrow.webp"
              alt="img"
              class="advantage__btn-arrow"
            />
          </div>
        </div>
        <div class="advantage__content-817">
          <h2 class="advantage__title">
            {{ $t('home-advantage.title') }}
          </h2>
          <img class="advantage__img-817" src="/img/advantage.webp" alt="img" />
        </div>
        <div class="advantage__content">
          <ul class="list-reset advantage__list">
            <li
              v-for="(item, index) in advantageList"
              :key="index"
              class="advantage__item"
              :style="{ backgroundColor: item.backgroundColor }"
              :class="{ 'advantage__item-bordered': item.hasBorder }"
            >
              <span
                class="advantage__item-number"
                :style="{ color: item.numberColor }"
              >
                {{ item.number }}</span
              >
              <div class="advantage__item-wrapper">
                <h3
                  class="advantage__item-title"
                  :style="{ color: item.titleColor }"
                >
                  {{ $t(`home-advantage.${item.title}`) }}
                </h3>
                <p
                  class="advantage__item-description"
                  :style="{ color: item.descriptionColor }"
                >
                  {{ $t(`home-advantage.${item.description}`) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// const content = ref(null)
// const contentSection = ref(null)
// onMounted(() => {
//   $gsap.fromTo(
//     content.value,
//     {
//       x: 200,
//       opacity: 0,
//     },
//     {
//       x: 0,
//       opacity: 1,
//       duration: 2.5,
//       ease: 'power4.out',
//       scrollTrigger: {
//         trigger: content.value,
//         start: 'top 50%',
//         once: true,
//       },
//     }
//   )
// })

const { $gsap } = useNuxtApp()

const leftContent = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!leftContent.value) return
  $gsap.to(leftContent.value, {
    y: 870,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.advantage',
      start: 'top 0%',
      end: 'bottom 10%',
      scrub: 1,
    },
  })
})
</script>

<style lang="scss" scoped>
.advantage {
  position: relative;
  padding: 0 0 130px 0;
  transition: transform 0.2s ease-out;

  @media screen and (max-width: 1500px) {
    padding: 0 0 130px 0;
  }
  @media screen and (max-width: 817px) {
    padding: 0 0 70px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    height: 100%;
    @media screen and (max-width: 817px) {
      grid-template-columns: 1fr;
    }
  }
  &__content-817 {
    display: none;
    @media screen and (max-width: 817px) {
      position: relative;
      display: flex;
      justify-content: center;
    }
  }
  &__img-817 {
    position: absolute;
    top: -70px;
    right: 50%;
    transform: translateX(50%);
    max-width: 180px;
    height: auto;
    z-index: -1;
    // @media screen and (max-width: 655px) {
    //   max-width: 200px;
    //   top: -50px;
    // }
    // @media screen and (max-width: 463px) {
    //   top: -82px;
    // }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
    @media screen and (max-width: 817px) {
      align-items: center;
    }
  }
  &__content-1 {
    width: 100%;
    height: auto;
    transition: transform 0.1s ease-out;
    @media screen and (max-width: 817px) {
      display: none;
    }
  }
  @media screen and (max-width: 817px) {
    width: 100%;
  }
  &__item {
    display: flex;
    flex-direction: column;
    max-width: 548px;
    min-height: 295px;
    padding: 21px 35px 40px 35px;
    border-radius: 15px;
    @media screen and (max-width: 1500px) {
      max-width: 467px;
      min-height: 250px;
      padding: 21px 25px 40px 25px;
    }
    @media screen and (max-width: 817px) {
      min-height: 229px;
    }
    // @media screen and (max-width: 913px) {
    //   padding: 21px 21px 40px 21px;
    //   min-height: 268px;
    // }
    // @media screen and (max-width: 817px) {
    //   width: 100%;
    //   max-width: 100%;
    //   min-height: 268px;
    //   justify-content: space-between;
    // }
    &-wrapper {
      // margin-top: auto;
      // max-width: 467px;
      @media screen and (max-width: 817px) {
        margin-top: 0;
      }
    }
    &-number {
      margin-bottom: 40px;
      color: #000;
      font-family: 'Raleway';
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 162px */
      text-transform: uppercase;
      @media screen and (max-width: 1500px) {
        font-size: 60px;
      }
      @media screen and (max-width: 913px) {
        font-size: 50px;
      }
      // @media screen and (max-width: 913px) {
      //   font-size: 40px;
      // }
      // @media screen and (max-width: 817px) {
      //   line-height: normal; /* 162px */
      //   min-height: 131px;
      // }
    }
    &-title {
      margin-bottom: 15px;
      color: #000;
      font-family: 'Raleway';
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 43.2px */
      text-transform: uppercase;
      @media screen and (max-width: 1500px) {
        font-size: 18px;
      }
      @media screen and (max-width: 913px) {
        font-size: 16px;
      }
    }
    &-description {
      color: #000;
      font-family: 'Onest';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 24px */
      @media screen and (max-width: 1500px) {
        font-size: 16px;
      }
      @media screen and (max-width: 913px) {
        font-size: 14px;
      }
    }
    &-bordered {
      border: 1px solid #ffffff;
    }
  }
  &__title {
    margin-bottom: 70px;
    color: #fff;
    font-family: 'Raleway';
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    mix-blend-mode: difference;
    @media screen and (max-width: 1500px) {
      font-size: 71px;
    }
    @media screen and (max-width: 1287px) {
      font-size: 60px;
    }
    @media screen and (max-width: 817px) {
      text-align: center;
      font-size: 40px;
      max-width: 600px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 655px) {
      font-size: 36px;
    }
    @media screen and (max-width: 463px) {
      font-size: 30px;
    }
    // @media screen and (max-width: 655px) {
    //   font-size: 45px;
    //   margin-bottom: 50px;
    // }
    // @media screen and (max-width: 463px) {
    //   font-size: 34px;
    // }
  }

  &__img {
    position: absolute;
    top: 180px;
    left: -25%;
    width: 701px;
    height: auto;
    z-index: -1;
    @media screen and (max-width: 1500px) {
      top: 62px;
    }
  }
  &__img-shadow {
    position: absolute;
    top: 20%;
    left: -7%;
    display: block;
    border-radius: 200px;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(100px);
    width: 400px;
    height: 400px;
    z-index: -2;
    @media screen and (max-width: 1500px) {
      width: 200px;
      height: 200px;
      border-radius: 200px;
      top: 12%;
    }
  }
  &__wrapper-btn {
    display: flex;
    gap: 50px;
    width: fit-content;
    &:hover .advantage__btn-arrow {
      transform: translateX(10px);
    }
    @media screen and (max-width: 1500px) {
      gap: 30px;
    }
  }
  &__btn {
    padding: 15px 40px;
    text-decoration: none;
    border-radius: 5px;
    background: #ffcb9b;
    @media screen and (max-width: 1500px) {
      padding: 10px 25px;
    }
    @media screen and (max-width: 913px) {
      padding: 10px 16px;
    }
    &-text {
      color: #000;
      font-family: 'Onest';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      @media screen and (max-width: 1500px) {
        font-size: 18px;
      }
      @media screen and (max-width: 913px) {
        font-size: 16px;
      }
    }
  }
  &__btn-arrow {
    transform: translateX(0px);
    transition: transform 0.2s ease-out;
    @media screen and (max-width: 1500px) {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
