<script setup>

import { useMessageStore } from '../store/index'

const store = useMessageStore()
</script>

<template>
  <h2 class="sty">{{ store.message }}</h2>
</template>

<style scoped>
.sty {
  color: red;
}
</style>