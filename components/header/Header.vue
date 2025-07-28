<template>
  <section class="header">
    <div class="blur-background">
      <div class="container">
        <div class="header__wrapper">
          <NuxtLinkLocale class="header__logo-link" to="/"
            ><span class="header__logo">PrimeDev</span></NuxtLinkLocale
          >
          <nav class="header__nav">
            <ul class="list-reset header__list">
              <li v-for="(item, index) in navList" :key="index">
                <NuxtLinkLocale :to="item.link" class="header__link">{{
                  $t(`header.${item.title}`)
                }}</NuxtLinkLocale>
              </li>
            </ul>
          </nav>
          <div class="header__menu">
            <CommonSwitchLang colorClass="header__switch-lang" />
            <NuxtLinkLocale @click="scrollToContacts" class="header__btn">
              <span class="header__btn-text">
                {{ $t(`header.button`) }}
              </span>
            </NuxtLinkLocale>
            <div class="header__burger" @click="toggleBurger">
              <div class="header__burger-menu" :class="{ open: isOpen }">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <HeaderBurger
        class="header__burger-mobile"
        v-if="isOpen"
        :isOpen="isOpen"
        @closeBurger="toggleBurger"
      />
    </transition>
  </section>
</template>

<script lang="ts" setup>
import { HeaderBurger } from '#components'

const { $gsap } = useNuxtApp()
const { locale } = useI18n()
const scrollToContacts = async () => {
  const section = document.getElementById('contacts')

  if (section) {
    $gsap.to(window, {
      duration: 1,
      scrollTo: section,
      ease: 'power2.out',
    })
  } else {
    const loc = locale.value
    if (loc === 'en') {
      await navigateTo(`/${loc}/contacts`)
    } else {
      locale.value = ''
      await navigateTo(`/contacts`)
    }

    // Переходим на страницу контактов с сохранением локал
    await nextTick()
    const mainSection = document.getElementById('contacts')
    if (mainSection) {
      $gsap.to(window, {
        duration: 1,
        scrollTo: mainSection,
        ease: 'power2.out',
      })
    } else {
      $gsap.to(window, {
        duration: 1,
        scrollTo: 0,
        ease: 'power2.out',
      })
    }
  }
}

const isOpen = ref(false)

const toggleBurger = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 110;
  // @media screen and (max-width: 655px) {
  //   padding: 25px 0 25px 0;
  // }
  .blur-background {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0px 0px 15px 15px;
    padding: 38px 0 36px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list {
    display: flex;
    gap: 80px;
    @media screen and (max-width: 1500px) {
      gap: 40px;
    }
  }
  &__burger {
    display: none;
    @media screen and (max-width: 1086px) {
      display: block;
    }
  }
  &__burger-mobile {
    display: none;
    @media screen and (max-width: 1086px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 293px;
      height: 791px;
    }
    @media screen and (max-width: 655px) {
      width: 224px;
    }
    @media screen and (max-width: 463px) {
      width: 200px;
    }
  }
  &__burger-menu {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 999999999999;
    @media screen and (max-width: 913px) {
      height: 18px;
      width: 25px;
    }
    span {
      display: block;
      height: 3px;
      background-color: #fff;
      transition: transform 0.3s, opacity 0.3s;
      @media screen and (max-width: 913px) {
        height: 1px;
      }
    }
    &.open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-49deg) translate(7px, -7px);
      }
    }
  }
  &__logo {
    color: #fff;
    font-family: 'Onest';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    @media screen and (max-width: 913px) {
      font-size: 18px;
    }
    &-link {
      text-decoration: none;
    }
  }
  &__nav {
    display: block;
    @media screen and (max-width: 1086px) {
      display: none;
    }
  }
  &__link {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-family: 'Onest';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::after {
      content: '';
      position: absolute;
      top: 27px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #fff;
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
  }
  &__btn {
    position: relative;
    padding: 11px 35px;
    border-radius: 5px;

    cursor: pointer;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #ffffff4f;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 2px solid transparent;
      border-radius: 5px;
      box-sizing: border-box;
      pointer-events: none;
      animation: borderSnake 2s linear infinite;
      mask: linear-gradient(#ff0101 0 0) content-box,
        linear-gradient(#ca1717 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
    }
    @media screen and (max-width: 1500px) {
      padding: 7px 17px;
    }
    @media screen and (max-width: 1086px) {
      display: none;
    }

    @keyframes borderSnake {
      0% {
        border-image: linear-gradient(90deg, #e7ffff 0%, transparent 100%) 1;
      }
      25% {
        border-image: linear-gradient(180deg, #e7ffff 0%, transparent 100%) 1;
      }
      50% {
        border-image: linear-gradient(270deg, #e7ffff 0%, transparent 100%) 1;
      }
      75% {
        border-image: linear-gradient(360deg, #e7ffff 0%, transparent 100%) 1;
      }
      100% {
        border-image: linear-gradient(90deg, #e7ffff 0%, transparent 100%) 1;
      }
    }
  }
  &__btn-text {
    color: #fff;
    text-align: center;
    font-family: 'Onest';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1500px) {
      font-size: 16px;
    }
  }
  &__switch-lang {
    color: #000;
  }
  &__menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
