<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqGetBannerList } from '@/apis/home'
import { BannerTsType } from '@/apis/model/Home/banner'

const bannerList = ref([] as BannerTsType[])
const props = defineProps({
  distributionSite: {
    type: String
  } as {}
})

const getBannerList = async () => {
  const res = await reqGetBannerList(props.distributionSite as string)
  res.code === '1' && (bannerList.value = res.result)
}

onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="home-banner" :class="{ 'remBanner': props.distributionSite === '2' }">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1040px;
  height: 500px;
  position: absolute;
  left: 250px;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
.remBanner {
  margin: 0 auto;
  position: static;
}
</style>
