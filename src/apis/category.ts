// 分类Api接口
import requests from '@/utils/request'
import type { categoryC1 } from './model/type'

// 获取全部分类数据
export function reqGetCategory(): Promise<categoryC1> {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}
