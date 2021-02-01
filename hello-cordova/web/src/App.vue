<template>
  <div class="app-container">
    <router-view />
    <van-tabbar v-model="activeIndex" @change="activeChg">
      <van-tabbar-item>
        <span>首页</span>
        <template #icon>
          <i class="iconfont iconshouye"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span>blog</span>
        <template #icon>
          <i class="iconfont iconblog"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span>landlord</span>
        <template #icon>
          <i class="iconfont icondoudizhu"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span>我的</span>
        <template #icon>
          <i class="iconfont iconwode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
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
    console.log('device', window.device)
  },
  setup() {
    const { $AppBrowser, $ScreenOrientation } = getCurrentInstance().appContext.config.globalProperties
    const router = useRouter()
    const activeIndex = ref(0)
    const navDict = [
      {
        path: '/',
        type: 'router'
      },
      {
        path: 'https://portal.fuyunfeng.top/',
        type: 'webview'
      },
      {
        path: 'https://landlord.fuyunfeng.top/',
        type: 'webview'
      },
      {
        path: '/empty',
        type: 'router'
      }
    ]
    const activeChg = index => {
      console.log('index', index)
      const navItem = navDict[index]
      if (!navItem) return
      if (navItem.type === 'router') {
        return router.push(navItem.path)
      }

      if (navItem.type === 'webview') {
        if (navItem.path.indexOf('landlord') !== -1) {
          $ScreenOrientation.lock('landscape-primary')
        }
        window.location.href = navItem.path
        return
      }

      if (navItem.type === 'external') {
        return $AppBrowser.open(navItem.path, '_self', 'location=yes')
      }
    }

    return {
      activeIndex,
      activeChg
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
  color: #2c3e50;
  height: 100%;

  .app-container {
    height: 100%;
  }
}
</style>
