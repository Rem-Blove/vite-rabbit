import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '@/apis/Login'
import { setToken, getToken } from '@/utils/token'
import { setUserName, setAvatar } from '@/utils/userInfo'

export const useLoginStore = defineStore('login', () => {
  const userInfo = ref({})
  const token = ref(getToken())
  const getUserInfo = async ({ userName, password }: any): Promise<any> => {
    const res = await reqLogin({ account: userName, password })
    if (res.code === '1') {
      userInfo.value = res.result
      setUserName(res.result.account)
      setAvatar(res.result.avatar)
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (token.value) return 'ok'
      else setToken(res.result.token)
      return res
    }
  }
  return {
    userInfo,
    getUserInfo,
    token
  }
})
