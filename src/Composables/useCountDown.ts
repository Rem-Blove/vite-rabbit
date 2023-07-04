// 封装倒计时组合式函数
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = (): any => {
  // 清除定时器
  let timer: string | number | NodeJS.Timer | null | undefined = null
  // 响应式数据
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分:ss秒'))
  // 倒计时逻辑
  const fun = (currentTime: number): void => {
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    fun
  }
}
