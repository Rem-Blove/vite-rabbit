import requests from '@/utils/request'

/**
 * @description: 登录接口
 * @data  account 账号 password 密码
 * @return {*}
 */
export const reqLogin = (data: object): any =>
  requests({
    method: 'post',
    url: '/login',
    data
  })
