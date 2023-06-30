<script setup>
import { ref, onMounted } from 'vue'
import { fetchHotGoodsAPI } from '@/apis/detail'

const props = defineProps(['title', 'type', 'id'])
const hotGoodsList = ref([])
const getHotGoodsList = async () => {
  const res = await fetchHotGoodsAPI(props.id, props.type, 3)
  res.code === '1' && (hotGoodsList.value = res.result)
}
onMounted(() => {
  getHotGoodsList()
})
</script>
<template>
  <div class="goods-hot">
    <h3>{{ props.title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in hotGoodsList"
      :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
</style>
