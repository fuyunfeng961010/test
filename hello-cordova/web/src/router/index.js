import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'
console.log('store', store)

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

router.beforeEach((to, from, next) => {
  store.commit('setSlideFlag', store.state.isGoBack ? 'slide-out' : 'slide-in')
  store.commit('setIsGoBack', false)
  next()
})

export default router
