<template>
  <div class="plugin-list-container">
    <div class="header"></div>
    <nav-bar>
      <!-- <template  v-slot:left>le</template > -->
      <!-- <template  v-slot:right>right</template > -->
      <template  v-slot:default>插件测试</template >
    </nav-bar>
    plugin page
  </div>
</template>

<script>
import { Col, Row, NavBar } from 'vant'
import { onMounted } from 'vue'
const app = {
  name: 'PluginList',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar
  },
  setup() {
    onMounted(() => {
    })
    return {
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.plugin-list-container
  height 100%

  .header
    height $header-height
</style>
