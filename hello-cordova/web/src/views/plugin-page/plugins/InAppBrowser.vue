<template>
  <div class="in-app-browser-container">
    <van-button block type="primary" @click="openWebview(false)">默认</van-button>
    <van-button block type="primary" @click="openWebview(true)" class="offset-px-mt-10">InAppBrowser</van-button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { cell, Button } from 'vant'
const app = {
  name: 'InAppBrowser',
  components: {
    [cell.name]: cell,
    [Button.name]: Button
  },
  setup() {
    const { $AppBrowser } = getCurrentInstance().appContext.config.globalProperties

    const openWebview = (isInAppBrowser = false) => {
      console.log('isInAppBrowser', isInAppBrowser)
      const url = 'https://cordova-mobile.fuyunfeng.top/'
      if (isInAppBrowser) {
        return $AppBrowser.open(url, '_self', 'location=yes')
      }
      window.location.href = url
    }
    return {
      openWebview
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.in-app-browser-container {
  height: 100%;

  .header {
    height: $header-height;
  }
}
</style>
