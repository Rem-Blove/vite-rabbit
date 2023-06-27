// 分类Api接口
import requests from '@/utils/request'

// 获取全部分类数据
export function reqGetCategory(): any {
  return requests({
    method: 'get',
    url: '/home/category/head'
  })
}
