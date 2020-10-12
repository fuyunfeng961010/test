<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/nifty.min.css'
import '@/assets/css/theme-dark.min.css'

// import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/plugins/element-ui-theme/index.css'

//当前组件下引用适用全局的样式表，其他组件按需引用
import '@/assets/css/base.css'
import '@/assets/plugins/pace/pace.min.css'
import '@/assets/css/themify-icons.min.css'

// import '@/assets/plugins/pace/pace.min.js'

export default {

}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
