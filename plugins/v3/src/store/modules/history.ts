const formRecord = (vueRoute: any) => {
  return {
    name: vueRoute.name,
    path: vueRoute.fullPath,
    keepAlive: vueRoute.meta && vueRoute.meta.keepAlive,
    componentName: vueRoute.meta && vueRoute.meta.componentName ? vueRoute.meta.componentName : ''
  }
}

export default {
  namespaced: true,
  state: {
    records: [], //历史路由数组
    index: 0, //当前路由索引
    direction: '', //history变化方向, forward/backward
  },
  getters: {
    routes: (state: any) => {
      const { records, index } = state
      if (records.length > 0 && index < records.length) {
        return records.slice(0, index + 1)
      }
      return []
    }
  },
  mutations: {
    //记录 router.push
    PUSH_ROUTE(state: any, vueRoute: any) {
      const record = formRecord(vueRoute)
      let { records } = state
      const { index } = state
      if (index + 1 < records.length) {
        records = records.slice(0, index + 1)
      }
      records.push(record)
      state.records = records
      state.index = records.length - 1
      state.direction = 'forward'
    },
    //记录 router.replace
    REPLACE_ROUTE(state: any, vueRoute: any) {
      const record = formRecord(vueRoute)
      let { records } = state
      const { index } = state
      if (index + 1 < records.length) {
        records = records.slice(0, index + 1)
      }
      records.pop()
      records.push(record)
      state.records = records
      state.index = index
      state.direction = 'forward'
    },
    //记录 router.pop 前进/后退
    //count是跳跃的历史记录数, >0是前进, <0是回退，path是当前的location.href
    POP_ROUTE(state: any, { count, path }: any) {
      let { index, direction } = state
      const { records } = state

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
  }
}