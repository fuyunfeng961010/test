<template>
  <div>
    <router-view />
    <van-tabbar v-model="activeIndex">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="search" >标签</van-tabbar-item> -->
      <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item> -->
      <van-tabbar-item icon="setting-o">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { getCurrentInstance, ref, watch } from 'vue'
const app = {
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  mounted() {
    const { $UpdateManager } = getCurrentInstance().appContext.config.globalProperties
    setTimeout(() => {
      $UpdateManager.start()
    }, 1000)
  },
  setup() {
    const activeIndex = ref(0)
    watch(activeIndex, (newValue, oldValue) => {
      console.log('newValue', newValue)
    })
    return {
      activeIndex
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
