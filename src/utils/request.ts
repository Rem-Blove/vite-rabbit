import axios from 'axios'
import { ElMessage } from 'element-plus'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken, removeToken } from './token'
import router from '@/routes'

const requests = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
requests.interceptors.request.use(
  function (config) {
    const token = getToken()
    // 在发送请求之前做些什么
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (token) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      config.headers.Authorization = `Bearer ${token}`
    }
    nProgress.start()
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
requests.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nProgress.done()

    return response.data
  },
  function (error) {
    if (error.response?.status === 401) {
      removeToken()
      void router.push('/login')
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      type: 'error',
      message: error.response?.data ? error.response.data.msg : '请求失败,刷新页面'
    })
    return Promise.reject(error)
  }
)
export default requests
