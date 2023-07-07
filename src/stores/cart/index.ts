import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import {
  insertCartAPI,
  reqGetCartList,
  delCartAPI,
  mergeCartAPI
} from '@/apis/cart'
import { getToken } from '@/utils/token'
import { ElMessage } from 'element-plus'
import { type lCLType } from '@/types/Cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const localCartList = ref<lCLType>(['']) // 本地购物车数据
    const cartList = ref([]) // 服务器返回用户的购物车数据
    const token = getToken()
    // 本地添加或者接口添加购物车
    const addCart = async (
      val: { skuId: string, count: number },
      num: Ref
    ): Promise<void> => {
      if (token) {
        const res = await insertCartAPI(val)
        if (res.code === '1') {
          ElMessage.success('添加成功')
          void getCartList()
        } else {
          ElMessage.error('添加失败')
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        const item = localCartList.value.find(
          (item: { skuId: string }) => item.skuId === val.skuId
        )
        if (item) {
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          item.count >= 99 ? (item.count = 99) : (item.count += num.value)
        } else {
          localCartList.value.push(val)
        }
      }
    }
    const delCart = async (skuId: string[]): Promise<void> => {
      if (token) {
        const res = await delCartAPI(skuId)
        if (res.code === '1') {
          ElMessage.success('删除成功')
          void getCartList()
        }
      } else {
        const index = localCartList.value.findIndex(
          (item: any) => item.skuId === skuId
        )
        localCartList.value.splice(index, 1)
      }
    }
    const getCartList = async (): Promise<void> => {
      const res = await reqGetCartList()
      if (res.code === '1') {
        cartList.value = res.result
      }
    }
    // 合并购物车
    const mergeCart = async (): Promise<void> => {
      if (localCartList.value.length === 0) return
      const cartInfo = localCartList.value.map(
        (item: { skuId: string, selected: boolean, count: number }) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        }
      )
      const res = await mergeCartAPI(cartInfo)
      res.code === '1' && (localCartList.value = [] as unknown as lCLType)
      void getCartList()
    }
    return {
      cartList,
      localCartList,
      addCart,
      delCart,
      getCartList,
      mergeCart
    }
  },
  {
    persist: true
  }
)
