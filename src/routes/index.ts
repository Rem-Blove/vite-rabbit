import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { getToken } from '@/utils/token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  }
})
router.beforeEach(async (to) => {
  const token = getToken()
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!token && to.name !== 'login') {
    // 将用户重定向到登录页面
    return { name: 'login' }
  } else if (Boolean(token) && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
