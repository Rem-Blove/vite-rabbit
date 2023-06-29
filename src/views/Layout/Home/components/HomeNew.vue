<template>
  <HomePanel :title="title" :titleSpan="titleSpan">
    <template v-slot:main>
      <div>
        <ul class="goods-list">
          <li v-for="item in NewList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
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
import { reqGetNewList } from '@/apis/home'
import { NewTsType } from '@/apis/model/Home/new'

const title = ref('新鲜好物')
const titleSpan = ref('新鲜出炉 品质靠谱')
const NewList = ref([] as NewTsType[])

const getNewList = async () => {
  const res = await reqGetNewList()
  res.code === '1' && (NewList.value = res.result)
}

onMounted(() => {
  getNewList()
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
