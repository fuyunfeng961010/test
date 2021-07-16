import { createRouter, RouteRecordRaw, RouteLocationRaw } from 'vue-router'
// import { createWebHashHistory} from 'vue-router'
import { createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/list.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/detail.vue"),
  },
  {
    path: "/pageone",
    name: "Pageone",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pageone.vue"),
  },
  {
    path: "/pagetwo",
    name: "Pagetwo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pagetwo.vue"),
  },
  {
    path: "/pagethree",
    name: "Pagethree",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pagethree.vue"),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// console.log('createRouter', createRouter)

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

let routerTrigger = false
const routerExpandRewrite = (target: any) => {
  const {push, replace, go} = target
  target.push = (to: RouteLocationRaw) => {
    routerTrigger = true
    store.commit('history/PUSH_ROUTE', target.resolve(to))
    push(to)
  }
  target.replace = (to: RouteLocationRaw) => {
    routerTrigger = true
    store.commit('history/REPLACE_ROUTE', target.resolve(to))
    replace(to)
  }
  target.go = (delta: number) => {
    if (delta !== 0) {
      routerTrigger = true
      store.commit('history/POP_ROUTE', { count: delta })
      go(delta)
    } else {
      window.location.reload()
    }
  }
}

routerExpandRewrite(router)

console.log('router', router)

router.afterEach((to) => {
  if (to.matched.length > 0 && (store as any).state.history.records.length === 0) {
    store.commit('history/PUSH_ROUTE', to)
  } else if (!routerTrigger && to.fullPath) {
    store.commit('history/POP_ROUTE', {
      path: to.fullPath
    })
  }
  routerTrigger = false
  console.log('store routes=> ', JSON.parse(JSON.stringify( store.getters['history/routes'])))
  console.log('store index=> ', JSON.parse(JSON.stringify( (store as any).state['history']['index'])))
  console.log('store direction=> ', JSON.parse(JSON.stringify( (store as any).state['history']['direction'])))
})

export default router
