<template>
  <div class="burger" :class="{ open: isOpen }">
    <div class="blur-background burger__wrapper">
      <ul class="list-reset burger__list">
        <li v-for="(item, index) in navList" :key="index">
          <NuxtLinkLocale
            :to="item.link"
            class="burger__link"
            @click="emit('closeBurger')"
            >{{ $t(`header.${item.title}`) }}
          </NuxtLinkLocale>
        </li>
      </ul>
      <button class="btn-reset burger__btn">
        <span @click="scrollToSection('contacts')" class="burger__btn-text">{{
          $t('header.button')
        }}</span>
      </button>
      <ul class="list-reset burger__list-social">
        <li v-for="(item, index) in socialList" :key="index">
          <a :href="item.link" target="_blank" class="burger__link-social"
            ><img :src="item.icon" alt="img" class="burger__img-social"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['closeBurger'])
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
    emit('closeBurger')
  }
}
</script>

<style lang="scss" scoped>
.burger {
  transition: transform 0.3s ease-in-out;
  z-index: -1;
  @media screen and (max-width: 913px) {
    height: 627px;
  }
  @media screen and (max-width: 817px) {
    height: 563px;
  }
  @media screen and (max-width: 655px) {
    height: 462px;
  }
  @media screen and (max-width: 463px) {
    height: 438px;
  }
  .blur-background {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    height: 100%;
    padding: 200px 20px 20px;
    border-radius: 0 0 15px 15px;

    @media screen and (max-width: 655px) {
      padding-top: 150px;
    }
  }
  &__wrapper {
    padding: 180px 20px 20px 20px;
    @media screen and (max-width: 655px) {
      padding: 120px 20px 20px 20px;
    }
  }
  &__wrapper {
    color: #fff;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    @media screen and (max-width: 655px) {
      gap: 10px;
    }
  }
  &__link {
    color: #fff;
    font-family: 'Onest';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    @media screen and (max-width: 655px) {
      font-size: 14px;
    }
  }
  &__btn {
    margin-bottom: 25px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #fff;
    @media screen and (max-width: 655px) {
      padding: 7px 15px;
    }
    &-text {
      color: #fff;
      text-align: center;
      font-family: 'Onest';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 655px) {
        font-size: 12px;
      }
    }
  }
  &__list-social {
    display: flex;
    gap: 15px;
  }
  &__img-social {
    width: 25px;
    height: auto;
    @media screen and (max-width: 655px) {
      width: 20px;
    }
  }
}
</style>
