<template>
  <div class="plugin-component-container">
    <div class="header"></div>
    <nav-bar>
      <template v-slot:default>{{ curTitle }}</template>
    </nav-bar>
    <div class="content">
      <div class="plugin-component">
        <component :is="curName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { cell } from 'vant'
import { ref, onActivated, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
const app = {
  name: 'PluginComponent',
  components: {
    [cell.name]: cell,
    HotCode: defineAsyncComponent(() =>
      import('./plugins/HotCode.vue')
    ),
    InAppBrowser: defineAsyncComponent(() =>
      import('./plugins/InAppBrowser.vue')
    ),
    ScreenOrientation: defineAsyncComponent(() =>
      import('./plugins/ScreenOrientation.vue')
    )
  },
  setup() {
    const route = useRoute()
    const curTitle = ref(null)
    const curName = ref(null)
    onActivated(() => {
      curTitle.value = route.query.title
      curName.value = route.query.name
    })
    return {
      curTitle,
      curName
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.plugin-component-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .content {
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height);
    overflow: scroll;
    padding: 0 2.5%;

    .plugin-component {
      margin-top 30PX
    }
  }
}
</style>
