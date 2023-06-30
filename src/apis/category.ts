// 分类Api接口
import requests from '@/utils/request'
import type { Result } from './model/type'
import type { ResultObject } from '@/apis/model/Category/C1'

// 获取全部分类数据
export function reqGetCategory(): Promise<Result> {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}

// 获取二级分类的数据
export const reqGetCategoryC1List = (id: string): Promise<ResultObject> => {
  return requests({
    method: 'get',
    url: `/category?id=${id}`
  })
}

// 获取sub分类的数据
export const reqGetCategorySubList = (id: string): Promise<ResultObject> => {
  return requests({
    method: 'get',
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const reqGetSubCategoryAPI = (data: object): any => {
  return requests({
    method: 'post',
    url: '/category/goods/temporary',
    data
  })
}
