<script setup>
import { onMounted, ref } from 'vue'
import EnterTask from './components/EnterTask.vue'
import DeleteTask from './components/DeleteTask.vue'
import CompB from './components/CompB.vue'
import CompA from './components/CompA.vue'

const message = ref('')

const handleMessage = (msg) => {
  message.value = msg
}

const tasks = ref([])



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
        <DeleteTask @delete-task="handleDel(task.id)" />
      </li>
    </ul>
  </div>



  <!-- from compA to compB -->
  <CompA/>
  <!-- @send-message="handleMessage"  -->
  
  <CompB/>
  <!-- :msg="message" -->
</template>

<style scoped></style>
