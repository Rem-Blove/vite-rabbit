<template>
  <div>Home</div>
  <button @click="increment">{{ count }}</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/Home/index'
const store = useCounterStore()
const { increment } = store
const { count } = storeToRefs(store)
</script>

<style scoped></style>
