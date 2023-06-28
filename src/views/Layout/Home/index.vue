<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeHot></HomeHot>
  <HomeNew></HomeNew>
  <HomeProduct></HomeProduct>
</template>

<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<style scoped></style>
