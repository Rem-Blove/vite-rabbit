import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqGetCategory } from '@/apis/category'

export const useCategoryStore = defineStore('category', () => {
  // 一级菜单的数据
  const CategoryList = ref([])
  const getCategory = async (): Promise<any> => {
    const res = await reqGetCategory()
    if (res.code === '1') {
      CategoryList.value = res.result
    }
  }
  return {
    CategoryList,
    getCategory
  }
})
