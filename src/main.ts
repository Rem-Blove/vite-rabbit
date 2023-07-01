import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import './style/common.scss'
import VueLazyload from 'vue-lazyload'
import Rem from '@/assets/Rem.webp'

import Banner from './components/Banner.vue'
import HomePanel from './components/HomePanel.vue'
import XtxSku from './components/XtxSku/index.vue'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueLazyload, {
    error: Rem,
    loading: Rem,
    attempt: 3
  })
  .mount('#app')

export const componentPlugin = {
  install(app: any) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxImageView', Banner)
    app.component('HomePanel', HomePanel)
    app.component('XtxSku', XtxSku)
  }
}
