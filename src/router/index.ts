import { createRouter, createWebHistory } from 'vue-router'

const base = import.meta.env.BASE_URL

console.log('Base URL:', base) // 输出当前的 BASE_URL，便于调试

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
  history: createWebHistory(base), // 使用 HTML5 History 模式
  routes,
})

export default router
