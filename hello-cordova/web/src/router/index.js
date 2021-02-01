import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/me/me.vue')
  },
  {
    path: '/empty',
    name: 'Empty',
    component: () => import(/* webpackChunkName: "about" */ '../views/empty/empty.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
