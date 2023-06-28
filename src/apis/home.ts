import requests from '@/utils/request'
import type { Result } from './type'

export const reqGetBannerList = (): Promise<Result> => {
  return requests({
    method: 'get',
    url: '/home/banner'
  })
}
