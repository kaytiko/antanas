import EnglishPageVue from '@/views/EnglishPage.vue'
import RussianPageVue from '@/views/RussianPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Антанас Суткус',
    component: RussianPageVue,
  },
  {
    path: '/en',
    name: 'Antanas Sutkus',
    component: EnglishPageVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
