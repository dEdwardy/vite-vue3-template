<script setup>
import { computed } from 'vue';

const props = defineProps({
  // 显示的 svg 图标名称（剔除 icon-）
  name: {
    type: String,
    required: true
  },
  // 直接指定 svg 图标的颜色
  color: {
    type: String
  },
  // 通过 tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
});
// 真实显示的 svg 图标名（拼接 #icon-）
// 注意这里的icon需要与在vite.config.js里对应上
const symbolId = computed(() => `#icon-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
