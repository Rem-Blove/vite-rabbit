import requests from '@/utils/request'
import type { Result } from './model/type'

// 获取轮播图数据
export const reqGetBannerList = (): Promise<Result> => {
  return requests({
    method: 'get',
    url: '/home/banner'
  })
}

// 获取人气推荐数据
export const reqGetNewList = (): Promise<Result> => {
  return requests({
    method: 'get',
    url: '/home/new'
  })
}

// 获取人气推荐数据
export const reqGetHotList = (): Promise<Result> => {
  return requests({
    method: 'get',
    url: '/home/hot'
  })
}

// 获取所有商品数据
export const reqGetGoodsList = (): Promise<Result> => {
  return requests({
    method: 'get',
    url: '/home/goods'
  })
}
