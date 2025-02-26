import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/consultations',
    name: 'ConsultationList',
    component: () => import('../views/ConsultationListView.vue')
  },
  {
    path: '/SchedulingSystem',
    name: 'SchedulingSystemList',
    component: () => import('../views/SchedulingSystem.vue')
  },
  // 添加重定向，確保根路徑能正常工作
  {
    path: '/sunder_tarot_admin/',
    redirect: '/'
  },
  // 捕獲所有未匹配路由並重定向到首頁
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router