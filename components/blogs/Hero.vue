<template>
  <section class="blogs">
    <Header />
    <div class="blogs__content container">
      <div class="blogs__wrapper-content">
        <h1 class="blogs__title" ref="title">{{ $t('blog.title') }}</h1>
        <p class="blogs__description" ref="description">
          {{ $t('blog.description') }}
        </p>
      </div>
      <img class="blogs__img-2" src="/img/blogs-hero-2.webp" alt="img" />
    </div>
    <div class="blogs__wrapper">
      <img class="blogs__img-1" src="/img/blogs-hero-1.webp" alt="img" />
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
.blogs {
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 650px;
  background-image: url('/img/hero-blogs.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  @media screen and (max-width: 913px) {
    background-image: url('/img/blogs-hero-817.webp');
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
    color: #000;
    font-family: 'Raleway';
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;

    @media screen and (max-width: 1500px) {
      font-size: 46px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 1022px) {
      font-size: 36px;
    }
    @media screen and (max-width: 834px) {
      font-size: 26px;
    }
    @media screen and (max-width: 655px) {
      font-size: 16px;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
  &__description {
    color: #000;
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
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 170px 50px 0 50px;
    @media screen and (max-width: 1500px) {
      // transform: translate(0%, 192px);
    }
    @media screen and (max-width: 1024px) {
      padding: 170px 40px 0 40px;
      // transform: translate(0%, 232px);
    }
    @media screen and (max-width: 655px) {
      // transform: translate(0%, 180px);
    }
    @media screen and (max-width: 480px) {
      padding: 134px 15px 0 15px;
      flex-direction: column;
      align-items: flex-start;
    }
    @media screen and (max-width: 463px) {
      // transform: translate(0%, 162px);
    }
  }
  // &__wrapper {
  // position: absolute;
  // top: 120px;
  // left: 20px;
  // margin: 0 auto;
  // max-width: 1870px;
  // width: 100%;
  // height: 100%;
  // padding: 0 50px;
  // &-content {
  //   position: absolute;
  //   top: 350px;
  //   left: 50px;
  //   @media screen and (max-width: 1024px) {
  //     left: 40px;
  //   }
  // @media screen and (max-width: 817px) {
  //   top: 120px;
  //   width: 300px;
  //   height: auto;
  // }
  //   @media screen and (max-width: 480px) {
  //     left: 15px;
  //   }
  // }
  // }
  &__img-1 {
    position: absolute;
    top: 0px;
    left: -20px;
    width: 600px;
    height: auto;
    @media screen and (max-width: 817px) {
      width: 500px;
      top: 0px;
    }
    // }
    // @media screen and (max-width: 1200px) {
    //   top: -120px;
    //   width: 569px;
    // }
  }
  &__img-2 {
    // position: absolute;
    // top: 150px;
    // right: 250px;
    width: 300px;
    height: auto;
    @media screen and (max-width: 913px) {
      width: 250px;
    }
    @media screen and (max-width: 655px) {
      width: 200px;
    }
    // @media screen and (max-width: 1500px) {
    //   top: 97px;
    //   right: 50px;
    //   width: 296px;
    // }
    // @media screen and (max-width: 1200px) {
    //   top: 138px;
    //   width: 244px;
    // }
    // @media screen and (max-width: 817px) {
    //   left: 40px;
    //   top: 196px;
    //   width: 190px;
    // }
    // @media screen and (max-width: 655px) {
    //   top: 149px;
    // }
    @media screen and (max-width: 480px) {
      width: 150px;
    }
  }
}
</style>
