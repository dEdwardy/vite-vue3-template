import { createRouter, createWebHistory } from 'vue-router';
const innerRoutes = [];
const modules = import.meta.globEager('./modules/*.js');

Object.keys(modules).forEach((key) => {
  innerRoutes.push(...modules[key].default);
});
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/CustomLayout.vue'),
    redirect: 'index',
    children: [
      // 首页
      {
        path: 'index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/IndexView.vue'),
        name: 'index'
      },
      ...innerRoutes
    ]
  }
];
const router = createRouter({
  routes,
  history: createWebHistory()
});
export default router;
