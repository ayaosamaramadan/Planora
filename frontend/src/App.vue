<script setup>
import { onMounted, ref } from 'vue'

const tasks = ref([])
const newTask = ref('')

const addTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
  })
  newTask.value = ''
}

onMounted(() => {
  console.log('tasks', tasks.value)
})
</script>

<template>
  <input v-model="newTask" />
  <button @click="addTask">Add</button>
</template>

<style scoped>

</style>
