import requests from '@/utils/request'
import type { PayTs } from '@/apis/model/Pay/pay'
import { type OrderdetailTs } from '@/apis/model/Pay/Orderdetail'

/**
* @description: 提交订单
* @return {*}
*/
export const reqPostPay = (data: object): Promise<PayTs> => requests({
  method: 'post',
  url: '/member/order',
  data
})
/**
* @description: 获取订单详情(以及支付结果)
* @param {*} id 携带订单id
* @return {*}
*/
export const getOrderAPI = (id: string): Promise<OrderdetailTs> => {
  return requests({
    url: `/member/order/${id}`
  })
}
