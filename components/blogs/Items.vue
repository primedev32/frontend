<template>
  <section class="blogs">
    <div class="container">
      <ul class="list-reset blogs__items-list">
        <li
          v-for="(item, index) in blogsList"
          :key="index"
          class="blogs__items-item"
          ref="items"
        >
          <NuxtLinkLocale :to="`/blogs/${item.id}`" class="blogs__items-link">
            <div class="blogs__items-wrap">
              <p class="blogs__items-description">
                {{ $t(`blog.${item.description}`) }}
              </p>
              <img
                src="/img/blogs-items-card.webp"
                alt="img"
                class="blogs__items-card"
              />
            </div>
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const items = ref<HTMLElement | null>(null)

onMounted(() => {
  // Анимация карточек
  const items = document.querySelectorAll('.blogs__items-item')

  items.forEach((item, index) => {
    $gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<style lang="scss" scoped>
.blogs {
  padding-top: 100px;
  // @media screen and (max-width: 1500px) {
  //   padding: 80px 0;
  // }
  @media screen and (max-width: 655px) {
    padding-top: 50px;
  }
  &__items-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 655px) {
      grid-template-columns: repeat(1, 1fr);
    }
    // @media screen and (max-width: 1000px) {
    //   grid-template-columns: repeat(2, 1fr);
    // }
    // @media screen and (max-width: 655px) {
    //   grid-template-columns: repeat(1, 1fr);
    // }
  }
  &__items-item {
    background-image: url(/img/blogs-items.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 100%;
    min-height: 224px;
    width: 100%;
    padding-top: 151px;
    border-radius: 15px;
    // @media screen and (max-width: 1500px) {
    //   padding-top: 180px;
    //   min-height: 280px;
    // }
    // @media screen and (max-width: 655px) {
    //   min-height: 206px;
    // }
  }
  &__items-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px;
    gap: 15px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    min-height: 73px;
    backdrop-filter: blur(2px);
    @media screen and (max-width: 1500px) {
      min-height: 100%;
    }
  }
  &__items-description {
    color: #fff;
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 14px;
    }
    // @media screen and (max-width: 722px) {
    //   font-size: 12px;
    // }
    // @media screen and (max-width: 655px) {
    //   font-size: 14px;
    // }
  }
  &__items-card {
    width: 30px;
    height: 30px;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
  &__items-link {
    text-decoration: none;
    &:hover .blogs__items-card {
      opacity: 1;
    }
  }
}
</style>
