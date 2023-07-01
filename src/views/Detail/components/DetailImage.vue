<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
// 图片列表
const imageList = ref([] as string[])
const index = ref(0)
const handleClick = (val: number) => {
  index.value = val
}
const props = defineProps({
  mainPictures: {
    type: Array,
    required: true
  }
})
watch(
  () => props.mainPictures,
  newValue => {
    imageList.value = newValue as string[]
  }
)

// 放大镜
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)
const left = ref(100)
const top = ref(100)

watch([elementX, elementY], () => {
  if (isOutside.value) return
  elementX.value > 100 && elementX.value < 300 && (left.value = elementX.value)
  elementY.value > 100 && elementY.value < 300 && (top.value = elementY.value)

  elementX.value > 300 && (left.value = 300)
  elementX.value < 100 && (left.value = 100)

  elementY.value > 300 && (top.value = 300)
  elementY.value < 100 && (top.value = 100)
}, {
  immediate: true
})
</script>

<template>
  <div class="goods-image" v-if="imageList">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[index]" >
      <!-- 蒙层小滑块 -->
      <div
        class="layer"
        :style="{
          left: `${left - 100}px`,
          top: `${top - 100}px`
        }" />
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li
        v-for="(img, i) in imageList"
        :key="i"
        :class="{ active: i === index }"
        @mousemove="handleClick(i)">
        <img :src="img" >
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[index]})`,
          backgroundPositionX: `${(-left + 100) * 2}px`,
          backgroundPositionY: `${(-top + 100) * 2}px`
        }
      ]"
      v-show="!isOutside" />
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
