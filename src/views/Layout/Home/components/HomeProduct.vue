<script setup lang="ts">
import { reqGetGoodsList } from '@/apis/home'
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { DoodsTsType } from '@/apis/model/Home/goods'

const goodsList = ref([] as DoodsTsType[])
const HomePanel = defineAsyncComponent(
  () => import('@/components/HomePanel.vue')
)

const getGoodsList = async () => {
  const res = await reqGetGoodsList()
  res.code === '1' && (goodsList.value = res.result)
}

onMounted(() => {
  getGoodsList()
})
</script>

<template>
  <div class="home-product">
    <HomePanel
      :title="cate.name"
      v-for="cate in goodsList"
      :key="cate.id"
      v-show="goodsList.length">
      <template v-slot:main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-lazy="cate.picture" />
            <strong class="label">
              <span>{{ cate.name }}馆</span>
              <span>{{ cate.saleInfo }}</span>
            </strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in cate.goods" :key="good.id">
              <RouterLink to="/" class="goods-item">
                <img v-lazy="good.picture" alt="" />
                <p class="name ellipsis">{{ good.name }}</p>
                <p class="desc ellipsis">{{ good.desc }}</p>
                <p class="price">&yen;{{ good.price }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
      </template>
    <!-- 接口失败就提示用户重新刷新页面 -->
    </HomePanel>
    <HomePanel v-show="!goodsList.length" :title="'加载失败，请刷新页面重试'" />
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all 0.5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

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
  }
}
</style>
