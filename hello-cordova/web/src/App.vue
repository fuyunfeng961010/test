<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <!-- <van-tabbar-item icon="search" >标签</van-tabbar-item> -->
    <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item> -->
    <van-tabbar-item icon="setting-o" to="/about">关于</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue'
const app = {
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const active = ref(0)
    return {
      active
    }
  }
  
}
export default app
</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
