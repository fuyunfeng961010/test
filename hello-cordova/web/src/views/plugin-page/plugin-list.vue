<template>
  <div class="plugin-list-container">
    <div class="header"></div>
    <nav-bar>
      <template  v-slot:default>插件测试</template >
    </nav-bar>
    <div class="content">
      <span @click="goEmpty">plugin list</span>
      <p>在上面的代码块中，写了一个tabbar组件，后来想要添加一个切换的效果，所以就利用tabbar做了一个小实验。
效果描述;
当点击发现的时候，首页组件从右向左移动做出场动画，而发现组件从右向左做入场动画，当点击首页的时候，发现组件从左向右做出场动画，而首页组件从左向右做入场动画，
可以发现它们两个组件的动画是反着来的，它们的初始进入过渡状态和进入过渡后的状态，以及初始离开过渡的状态和离开过渡后的状态都是不一样的
后来就在他们的模板上分别加了transition设置不同的name名</p>
      <div style="margin-top: 2000px">bottom</div>
    </div>
  </div>
</template>

<script>
import { Col, Row, NavBar } from 'vant'
import { onActivated } from 'vue'
import { useRouter } from 'vue-router'
const app = {
  name: 'PluginList',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar
  },
  setup() {
    onActivated(() => {
    })
    const router = useRouter()
    const goEmpty = () => {
      router.push('/empty')
    }
    return {
      goEmpty
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

  .content
    height: 'calc(100%  - %s - %s)' % ($header-height $navbar-height)
    overflow scroll
</style>
