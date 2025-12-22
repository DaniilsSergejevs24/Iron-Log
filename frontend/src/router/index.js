import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Exercises from '@/pages/Exercises.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Goals from '@/pages/Goals.vue'
import Admin from '@/pages/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: Exercises
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/goals',
    name: 'goals',
    component: Goals
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router