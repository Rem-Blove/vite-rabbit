import Banner from '../components/Banner.vue'
import HomePanel from '../components/HomePanel.vue'
import XtxSku from '../components/XtxSku/index.vue'
import { type App } from 'vue'

export const componentPlugin = {
  install(app: App) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxImageView', Banner)
    app.component('HomePanel', HomePanel)
    app.component('XtxSku', XtxSku)
  }
}
