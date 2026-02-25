<script setup>
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
    <div class="counter">
        <h1>Counter: {{ count }}</h1>
        <button @click="count++">Increment</button>
        <button @click="count--">Decrement</button>
    </div>
</template>

<style scoped>
.counter {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>