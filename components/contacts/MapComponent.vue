<script lang="ts" setup>
import type { YMap } from '@yandex/ymaps3-types'
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const handleClickOnBtnToMap = () => {
  window.open(
    'https://yandex.ru/maps?ll=34.358848,53.267493&z=18&l=map&pt=34.358848,53.267493',
    '_blank'
  )
}
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [34.358848, 53.267493],
        zoom: 11,
      },
    }"
    class="map"
    width="100%"
    height="100%"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker
      position="top-center left-center"
      :settings="{ coordinates: [34.358848, 53.267493] }"
    >
      <img class="pin" src="/img/marker.webp" alt="" />
    </yandex-map-marker>
    <yandex-map-controls
      :settings="{
        position: 'bottom left',
        orientation: 'vertical',
      }"
    >
      <YandexMapControlButton
        style="padding: 0"
        :settings="{
          onClick: handleClickOnBtnToMap,
          background: '#0E7477',
        }"
      >
        <button class="btn-reset btn-map">
          {{ $t('contact-page.maps-title') }}
        </button>
      </YandexMapControlButton>
    </yandex-map-controls>
  </yandex-map>
</template>

<style lang="scss" scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  object-fit: cover;
  width: 70px;
  height: 70px;
  @media screen and (max-width: 463px) {
    width: 50px;
    height: 50px;
  }
}
.btn-map {
  font-size: 14px;
  position: relative;
  z-index: 200000000000000;
  cursor: pointer;
  color: #fff;
  border-radius: 11px;
  background: #0e7477;
}
@media screen and (max-width: 564px) {
  .btn-map {
    font-size: 12px;
    padding: 0 0;
  }
}
</style>
