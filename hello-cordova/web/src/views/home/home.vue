<template>
  <div class="home-container">
    <div class="header"></div>
    <div class="top-brand">
      <van-row type="flex" align="center">
        <van-col span="3">
          <img src="./img/brand.svg" class="brand" alt="">
        </van-col>
        <van-col span="3">
          <span class="title" @click="addNum">峰格</span>
        </van-col>
      </van-row>
      <p class="color-8F9CA2">使用重剑之前，先用木剑纵横江湖</p>
    </div>
    <div class="swipe" ref="swipeRef">
      <van-swipe :loop="false" :width="swipeItemW" v-if="isShowSwipe">
        <van-swipe-item>
          <img style="width: 100%; height: 100%;" src="./img/hexo.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img style="width: 100%; height: 100%;" src="./img/landlord.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="grid offset-pr-mt-5">
      <van-grid :column-num="4" :border="false" :square="true">
        <van-grid-item v-for="item in gridList" :key="item.text" :icon="item.icon" :text="item.text" :clickable="true" @click="goItemPath(item)">
          <i class="iconfont grid-icon " :class="item.icon"></i>
          <span class="grid-text">{{item.text}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Col, Row, Grid, GridItem, Swipe, SwipeItem } from 'vant'
import { ref, reactive, onActivated, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const app = {
  name: 'Home',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const { $AppBrowser, $ScreenOrientation } = getCurrentInstance().appContext.config.globalProperties
    const router = useRouter()

    const swipeRef = ref(null)
    const swipeItemW = ref(null)
    const isShowSwipe = ref(false)

    onActivated(() => {
      swipeItemW.value = swipeRef.value.clientWidth - swipeRef.value.clientWidth / 100 * 5
      isShowSwipe.value = true
    })

    const gridList = reactive([
      {
        text: '插件',
        icon: 'iconplugin',
        path: '/plugin-list',
        type: 'router'
      },
      {
        text: '博客',
        icon: 'iconblog1',
        path: 'https://portal.fuyunfeng.top/',
        type: 'webview'
      },
      {
        text: '游戏',
        icon: 'iconyouxiyouxitingyouxijiyouxishoubingxianxing',
        path: 'https://landlord.fuyunfeng.top/',
        type: 'webview'
      },
      {
        text: 'blog',
        icon: 'iconyouxiyouxitingyouxijiyouxishoubingxianxing',
        path: '/empty',
        type: 'router'
      },
      {
        text: 'blog',
        icon: 'iconyouxiyouxitingyouxijiyouxishoubingxianxing',
        path: '/empty',
        type: 'router'
      }
    ])

    const goItemPath = (gridItem) => {
      console.log('gridItem', gridItem.type)
      if (gridItem.type === 'router') {
        return router.push(gridItem.path)
      }

      if (gridItem.type === 'webview') {
        if (gridItem.path.indexOf('landlord') !== -1) {
          $ScreenOrientation.lock('landscape-primary')
        }
        window.location.href = gridItem.path
        return
      }

      if (gridItem.type === 'external') {
        return $AppBrowser.open(gridItem.path, '_self', 'location=yes')
      }
    }

    const num = ref(0)
    const addNum = () => {
      num.value++
    }
    return {
      gridList,
      swipeRef,
      swipeItemW,
      isShowSwipe,
      goItemPath,
      num,
      addNum
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.home-container
  height calc(100% - 50PX)
  padding 0 2.5%

  .header
    height $header-height

  .top-brand
    .brand
      width 30PX
      height 30PX

    .title
      font-size 16PX

  .swipe
    height 30%

    .van-swipe, .van-swipe__track
      height 100%

    .van-swipe-item
      color: #fff;
      height: 100%;
      display flex;
      align-items center
      justify-content center

  .grid
    height 30%

    .van-grid
      height 100%

    .grid-icon
      font-size 25PX
      color red

    .grid-text
      margin-top 5PX
</style>
