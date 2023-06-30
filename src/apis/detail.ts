import requests from '@/utils/request'

/**
* @description: 获取goods详情页数据
* @param {*} id 分类id
* @return {*}
*/
export const reqGetDetailList = (id: string): any =>
  requests({
    method: 'get',
    url: '/goods',
    params: {
      id
    }
  })
