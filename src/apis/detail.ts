import requests from '@/utils/request'
import type { Result, ResultObject } from './model/type'

/**
 * @description: 获取goods详情页数据
 * @param {*} id 分类id
 * @return {*}
 */
export const reqGetDetailList = (id: string): Promise<ResultObject> =>
  requests({
    method: 'get',
    url: '/goods',
    params: {
      id
    }
  })

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = (
  id: string,
  type: number,
  limit: number = 3
): Promise<Result> => {
  return requests({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
