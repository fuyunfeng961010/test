<template>
  <div class="plugin-list-container">
    plugin page
  </div>
</template>

<script>
import { Col, Row } from 'vant'
import { ref, reactive, onMounted } from 'vue'
const app = {
  name: 'PluginList',
  components: {
    [Col.name]: Col,
    [Row.name]: Row
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

<style lang="stylus">
.plugin-list-container
  height 100%
  padding 5%
</style>
