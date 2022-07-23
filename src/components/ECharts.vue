<script setup>
import * as echarts from 'echarts/core';
import { ref, reactive, onMounted, onBeforeMount, watch } from 'vue';
const dom = ref();
const chart = ref();
const option = reactive({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
const renderChart = () => {
  if (!chart.value) init();
  chart.value.showLoading();
  chart.value.setOption(option, true);
  chart.value.hideLoading();
};
const init = () => {
  chart.value = echarts.init(dom.value);
  renderChart();
};
watch(
  () => option,
  () => {
    renderChart();
  },
  {
    deep: true
  }
);
onMounted(() => {
  init();
});
onBeforeMount(() => {
  if (chart.value) {
    chart.value.dispose();
    chart.value = null;
  }
});
setTimeout(() => {
  option.series[0].data = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' }
  ];
}, 2000);
</script>

<template>
  <div ref="dom" class="chart"></div>
</template>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
