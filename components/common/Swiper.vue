<template>
	<ClientOnly>
		<Swiper
			:loop="loop"
			:watchSlidesProgress="progress"
			:modules="[Navigation]"
			:slides-per-view="slidesperview"
			:breakpoints="breakpoints"
			space-between="20"
			:navigation="{
				nextEl: `.${customButtonNext}`,
				prevEl: `.${customButtonPrev}`,
			}"
			class="slider__buttons"
			@swiper="initSwiper"
		>
			<SwiperSlide v-for="(item, index) in slideCard" :key="index">
				<div class="slider__wrapper">
					<slot name="slide" :item="item" :index="index" />
				</div>
			</SwiperSlide>
		</Swiper>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperInstance = ref<any>(null)
const emit = defineEmits(['instance'])

const initSwiper = (instance: any) => {
	swiperInstance.value = instance
	emit('instance', instance)
}

defineProps<{
	slidesperview?: number
	slideCard?: any[]
	customButtonNext?: string
	customButtonPrev?: string
	loop?: boolean
	breakpoints?: any
	progress?: any
}>()
</script>
