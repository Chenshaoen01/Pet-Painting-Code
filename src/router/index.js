import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/service-introduction',
    component: () => import('../views/ServiceIntroduction.vue')
  },
  {
    path: '/painting',
    component: () => import('../views/PaintingPage.vue')
  },
  {
    path: '/adoption-list',
    component: () => import('../views/AdoptionList.vue')
  },
  {
    path: '/adoption-detail/:id',
    component: () => import('../views/AdoptionDetail.vue')
  },
  {
    path: '/order-form',
    component: () => import('../views/OrderForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
