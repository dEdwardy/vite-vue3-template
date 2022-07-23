<script setup>
import ECharts from '@/components/ECharts.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const app = import.meta.env.VITE_APP;
</script>
<template>
  Index {{ app }} {{ t('home') }}
  <svg-icon style="width: 20px; height: 20px" name="vue"></svg-icon>
  <svg-icon style="width: 20px; height: 20px" name="user"></svg-icon>
  <e-charts style="height: 300px" />
</template>
