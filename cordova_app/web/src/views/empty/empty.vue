<template>
  <div class="empty-container">
    <div class="header"></div>
    <nav-bar>
      <template  v-slot:default>
        <span class="font-pr">404</span>
      </template >
    </nav-bar>
    <div class="content">
      <van-empty description="建设中" />
    </div>
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
.empty-container
  height: 100%;

  .header
    height $header-height

  .font-pr
    font-family 'Politica-Regular'

  .content
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height)
    overflow scroll
    display: flex;
    justify-content: center;
    align-items: center;

</style>
