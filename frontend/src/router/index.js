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
      return import('../views/IngredientView.vue')
    }
  },
  {
    path: '/dessert',
    name: 'dessert',
    component: function () {
      return import('../views/DessertView.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import('../views/OrderView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
