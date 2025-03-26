<template>
  <section class="advantage">
    <div class="container">
      <div class="advantage__wrapper">
        <div class="advantage__content-1">
          <h2 class="advantage__title">Почему стоит работать с нами?</h2>
          <div class="advantage__img-wrapper">
            <img src="/img/advantage.webp" alt="img" class="advantage__img" />
            <span class="advantage__img-shadow"></span>
          </div>
          <div class="advantage__wrapper-btn">
            <NuxtLink to="/about" class="advantage__btn"
              ><span class="advantage__btn-text"
                >Узнать о компании больше</span
              ></NuxtLink
            >
            <img
              src="/img/home-arrow.webp"
              alt="img"
              class="advantage__btn-arrow"
            />
          </div>
        </div>
        <div class="advantage__content-817">
          <h2 class="advantage__title">Почему стоит работать с нами?</h2>
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
                  {{ item.title }}
                </h3>
                <p
                  class="advantage__item-description"
                  :style="{ color: item.descriptionColor }"
                >
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.advantage {
  position: relative;
  padding: 0 0 130px 0;
  transition: transform 0.2s ease-out;
  height: 100%;
  @media screen and (max-width: 1500px) {
    padding: 0 0 100px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media screen and (max-width: 817px) {
      grid-template-columns: 1fr;
    }
  }
  &__content-817 {
    display: none;
    @media screen and (max-width: 817px) {
      position: relative;
      display: flex;
      justify-content: flex-end;
    }
  }
  &__img-817 {
    position: absolute;
    top: -90px;
    right: 0;
    max-width: 300px;
    height: auto;
    z-index: -1;
    @media screen and (max-width: 655px) {
      max-width: 200px;
      top: -50px;
    }
    @media screen and (max-width: 463px) {
      top: -82px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
  }
  &__content-1 {
    height: 100%;
    position: sticky;
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
    max-width: 665px;
    min-height: 423px;
    padding: 21px 35px 40px 35px;
    border-radius: 15px;
    @media screen and (max-width: 1500px) {
      max-width: 467px;
      min-height: 354px;
    }
    @media screen and (max-width: 913px) {
      padding: 21px 21px 40px 21px;
      min-height: 322px;
    }
    @media screen and (max-width: 817px) {
      width: 100%;
      max-width: 100%;
      min-height: 268px;
      justify-content: space-between;
    }
    &-wrapper {
      margin-top: auto;
      max-width: 550px;
      @media screen and (max-width: 817px) {
        margin-top: 0;
      }
    }
    &-number {
      color: #000;
      font-family: 'Raleway';
      font-size: 135px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 162px */
      text-transform: uppercase;
      @media screen and (max-width: 1500px) {
        font-size: 93px;
      }
      @media screen and (max-width: 913px) {
        font-size: 84px;
      }
      @media screen and (max-width: 817px) {
        line-height: normal; /* 162px */
        min-height: 131px;
      }
    }
    &-title {
      margin-bottom: 15px;
      color: #000;
      font-family: 'Raleway';
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 43.2px */
      text-transform: uppercase;
      @media screen and (max-width: 1500px) {
        font-size: 24px;
      }
      @media screen and (max-width: 913px) {
        font-size: 20px;
      }
      @media screen and (max-width: 463px) {
        font-size: 18px;
      }
    }
    &-description {
      color: #000;
      font-family: 'Onest';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 24px */
      @media screen and (max-width: 1500px) {
        font-size: 17px;
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
    font-size: 96px;
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
      font-size: 55px;
    }
    @media screen and (max-width: 655px) {
      font-size: 45px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 463px) {
      font-size: 34px;
    }
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
    border-radius: 500px;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(100px);
    width: 500px;
    height: 500px;
    z-index: -2;
    @media screen and (max-width: 1500px) {
      width: 400px;
      height: 400px;
      border-radius: 400px;
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
