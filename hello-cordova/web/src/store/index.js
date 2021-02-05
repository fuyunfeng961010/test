import { createStore } from 'vuex'

export default createStore({
  state: {
    slideFlag: 'slide-in',
    isGoBack: false
  },
  mutations: {
    setSlideFlag(state, data) {
      state.slideFlag = data
    },
    setIsGoBack(state, data) {
      state.isGoBack = data
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getSlideFlag: state => {
      return state.slideFlag
    }
  }
})
