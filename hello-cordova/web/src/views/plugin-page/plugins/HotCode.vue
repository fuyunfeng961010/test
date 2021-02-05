<template>
  <div class="hot-code-container">
    hot-code
  </div>
</template>

<script>
import { cell } from 'vant'
const app = {
  name: 'HotCode',
  components: {
    [cell.name]: cell
  },
  setup() {
    return {
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.hot-code-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .content {
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height);
    overflow: scroll;
    padding: 0 2.5%;

    .hot-code {
      margin-top 30PX
    }
  }
}
</style>
