// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '#apply',
        name: 'Apply',
        component: () => import('@/views/Apply.vue'),
      },
      {
        path: '#contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: '#login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/parent',
    component: () => import('@/layouts/default/Parent.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/parent_app/Dashboard.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
