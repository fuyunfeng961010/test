<template>
  <div class="plugin-list-container">
    <div class="header"></div>
    <nav-bar>
      <template v-slot:default>插件</template>
    </nav-bar>
    <div class="content">
      <div class="plugin-list">
        <van-cell is-link center v-for="item in pluginList" :key="item.name" :title="item.title" :label="item.label" @click="goPluginDetail(item)" />
      </div>
    </div>
  </div>
</template>

<script>
import { cell } from 'vant'
import { onActivated } from 'vue'
import { useRouter } from 'vue-router'
const app = {
  name: 'PluginList',
  components: {
    [cell.name]: cell
  },
  setup() {
    onActivated(() => {
    })
    const router = useRouter()

    const pluginList = [
      {
        title: '热更',
        label: 'cordova-hot-code-push-plugin',
        name: 'HotCode'
      },
      {
        title: 'webView',
        label: 'cordova-plugin-inappbrowser',
        name: 'InAppBrowser'
      },
      {
        title: '屏幕方向锁定',
        label: 'cordova-plugin-screen-orientation',
        name: 'ScreenOrientation'
      }
    ]
    const goPluginDetail = item => {
      const { title, name } = item
      router.push({
        path: '/plugin-component',
        query: {
          title,
          name
        }
      })
    }
    return {
      pluginList,
      goPluginDetail
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.plugin-list-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .content {
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height);
    overflow: scroll;
    padding: 0 2.5%;

    .plugin-list {
      margin-top 30PX
    }
  }
}
</style>
