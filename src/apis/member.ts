import requests from '@/utils/request'

/**
 * @description: 获取猜你喜欢数据
 * @param {*}
 * @return {*}
 */
export const getLikeListAPI = (limit = 4): any => {
  return requests({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
