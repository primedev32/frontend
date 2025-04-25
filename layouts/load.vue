<template>
  <div>
    <CommonLoadPage v-if="isLoading" />
    <slot v-else />
  </div>
</template>

<script setup>
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>
