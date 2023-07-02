import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '@/apis/Login'
import { setToken, getToken } from '@/utils/token'
import { setUserName } from '@/utils/userInfo'

export const useLoginStore = defineStore('login', () => {
  const userInfo = ref({})
  const token = ref(getToken())
  const login = async (formInfo: any): Promise<any> => {
    const { userName, password } = formInfo
    const res = await reqLogin(userName, password)
    if (res.code === '1') {
      userInfo.value = res.result
      setUserName(res.result.account)
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (token.value) return 'ok'
      else {
        setToken(res.result.token)
      }
      return res
    }
  }
  return {
    userInfo,
    login,
    token
  }
})
