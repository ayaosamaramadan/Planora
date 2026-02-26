<script setup>
const emit = defineEmits(['send-message'])

const sendMessage = () => {
  emit('send-message', 'Hello from A')
}
</script>

<template>
  <button @click="sendMessage">Send</button>
</template>