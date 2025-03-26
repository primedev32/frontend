<template>
  <section class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__logo-link" to="/"
          ><span class="header__logo">Primedev</span></NuxtLink
        >
        <nav class="header__nav">
          <ul class="list-reset header__list">
            <li v-for="(item, index) in navList" :key="index">
              <NuxtLink :to="item.link" class="header__link">{{
                item.title
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink @click="scrollToContacts" class="header__btn">
          <span class="header__btn-text">Связаться с нами</span>
        </NuxtLink>
        <div class="header__burger" @click="toggleBurger">
          <div class="header__burger-menu" :class="{ open: isOpen }">
            <span></span>
            <span></span>
            <span></span>
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

const scrollToContacts = async () => {
  const section = document.getElementById('contacts')

  if (section) {
    $gsap.to(window, {
      duration: 1,
      scrollTo: section,
      ease: 'power2.out',
    })
  } else {
    await navigateTo('/')
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
  padding: 38px 0 36px 0;
  border-radius: 0px 0px 15px 15px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 100;
  @media screen and (max-width: 655px) {
    padding: 25px 0 25px 0;
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
      z-index: 100;
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
    @media screen and (max-width: 913px) {
      height: 18px;
    }
    span {
      display: block;
      height: 3px;
      background-color: #fff;
      transition: transform 0.3s, opacity 0.3s;
      @media screen and (max-width: 913px) {
        height: 2px;
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
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    @media screen and (max-width: 913px) {
      font-size: 25px;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::after {
      content: '';
      position: absolute;
      top: 31px;
      left: 0;
      width: 100%;
      height: 2px;
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
      font-size: 18px;
    }
  }
  &__btn {
    padding: 18px 50px;
    border-radius: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #ffffff4f;
    }
    @media screen and (max-width: 1500px) {
      padding: 10px 20px;
    }
    @media screen and (max-width: 1086px) {
      display: none;
    }
  }
  &__btn-text {
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
