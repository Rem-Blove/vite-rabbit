<template>
  <HomePanel :nameInfo="nameInfo">
    <template v-slot:main>
      <div>
        <ul class="goods-list">
          <li v-for="item in HotList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.title }}</p>
              <p class="price">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
  </HomePanel>
</template>

<script setup lang="ts">
import HomePanel from '@/components/HomePanel.vue'
import { ref, onMounted } from 'vue'
import { HotTsType } from '@/apis/model/hot'
import { reqGetHotList } from '@/apis/home'

const nameInfo = ref(['人气推荐', '人气爆款 不容错过'])
const HotList = ref([] as HotTsType[])

const getHotList = async () => {
  const res = await reqGetHotList()
  res.code === '1' && (HotList.value = res.result)
}

onMounted(() => {
  getHotList()
})
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
