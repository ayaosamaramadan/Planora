<script setup>
import { onMounted, ref } from 'vue'
import EnterTask from './components/EnterTask.vue'

const tasks = ref([])
// const newTask = ref('')

const addTask = (newTask) => {
  if (!newTask.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask,
  })

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
 <EnterTask @add-task="addTask" />
 

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
