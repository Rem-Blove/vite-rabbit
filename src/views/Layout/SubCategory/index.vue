<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqGetCategorySubList, reqGetSubCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { subTsType } from '@/apis/model/Category/sub'
import { subGoodTsType } from '@/apis/model/Category/subGood'
import GoodsItem from '@/views/Layout/Home/components/HomeGoods.vue'

const subList = ref({} as subTsType)
const route = useRoute()

// 获取sub面包屑数据
const getSubList = async () => {
  const res = await reqGetCategorySubList(route.params.id as string)
  res.code === '1' && (subList.value = res.result as any)
}

onMounted(() => {
  getSubList()
})

// 获取基本商品数据
const goodList = ref([] as subGoodTsType[])
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getGoodsList = async () => {
  const res = await reqGetSubCategoryAPI(data)
  res.code === '1' && (goodList.value = res.result.items)
}

onMounted(() => {
  getGoodsList()
})

// tab栏切换展示数据
const changeTab = (val: any) => {
  data.value.sortField = val
  data.value.page = 1
  getGoodsList()
}

const flag = ref(false)
const load = async () => {
  data.value.page++
  const res = await reqGetSubCategoryAPI(data.value)
  try {
    goodList.value = [...goodList.value, ...res.result.items]
    if (res.result.items.length === 0) {
      flag.value = true
    }
  } catch (error) {}
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subList.parentId}` }">
          {{ subList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="changeTab">
        <el-tab-pane label="最新商品" name="publishTime"/>
        <el-tab-pane label="最高人气" name="orderNum"/>
        <el-tab-pane label="评论最多" name="evaluateNum"/>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="flag">
        <!-- 商品列表-->
        <GoodsItem v-for="item in goodList" :goods="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
