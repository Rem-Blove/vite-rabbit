<template>
  <Fixed :CategoryList="CategoryList"></Fixed>
  <Nav></Nav>
  <Header :CategoryList="CategoryList"></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Nav from './components/Nav/index.vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import Fixed from './components/Fixed/index.vue'

import { onMounted, provide } from 'vue'
import { useCategoryStore } from '@/stores/Layout/index'
import { storeToRefs } from 'pinia'

const store = useCategoryStore()
const { CategoryList } = storeToRefs(store)

provide('CategoryList', CategoryList)

onMounted(() => {
  store.getCategory()
})

</script>

<style scoped></style>
