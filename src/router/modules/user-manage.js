export default [
  {
    path: 'user-list',
    component: () => import('@/views/UserManage/UserList.vue'),
    name: 'user-list'
  },
  {
    path: 'user-detail/:id?',
    component: () => import('@/views/UserManage/UserDetail.vue'),
    name: 'user-detail'
  }
  // {
  //   path: 'grid-layout',
  //   component: () => import('@/views/UserManage/GridLayout.vue'),
  //   name: 'grid-layout'
  // }
];
