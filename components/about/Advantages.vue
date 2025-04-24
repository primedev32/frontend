<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__wrapper">
        <div class="advantages__wrapper-1">
          <div class="advantages__content">
            <div class="advantages__description-wrapper">
              <h3 class="advantages__description-title">
                <span ref="days">0</span> дней
              </h3>
              <p class="advantages__description">
                Средний срок запуска готового сайта
              </p>
            </div>
            <div class="advantages__description-wrapper">
              <h3 class="advantages__description-title">
                <span ref="clients">0</span>+
              </h3>
              <p class="advantages__description">
                Наши клиенты довольны результатом
              </p>
            </div>
            <div class="advantages__description-wrapper">
              <h3 class="advantages__description-title">
                <span ref="years">0</span> лет
              </h3>
              <p class="advantages__description">
                Опыта в разработке и веб-дизайне
              </p>
            </div>
          </div>
        </div>
        <div class="advantages__wrapper-2">
          <ul class="list-reset advantages__list">
            <li
              v-for="(item, index) in aboutAdvantages"
              :key="index"
              class="advantages__item"
              :style="{
                backgroundColor: item.backgroundColor,
                backgroundImage: `url(${item.img})`,
                backgroundPosition: '30px 20px',
                backgroundRepeat: 'no-repeat',
              }"
            >
              <p
                :style="{ color: item.color }"
                class="advantages__item-description"
              >
                {{ item.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

const days = ref<HTMLElement | null>(null)
const clients = ref<HTMLElement | null>(null)
const years = ref<HTMLElement | null>(null)

function animateCounters() {
  $gsap.to(days.value, {
    innerText: 20 + '+',
    duration: 3,
    snap: 'innerText',
    ease: 'power1.out',
  })
  $gsap.to(clients.value, {
    innerText: 100 + '+',
    duration: 3.5,
    snap: 'innerText',
    ease: 'power1.out',
  })
  $gsap.to(years.value, {
    innerText: 5,
    duration: 3,
    snap: 'innerText',
    ease: 'power1.out',
  })
}

onMounted(() => {
  animateCounters()
})
</script>

<style lang="scss" scoped>
.advantages {
  padding: 150px 0;
  @media screen and (max-width: 1500px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 463px) {
    padding: 80px 0;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 160px;
    @media screen and (max-width: 913px) {
      gap: 100px;
    }
  }
  &__description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    @media screen and (max-width: 655px) {
      gap: 10px;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    gap: 110px;
    @media screen and (max-width: 1200px) {
      gap: 50px;
    }
    @media screen and (max-width: 1022px) {
      gap: 30px;
    }
    @media screen and (max-width: 655px) {
      flex-direction: column;
    }
  }
  &__description-title {
    color: #fff;
    font-family: 'Onest';
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 54px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }
    @media screen and (max-width: 1022px) {
      font-size: 30px;
    }
    @media screen and (max-width: 463px) {
      font-size: 26px;
    }
  }
  &__description {
    max-width: 253px;
    color: #fff;
    text-align: center;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 655px) {
      max-width: 100%;
    }
    @media screen and (max-width: 463px) {
      font-size: 14px;
    }
  }
  &__list {
    display: flex;
    @media screen and (max-width: 913px) {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    @media screen and (max-width: 463px) {
      gap: 20px;
    }
  }
  &__item {
    display: flex;
    padding: 30px 30px 30px 30px;
    width: 100%;
    height: 350px;
    border-radius: 15px;
    background-size: 60px 60px;
    @media screen and (max-width: 1200px) {
      height: 300px;
      background-size: 50px 50px;
    }
    @media screen and (max-width: 913px) {
      max-width: 500px;
      height: 270px;
    }
    @media screen and (max-width: 463px) {
      height: 235px;
      background-size: 40px 40px;
    }
    &:nth-child(2) {
      height: 390px;
      transform: translateY(-40px);
      @media screen and (max-width: 1200px) {
        height: 340px;
      }
      @media screen and (max-width: 913px) {
        height: 270px;
        transform: translateY(0px);
      }
      @media screen and (max-width: 463px) {
        height: 235px;
      }
    }
  }
  &__item-description {
    margin-top: auto;
    color: #fff;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 28.8px */
    @media screen and (max-width: 1500px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 463px) {
      font-size: 18px;
    }
  }
}
</style>
