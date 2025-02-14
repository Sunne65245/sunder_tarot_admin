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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router