import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

// console.log('VueRouter', VueRouter)

// let routerTrigger = false
// class MyRouter extends VueRouter {
//   push(location, onComplete, onAbort) {
//     routerTrigger = true
//     store.commit('history/PUSH_ROUTE', super.resolve(location).resolved)
//     super.push(location, onComplete, onAbort)
//   }
//   replace(location, onComplete, onAbort) {
//     routerTrigger = true
//     store.commit('history/REPLACE_ROUTE', super.resolve(location).resolved)
//     super.replace(location, onComplete, onAbort)
//   }
//   go(n) {
//     if (n !== 0) {
//       routerTrigger = true
//       store.commit('history/POP_ROUTE', { count: n })
//       super.go(n)
//     } else {
//       window.location.reload()
//     }
//   }
// }


// const router = new MyRouter({
const router = new VueRouter({
  // mode: 'history',
  routes,
});

// console.log('router', router)

window.addEventListener('hashchange', function (e) {
  // console.log('hashchange => ', e)
})

window.addEventListener('popstate', function (e) {
  // console.log('popstate => ', e)
  // console.log('window.history => ', window.history)
});

// let routerTrigger = false
// const routerExpandRewrite = function (target) {
//   const {push, replace, go} = target
//   console.log('target', target)
//   target.push = function (location, onComplete, onAbort) {
//     routerTrigger = true
//     console.log('target.resolve(location)', target.resolve(location))
//     console.log('target.resolve(location)', target.resolve(location).resolved)
//     store.commit('history/PUSH_ROUTE', target.resolve(location).resolved)
//     push.call(this, location, onComplete, onAbort)
//   }
//   target.replace = (to) => {
//     routerTrigger = true
//     store.commit('history/REPLACE_ROUTE', target.resolve(to).resolved)
//     replace(to)
//   }
//   target.go = (delta) => {
//     if (delta !== 0) {
//       routerTrigger = true
//       store.commit('history/POP_ROUTE', { count: delta })
//       go(delta)
//     } else {
//       window.location.reload()
//     }
//   }
// }

// routerExpandRewrite(router)

// router.afterEach((to, from) => {
//   if (to.matched.length > 0 && store.state.history.records.length === 0) {
//     store.commit('history/PUSH_ROUTE', to)
//   } else if (!routerTrigger && to.fullPath) {
//     store.commit('history/POP_ROUTE', {
//       path: to.fullPath
//     })
//   }
//   routerTrigger = false
//   console.log('store routes=> ', JSON.parse(JSON.stringify( store.getters['history/routes'])))
//   console.log('store index=> ', JSON.parse(JSON.stringify( store.state['history']['index'])))
//   console.log('store direction=> ', JSON.parse(JSON.stringify( store.state['history']['direction'])))
//   console.log('store records=> ', JSON.parse(JSON.stringify( store.state['history']['records'])))
// })
export default router;
