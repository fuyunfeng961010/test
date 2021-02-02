<template>
  <div class="main-container">
    <router-view />
    <van-tabbar active-color="red" inactive-color="#737373" v-model="activeIndex" @change="activeChg">
      <van-tabbar-item>
        <span class="tabbar-text">首页</span>
        <template #icon>
          <i class="iconfont iconshouye tabbar-icon"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span class="tabbar-text">blog</span>
        <template #icon>
          <i class="iconfont iconblog tabbar-icon"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span class="tabbar-text">landlord</span>
        <template #icon>
          <i class="iconfont icondoudizhu tabbar-icon"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span class="tabbar-text">我的</span>
        <template #icon>
          <i class="iconfont iconwode tabbar-icon"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { getCurrentInstance, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const app = {
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    onMounted(() => {
      const { $UpdateManager } = getCurrentInstance().appContext.config.globalProperties
      setTimeout(() => {
        $UpdateManager.start()
      }, 1000)
      console.log('device', window.device)
    })

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
        path: '/me',
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
<style lang="stylus" scoped>
 .main-container
  height: 100%;

  .tabbar-text
    font-size 14PX

  .tabbar-icon
    font-size 20PX

</style>
