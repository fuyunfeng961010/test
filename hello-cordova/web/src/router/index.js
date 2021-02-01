import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/main/main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
      },
      {
        path: '/me',
        name: 'Me',
        component: () => import(/* webpackChunkName: "about" */ '../views/me/me.vue')
      }
    ]
  },
  {
    path: '/empty',
    name: 'Empty',
    component: () => import(/* webpackChunkName: "about" */ '../views/empty/empty.vue')
  },
  {
    path: '/plugin-list',
    name: 'PluginList',
    component: () => import(/* webpackChunkName: "about" */ '../views/plugin-page/plugin-list.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
