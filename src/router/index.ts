import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'), // 显示首页内容
  },
  {
    path: '/scan',
    name: 'Scan',
    component: () => import('@/pages/TaskListPage.vue'), // 显示扫描页内容
  },
  {
    path: '/scan/:taskName',
    name: 'Task',
    component: () => import('@/pages/ScannerPage.vue'), // 显示扫描页内容
  },
]

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,
})

export default router
