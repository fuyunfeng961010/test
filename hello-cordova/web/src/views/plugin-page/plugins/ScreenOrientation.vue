<template>
  <div class="screen-orientation-container">
    screen-orientation
  </div>
</template>

<script>
import { cell } from 'vant'
const app = {
  name: 'ScreenOrientation',
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
.screen-orientation-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .content {
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height);
    overflow: scroll;
    padding: 0 2.5%;

    .screen-orientation {
      margin-top 30PX
    }
  }
}
</style>
