import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMessageStore = defineStore('message', () => {
  const message = ref('')

  const setMessage = (msg) => {
    message.value = msg
  }

  return { message, setMessage }
})