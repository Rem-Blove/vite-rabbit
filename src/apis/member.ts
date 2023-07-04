import requests from '@/utils/request'

/**
 * @description: 获取猜你喜欢数据
 * @param {*}
 * @return {*}
 */
export const getLikeListAPI = (limit = 4): any => {
  return requests({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}

/**
 * @description: 获取我的全部订单列表
 * @param {*} { page: 当前页, pageSize: 页数, orderState: 订单状态}
 * @return {*}
 */
export const getUserOrder = (params: object): any => {
  return requests({
    url: '/member/order',
    method: 'GET',
    params
  })
}
