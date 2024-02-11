import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ingredient',
    name: 'ordingredienter',
    component: function () {
      return import('../views/IngredientVue.vue')
    }
  },
  {
    path: '/dessert',
    name: 'dessert',
    component: function () {
      return import('../views/DessertVue.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import('../views/OrderVue.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
