import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import './style/common.scss'
import VueLazyload from 'vue-lazyload'
import Rem from '@/assets/Rem.webp'
import { componentPlugin } from './components/index'
import 'element-plus/es/components/message/style/css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

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
