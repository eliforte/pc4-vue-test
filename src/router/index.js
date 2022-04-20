import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import CreateUser from '../views/CreateUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateUser,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router