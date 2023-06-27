// 分类Api接口
import requests from '@/utils/request'
import type { categoryC1Info } from '@/apis/model/category'

// 获取全部分类数据
export function getCategory(): Promise<categoryC1Info> {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}
