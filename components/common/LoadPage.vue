<template>
  <div class="loader">
    <div class="loader__wrapper">
      <img class="loader__img" src="/img/load-2.png" alt="img" />
      <div class="loader__loader">
        <span class="loader__span">primedev</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
  $gsap.to('.loader__span', {
    color: '#ffffff',
    duration: 1.5,
    delay: 1,

    ease: 'power2.out',
  })
})
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  height: 100vh;
  background: #222624;
  position: relative;
  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('/img/loag-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
    @media screen and (max-width: 655px) {
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 457px) {
      width: 250px;
      height: 250px;
    }
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    width: 200px;
    height: 100%;
    height: 200px;
    @media screen and (max-width: 655px) {
      width: 140px;
      height: 140px;
    }
    @media screen and (max-width: 457px) {
      width: 110px;
      height: 110px;
    }
  }
  &__loader {
    z-index: 1;
    position: absolute;
    top: 72%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__span {
    color: #878787;
    font-family: 'Onest';
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: uppercase;
    @media screen and (max-width: 655px) {
      font-size: 25px;
    }
    @media screen and (max-width: 457px) {
      font-size: 20px;
    }
  }
}
</style>
