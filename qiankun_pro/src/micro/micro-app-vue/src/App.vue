<template>
  <div id="appChild">
    <div style="margin-bottom: 10px;">
      state=> {{state}}
    </div>
    <button style="margin-bottom: 10px;" @click="setState">vue子应用 setState('micro-app-vue')</button>
    <div id="nav">
      <router-link to="/">Home child</router-link> |
      <router-link to="/about">About child</router-link>
    </div>
    <div>
      <button @click="goMicroJquery">gopath microJquery</button>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      state: {}
    }
  },
  mounted() {
    // console.log('this.$actions', this.$actions)
    this.$actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("vue子应用监听 => state 改变前的state值为 ", prevState);
      console.log("vue子应用监听 => state 改变后的state值为 ", state);
      this.state = state
    }, true);
  },
  methods: {
    setState() {
      this.$actions.setGlobalState({ 
        operation: 'micro-app-vue'
      });
    },
    goMicroJquery() {
      // 主应用router
      // this.$actions.mainData.router.push({
      //   path: '/micro-app-jquery'
      // })

      // history.pushState
      const state = { 'page_id': 1, 'user_id': 5 }
      const title = 'pushState'
      const url = 'micro-app-jquery'
      history.pushState(state, title, url)
    }
  }
}
</script>

<style lang="stylus">
#appChild
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
