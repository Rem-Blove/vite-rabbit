<template>
  <Nav></Nav>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Nav from './components/Nav/index.vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<style scoped></style>
