import requests from '@/utils/request'
import { type Result } from '@/apis/model/type'

/**
 * @description: 加入购物车
 * @data { skuId: string count: number }
 * @return {*}
 */
export const insertCartAPI = ({
  skuId,
  count
}: {
  skuId: string
  count: number
}): Promise<Result> => {
  return requests({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
/**
 * @description: 获取购物车列表
 * @header { token: string }
 * @return {*}
 */
export const reqGetCartList = (): Promise<Result> => {
  return requests({
    url: '/member/cart',
    method: 'GET'
  })
}
/**
 * @description: 删除购物车商品
 * @data { skuId: string }
 * @return {*}
 */
export const delCartAPI = (ids: string[]): Promise<Result> => {
  return requests({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids: [ids]
    }
  })
}

/**
 * @description: 合并购物车
 * @data { skuId: string selected: boolean count: number }
 * @return {*}
 */
export const mergeCartAPI = (data: object[]): Promise<Result> => {
  return requests({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
