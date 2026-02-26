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

const handleDel = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
  console.log('tasks', tasks.value)
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
        <button @click="handleDel(task.id)">del</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
