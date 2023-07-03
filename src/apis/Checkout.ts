import request from '@/utils/request'
import { type CheckoutTs } from './model/Checkout/Checkout'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = (): Promise<CheckoutTs> => {
  return request({
    url: '/member/order/pre'
  })
}
