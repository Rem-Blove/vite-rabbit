import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import './style/common.scss'
import VueLazyload from 'vue-lazyload'
import Rem from '@/assets/Rem.webp'
import { componentPlugin } from './components/index'
import 'element-plus/dist/index.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueLazyload, {
    error: Rem,
    loading: Rem,
    attempt: 3
  })
  .use(componentPlugin)
  .mount('#app')
