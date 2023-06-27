<template>
  <div>首页--Layout</div>
  <button @click="increment">{{ count }}</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/Layout/index'
const store = useCounterStore()
const { increment } = store
const { count } = storeToRefs(store)
</script>

<style scoped></style>
