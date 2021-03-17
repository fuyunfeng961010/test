import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
      },
      {
        path: '/me',
        name: 'Me',
        component: () => import(/* webpackChunkName: "me" */ '../views/me/me.vue')
      }
    ]
  },
  {
    path: '/empty',
    name: 'Empty',
    component: () => import(/* webpackChunkName: "empty" */ '../views/empty/empty.vue')
  },
  {
    path: '/plugin-list',
    name: 'PluginList',
    component: () => import(/* webpackChunkName: "pluginlist" */ '../views/plugin-page/plugin-list.vue')
  },
  {
    path: '/plugin-component',
    name: 'PluginComponent',
    component: () => import(/* webpackChunkName: "plugincomponent" */ '../views/plugin-page/plugin-component.vue')
  },
  {
    path: '/city-weather',
    name: 'CityWeather',
    component: () => import(/* webpackChunkName: "cityweather" */ '../views/weather/city-weather.vue')
  },
  {
    path: '/constellation',
    name: 'Constellation',
    component: () => import(/* webpackChunkName: "constellation" */ '../views/constellation/constellation.vue')
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
