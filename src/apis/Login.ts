import requests from '@/utils/request'

/**
 * @description: 登录接口
 * @data  account 账号 password 密码
 * @return {*}
 */
export const reqLogin = (account: string, password: string): any =>
  requests({
    method: 'post',
    url: '/login',
    data: {
      account,
      password
    }
  })
