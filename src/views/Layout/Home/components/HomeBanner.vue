<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqGetBannerList } from '@/apis/home'

const bannerList: any = ref([])

const getBannerList = async () => {
  const res = await reqGetBannerList()
  res.code === '1' && (bannerList.value = res.result)
}

onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 70px;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
