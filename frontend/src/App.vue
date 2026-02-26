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
  <div>
    <input v-model="newTask" />
    <button @click="addTask">Add</button>
  </div>

  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.done" />
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
