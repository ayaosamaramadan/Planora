import { createStore } from 'vuex'
import authModule from './modules/auth.module'

export default createStore({
  modules: {
    auth: authModule,
  },
  strict: import.meta.env.DEV,
})