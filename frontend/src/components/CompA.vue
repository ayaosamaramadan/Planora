<script setup>
import { ref } from 'vue'
import { useMessageStore } from '../store/index'

const inputValue = ref('')
const store = useMessageStore()

const emit = defineEmits(['send-message'])

const sendMessage = () => {
    store.setMessage(inputValue.value)
    inputValue.value = ''
}
</script>

<template>
    <input v-model="inputValue" placeholder="Type message..." />
    <button @click="sendMessage">Send</button>
</template>