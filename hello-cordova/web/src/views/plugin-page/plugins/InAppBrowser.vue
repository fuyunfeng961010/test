<template>
  <div class="in-app-browser-container">
    in-app-browser
  </div>
</template>

<script>
import { cell } from 'vant'
const app = {
  name: 'InAppBrowser',
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
.in-app-browser-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .content {
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height);
    overflow: scroll;
    padding: 0 2.5%;

    .in-app-browser {
      margin-top 30PX
    }
  }
}
</style>
