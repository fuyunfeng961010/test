<template>
  <div class="empty-container">
    <van-empty description="建设中" />
  </div>
</template>

<script>
import { Empty } from 'vant'
const app = {
  name: 'Empty',
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
<style lang="stylus">
.empty-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
