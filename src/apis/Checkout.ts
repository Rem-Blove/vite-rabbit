import request from '@/utils/request'
import { type CheckoutTs } from './model/Checkout/Checkout'
import { type Address } from './model/Checkout/address'
import { type GetAddress } from './model/Checkout/getAddress'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = (): Promise<CheckoutTs> => {
  return request({
    url: '/member/order/pre'
  })
}
/**
* @description: 添加收货地址
* @return {*}
*/
export const addAddressAPI = (data: object): Promise<Address> => {
  return request({
    url: '/member/address',
    method: 'POST',
    data
  })
}
/**
* @description: 获取收获地址
* @param {*}
* @return {*}
*/
export const getAddressAPI = (): Promise<GetAddress> => {
  return request({
    url: '/member/address',
    method: 'GET'
  })
}
