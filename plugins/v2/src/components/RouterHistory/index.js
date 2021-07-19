/**
 * 路由触发由程序api触发 还是导航栏前进后退触发
 */
let routerTrigger = false

/**
 * 扩展传入的router 
 * 维护自定义得 路由栈 逻辑
 * @param {router} router 
 */
const routerExpandRewrite = function (router) {
  const { push, replace, go } = router
  router.push = function (location, onComplete, onAbort) {
    routerTrigger = true
    PUSH_ROUTE(router.resolve(location).resolved)
    push.call(this, location, onComplete, onAbort)
  }
  router.replace = function (location, onComplete, onAbort) {
    routerTrigger = true
    REPLACE_ROUTE(router.resolve(location).resolved)
    replace.call(this, location, onComplete, onAbort)
  }
  router.go = function (delta) {
    if (delta !== 0) {
      routerTrigger = true
      POP_ROUTE({ count: delta })
      go.call(this, delta)
    } else {
      window.location.reload()
    }
  }
  routerAfterEach(router)
}

/**
 * 路由变化 路由栈的维护
 * 主要针对导航的前进返回处理
 * @param {router} router 
 */
const routerAfterEach = (router) => {
  router.afterEach((to, from) => {
    if (to.matched.length > 0 && state.records.length === 0) {
      PUSH_ROUTE(to)
    } else if (!routerTrigger && to.fullPath) {
      POP_ROUTE({ path: to.fullPath })
    }
    routerTrigger = false

    // console.log('store routes=> ', JSON.parse(JSON.stringify(getters.routes())))
    // console.log('store index=> ', JSON.parse(JSON.stringify( state.index)))
    // console.log('store direction=> ', JSON.parse(JSON.stringify( state.direction)))
    // console.log('store records=> ', JSON.parse(JSON.stringify(state.records)))
  })
}

const state = {
  records: [], // 历史路由数组
  index: 0, // 当前路由索引
  direction: '', // history变化方向, forward/backward
}

const getters = {   
  routes: () => {
    const { records, index } = state
    if (records.length > 0 && index < records.length) {
      return records.slice(0, index + 1)
    } 
    return []
  }
}

const formRecord = (vueRoute) => {
  return {
    name: vueRoute.name,
    path: vueRoute.fullPath,
    keepAlive: vueRoute.meta && vueRoute.meta.keepAlive,
    componentName: vueRoute.meta && vueRoute.meta.componentName ? vueRoute.meta.componentName : ''
  }
}

const PUSH_ROUTE = function (vueRoute) {
  const record = formRecord(vueRoute)
  let { records, index } = state
  if (index + 1 < records.length) {
    records = records.slice(0, index + 1)
  }
  records.push(record)
  state.records = records
  state.index = records.length - 1
  state.direction = 'forward'
}

// 记录 router.replace
const REPLACE_ROUTE = function (vueRoute) {
  const record = formRecord(vueRoute)
  let { records, index } = state
  if (index + 1 < records.length) {
    records = records.slice(0, index + 1)
  }
  records.pop()
  records.push(record)
  state.records = records
  state.index = index
  state.direction = 'forward'
}

// 记录 router.pop 前进 / 后退
// count是跳跃的历史记录数, >0是前进, <0是回退，path是当前的location.href
const POP_ROUTE = function ({ count, path }) {
  let { records, index, direction } = state

  if (count) {
    direction = count > 0 ? 'forward' : 'backward'
    index += count
    index = Math.min(records.length, index)
    index = Math.max(0, index)
  } else {
    if (index > 0 && records[index - 1].path === path) {
      // 后退
      direction = 'backward'
      index -= 1
    } else if (index < records.length - 1 && records[index + 1].path === path) {
      // 前进
      direction = 'forward'
      index += 1
    }
  }

  state.records = records
  state.index = index
  state.direction = direction
}

export default {
  routerExpandRewrite,
  getters
}