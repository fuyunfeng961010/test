<template>
  <div class="me-container">
    <van-empty description="建设中" />
  </div>
</template>

<script>
import { Empty } from 'vant'
const app = {
  name: 'Me',
  components: {
    [Empty.name]: Empty
  },
  mounted() {
  },
  setup() {
    return {
    }
  }

}
export default app
</script>
<style lang="stylus" scoped>
.me-container {
  height: 100%;
}
</style>
