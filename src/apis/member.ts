import requests from '@/utils/request'
import { type Result } from '@/apis/model/type'
import { type OrderType } from '@/types/Order'

/**
 * @description: 获取猜你喜欢数据
 * @param {*}
 * @return {*}
 */
export const getLikeListAPI = (limit = 4): Promise<Result> => {
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
export const getUserOrder = (params: object): Promise<OrderType> => {
  return requests({
    url: '/member/order',
    method: 'GET',
    params
  })
}
