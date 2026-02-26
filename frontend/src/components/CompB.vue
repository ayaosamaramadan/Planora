<script setup>
const { msg } = defineProps(['msg'])
</script>

<template>
  <h2 class="sty">{{ msg }}</h2>
</template>

<style scoped>
.sty {
  color: red;
}
</style>