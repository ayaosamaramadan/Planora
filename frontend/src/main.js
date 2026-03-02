import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import store from './store/auth.js'
import router from './router/router.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(store)
app.use(router)

app.mount('#app')
