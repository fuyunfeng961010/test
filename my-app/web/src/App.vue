<template>
  <div id="nav">
    <van-nav-bar
      title="双色球"
    />
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
export default class Home extends Vue {
  active: number = 0
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50
  // margin-top 60px
  height 100%

#nav 
  height 100%
</style>
