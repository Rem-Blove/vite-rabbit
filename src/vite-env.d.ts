// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import type { DefineComponent } from 'vue'
  const component: ComponentOptions | ComponentOptions['setup']
  export default component
}
declare module 'nprogress'
declare module 'vite-plugin-eslint'
