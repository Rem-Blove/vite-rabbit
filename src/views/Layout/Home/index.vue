<template>
  <div class="container">
    <HomeCategory/>
    <Banner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
</template>

<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<style scoped></style>
