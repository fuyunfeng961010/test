<template>
  <div id="app">
    <div style="margin-bottom: 10px;">
      state=> {{state}}
    </div>
    <button style="margin-bottom: 10px;" @click="setState">主应用 setState('qiankun')</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/micro-app-vue">micro-app-vue</router-link> |
      <router-link to="/micro-app-jquery">micro-app-jquery</router-link>
    </div>
    <router-view v-show="$route.name" />

    <div id="VueMicroApp"></div>
    <div id="JqueryMicroApp"></div>
  </div>
</template>

<script>
import actions from "@/micro/actions";

export default {
  name: 'App',
   data() {
    return {
      state: {}
    }
  },
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("qiankun主应用监听 => state 改变前的state值为 ", prevState);
      console.log("qiankun主应用监听 => state 改变后的state值为 ", state);
      this.state = state
    }, true);
  },
  methods: {
    setState() {
      actions.setGlobalState({ 
        operation: 'qiankun'
       });
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
