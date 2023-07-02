import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList: any = ref([])
    const addCart = (val: any, num: Ref): void => {
      const item = cartList.value.find((item: any) => item.skuId === val.skuId)
      if (item) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        item.count >= 99 ? (item.count = 99) : (item.count += num.value)
      } else {
        cartList.value.push(val)
      }
    }
    const delCart = (skuId: any): void => {
      const index = cartList.value.findIndex(
        (item: any) => item.skuId === skuId
      )
      cartList.value.splice(index, 1)
    }
    return {
      cartList,
      addCart,
      delCart
    }
  },
  {
    persist: true
  }
)
