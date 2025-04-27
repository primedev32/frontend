<template>
  <div
    class="switch"
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false"
  >
    <div class="select__wrapper">
      <button class="btn-reset select__btn" :class="colorClass">
        {{ locale }}
        <img src="/img/local.png" alt="Arrow" class="select__img" />
      </button>
      <ul class="list-reset select__list" v-if="showMenu">
        <li
          v-for="(item, index) in availableLocales"
          :key="item.code"
          class="select__item"
        >
          <NuxtLink
            :to="switchLocalePath(item.code)"
            class="select__link"
            @click="showMenu = false"
          >
            {{ item.code }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  colorClass?: string
}
defineProps<Props>()

interface AvailableLocales {
  [key: string]: any
}
const showMenu = ref(false)
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed<AvailableLocales[]>(() => {
  const currentLocale = locales.value.find((item) => item.code === locale.value)
  const otherLocales = locales.value.filter(
    (item) => item.code !== locale.value
  )
  return currentLocale ? [currentLocale, ...otherLocales] : otherLocales
})
</script>

<style scoped lang="scss">
.select__wrapper {
  position: relative;
  // border: 1px solid #fff;
  // border-radius: 10px;
  // padding: 3px 5px;
  // outline: 1px solid #fff;
  // outline-offset: 5px;
  // border-radius: 5px;
}
.select {
  &__img {
    width: 18px;
    height: 18px;
  }

  &__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    top: 0;
    left: 0;
    width: max-content;
  }
}
.select__link {
  color: #fff;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-decoration: none;
  letter-spacing: 0.6px;
  text-transform: capitalize;
}

.select__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 26px */
  letter-spacing: 0.6px;
  text-transform: capitalize;
}
</style>
