<template>
  <div class="callback-page">
    <div class="callback-card">
      <template v-if="error">
        <div class="callback-icon callback-icon--error">✗</div>
        <p class="callback-message callback-message--error">{{ error }}</p>
        <p class="callback-sub">Redirecting to login…</p>
      </template>
      <template v-else>
        <div class="spinner-ring"></div>
        <p class="callback-message">Authenticating…</p>
        <p class="callback-sub">Please wait a moment</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const error = ref(null)

onMounted(async () => {
  const token = route.query.token
  const err = route.query.error

  if (err) {
    error.value = decodeURIComponent(err)
    setTimeout(() => router.push({ name: 'Login' }), 3000)
    return
  }

  if (!token) {
    error.value = 'No token received.'
    setTimeout(() => router.push({ name: 'Login' }), 2000)
    return
  }

  // Store token + fetch user profile
  await store.dispatch('auth/loginWithToken', token)
  router.push({ name: 'Home' })
})
</script>

<style scoped>
.callback-page {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.callback-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-md);
  text-align: center;
  min-width: 280px;
}

.spinner-ring {
  width: 48px;
  height: 48px;
  border: 4px solid var(--primary-light);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.callback-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.callback-icon--error {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--danger-light);
  color: var(--danger);
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.callback-message {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.callback-message--error {
  color: var(--danger);
}

.callback-sub {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}
</style>
