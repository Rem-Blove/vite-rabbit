<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqGetCategorySubList } from '@/apis/category'
import { useRoute } from 'vue-router'
import { subTsType } from '@/apis/model/Category/sub'

const subList = ref({} as subTsType)
const route = useRoute()

/**
 * 获取sub面包屑数据
 * @param id
 * @returns
 */
const getSubList = async () => {
  const res = await reqGetCategorySubList(route.params.id as string)
  res.code === '1' && (subList.value = res.result as any)
}

onMounted(() => {
  getSubList()
})
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subList.parentId}`}">
          {{ subList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs>
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
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
