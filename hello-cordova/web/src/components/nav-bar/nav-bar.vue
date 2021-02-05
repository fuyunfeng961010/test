<template>
  <div class="nav-bar-container layout-flex-between">
    <div class="left" @click="goBack">
      <slot name="left">
        <i class="iconfont iconarrow-left left-arrow"></i>
        <!-- <span class="back">返回</span> -->
      </slot>
    </div>
    <div class="title">
      <slot>
        <span>标题</span>
      </slot>
    </div>
    <div name="right">
      <slot name="right">
        <!-- <span>按钮</span> -->
      </slot>
    </div>
  </div>
</template>

<script>
import { Col, Row, NavBar } from 'vant'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "vuex"
const app = {
  name: 'NavBar',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar
  },
  setup() {
    onMounted(() => {
    })

    const router = useRouter()
    const store = useStore()

    const goBack = () => {
      store.commit('setIsGoBack', true)
      router.go(-1)
    }
    return {
      goBack
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.nav-bar-container
  height $navbar-height
  padding 0 5%
  background #fff
  box-shadow $navbar-shadow-bottom

  .left
    .left-arrow
      font-size 24PX
      vertical-align middle
      display inline-block
      transform translateX(-5PX)

    .back
      vertical-align middle

  .title
    font-size $navbar-title
</style>
