<script setup lang="ts">
import { reqGetCategoryC1List } from '@/apis/category'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Banner from '@/components/Banner.vue'
import GoodsItem from '@/views/Layout/Home/components/HomeGoods.vue'
import { Result } from '@/apis/model//Category/C1'

const CategoryC1List = ref({} as Result)
const route = useRoute()

const getCategoryC1List = async () => {
  const res = await reqGetCategoryC1List(route.params.id as string)
  res.code === '1' && (CategoryC1List.value = res.result)
}

watch(route, () => {
  route.name === 'category' && getCategoryC1List()
})

onMounted(() => {
  getCategoryC1List()
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ CategoryC1List.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 轮播图 -->
    <Banner :distributionSite="'2'"></Banner>
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in CategoryC1List.children" :key="i.id">
          <RouterLink :to="`/category/sub/${i.id}`">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
      <div
        class="ref-goods"
        v-for="item in CategoryC1List.children"
        :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
