import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/views/About.vue'
import ProductDetail from '@/components/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
