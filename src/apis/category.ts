// 分类Api接口
import requests from '@/utils/request'
import type { Result } from './model/type'

// 获取全部分类数据
export function reqGetCategory(): Promise<Result> {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}

// 获取二级分类的数据
export const reqGetCategoryC1List = (id: string): Promise<Result> => {
  return requests({
    method: 'get',
    url: `/category?id=${id}`
  })
}
