<script setup>
import { ref } from 'vue'

const newTask = ref('')

const emit = defineEmits(['add-task'])

const addTask = () => {
  emit('add-task', newTask.value)
  newTask.value = ''
}

</script>

<template>
    <div>
        <input v-model="newTask" />
        <button @click="addTask">Add</button>
    </div>
</template>