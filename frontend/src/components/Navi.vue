<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Sign Up</router-link></li>
      <li v-if="isAuthenticated">
        <span v-if="user">{{ user.name }}</span>
        <button @click="handleLogout" :disabled="loading">
          {{ loading ? 'Logging out...' : 'Logout' }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
const user = computed(() => store.getters['auth/currentUser'])
const loading = computed(() => store.getters['auth/isLoading'])

const handleLogout = async () => {
  await store.dispatch('auth/logout')
  router.push({ name: 'Login' })
}
</script>

<style scoped>
/* your styles */
</style>
