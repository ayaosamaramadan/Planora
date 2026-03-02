<template>
  <nav class="navbar">
    <router-link to="/" class="brand">
      <span class="brand-icon">📋</span>
      <span class="brand-name">Planora</span>
    </router-link>

    <ul class="nav-links">
      <li v-if="!isAuthenticated">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/signup" class="nav-link nav-link--cta">Sign Up</router-link>
      </li>
      <li v-if="isAuthenticated" class="user-section">
        <div class="user-avatar">{{ user?.name?.charAt(0).toUpperCase() }}</div>
        <span class="user-name">{{ user?.name }}</span>
        <button class="logout-btn" @click="handleLogout" :disabled="loading">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          {{ loading ? 'Logging out…' : 'Logout' }}
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
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.75rem;
  height: 64px;
  background: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.brand-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.4px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.nav-link:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.nav-link.router-link-active {
  color: var(--primary);
  background: var(--primary-light);
}

.nav-link--cta {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
}

.nav-link--cta:hover {
  background: var(--primary-hover);
  color: #fff;
}

.nav-link--cta.router-link-active {
  background: var(--primary-hover);
  color: #fff;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary), #A855F7);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-name {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-heading);
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.875rem;
  background: transparent;
  color: var(--color-text-muted);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover:not(:disabled) {
  background: var(--danger-light);
  color: var(--danger);
  border-color: var(--danger);
}

.logout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
