// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系等组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';

echarts.use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
