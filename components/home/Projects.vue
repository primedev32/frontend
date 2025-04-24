<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">
        Наши проекты: высокие результаты и
        <span class="projects__title-span">безупречное исполнение</span>
      </h2>
      <div class="projects__wrapper-img" ref="wrapperImg">
        <img src="/img/project-1.webp" alt="img" class="projects__img" />
        <div class="projects__img-content">
          <h3 class="projects__img-content-title">
            Корпоративный сайт для компании «Zero Hawk», 2024
          </h3>
          <a
            href="https://t.me/primedevsite"
            target="_blank"
            class="projects__img-content-link"
            ><span class="projects__img-content-link-text"
              >Посмотреть проект</span
            ></a
          >
        </div>
      </div>
      <ul class="list-reset projects__list" ref="list">
        <li
          v-for="(item, index) in projectsList"
          :key="index"
          class="projects__item"
        >
          <img :src="item.img" alt="img" class="projects__item-img" />
          <div class="projects__item-content">
            <h3 class="projects__item-content-title">{{ item.title }}</h3>
            <a
              :href="item.link"
              target="_blank"
              class="projects__item-content-link"
              ><span class="projects__item-content-link-text"
                >Посмотреть проект</span
              ></a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

const list = ref<HTMLElement | null>(null)
const wrapperImg = ref<HTMLElement | null>(null)

onMounted(() => {
  if (list.value) {
    // Анимируем элементы списка с задержкой, начиная с боков
    $gsap.fromTo(
      list.value.children, // Получаем все li элементы внутри ul
      {
        x: 200, // Начальное положение слева
        opacity: 0, // Начальная прозрачность
      },
      {
        x: 0, // Конечное положение (в обычное место)
        opacity: 1, // Полная видимость
        duration: 1.9, // Длительность анимации
        stagger: 0.5, // Задержка между анимациями элементов
        ease: 'power4.out', // Плавное завершение
        scrollTrigger: {
          trigger: list.value, // Элемент, который будет инициировать анимацию
          start: 'top 80%', // Когда верхний край элемента попадает в 80% экрана
          once: true, // Анимация будет выполнена только один раз
        },
      }
    )
  }

  if (wrapperImg.value) {
    // Анимация для wrapper-img
    $gsap.fromTo(
      wrapperImg.value, // Получаем контейнер с изображениями
      {
        opacity: 0, // Начальная прозрачность
        y: 100, // Начальное положение снизу
      },
      {
        opacity: 1, // Конечная прозрачность
        y: 0, // Конечное положение
        duration: 1.5, // Длительность анимации
        ease: 'power4.out', // Плавное завершение
        scrollTrigger: {
          trigger: wrapperImg.value, // Элемент, который будет инициировать анимацию
          start: 'top 80%', // Когда верхний край элемента попадает в 80% экрана
          once: true, // Анимация будет выполнена только один раз
        },
      }
    )
  }
})
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 87px;
  overflow: hidden;
  &__title {
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
    font-family: 'Raleway';
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 115.2px */
    text-transform: uppercase;
    @media screen and (max-width: 1500px) {
      font-size: 45px;
    }
    @media screen and (max-width: 655px) {
      font-size: 32px;
    }
    @media screen and (max-width: 463px) {
      font-size: 24px;
      text-align: left;
    }
    &-span {
      font-weight: 400;
    }
  }
  &__img-content-title {
    color: #fff;
    text-align: center;
    font-family: 'Raleway';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 43.2px */
    white-space: unset;
    @media screen and (max-width: 1500px) {
      font-size: 24px;
    }
    @media screen and (max-width: 463px) {
      font-size: 18px;
    }
  }
  &__wrapper-img {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    align-items: center;
    @media screen and (max-width: 1086px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
    }
  }
  &__img {
    width: 100%;
    @media screen and (max-width: 1086px) {
      max-width: 567px;
      height: auto;
      align-items: center;
    }
  }
  &__img-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    @media screen and (max-width: 1500px) {
      gap: 15px;
    }
    @media screen and (max-width: 1086px) {
      gap: 10px;
    }
  }
  &__img-content-link {
    min-width: 230px;
    padding: 15px 20px;
    height: 52px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #000;
    background: #ffcb9b;
    transition: background 0.3s ease-out;
    @media screen and (max-width: 463px) {
      padding: 8px 20px;
      height: 43px;
    }
    &:hover {
      background: #cfa57a;
    }
  }
  &__img-content-link-text {
    color: #000;
    text-align: center;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 463px) {
      font-size: 16px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media screen and (max-width: 1086px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1086px) {
      align-items: center;
    }
  }
  &__item-content {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media screen and (max-width: 1500px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__item-content-title {
    color: #fff;
    font-family: 'Raleway';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 43.2px */
    @media screen and (max-width: 1500px) {
      text-align: center;
      font-size: 24px;
    }
    @media screen and (max-width: 463px) {
      font-size: 18px;
    }
  }
  &__item-img {
    margin-bottom: 30px;
    @media screen and (max-width: 1086px) {
      max-width: 567px;
      height: auto;
    }
    @media screen and (max-width: 655px) {
      max-width: 100%;
      width: 100%;
    }
  }
  &__item-content-link {
    min-width: 230px;
    height: 52px;
    text-align: center;
    padding: 15px 20px;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #000;
    background: #ffcb9b;
    transition: background 0.3s ease-out;
    @media screen and (max-width: 463px) {
      padding: 8px 20px;
      height: 43px;
    }
    &:hover {
      background: #d6b089;
    }
  }
  &__item-content-link-text {
    width: 100%;
    color: #000;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 463px) {
      font-size: 16px;
    }
  }
}
</style>
