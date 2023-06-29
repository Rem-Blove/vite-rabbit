import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import './style/common.scss'
import VueLazyload from 'vue-lazyload'
import Rem from '@/assets/Rem.webp'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueLazyload, {
    loading: Rem,
    attempt: 3
  })
  .mount('#app')
