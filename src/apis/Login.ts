import requests from '@/utils/request'

export const reqLogin = (account: string, password: string): any =>
  requests({
    method: 'post',
    url: '/login',
    data: {
      account,
      password
    }
  })
