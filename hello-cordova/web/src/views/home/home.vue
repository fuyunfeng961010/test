<template>
  <div class="home-container">
    <div class="top">
      <van-row type="flex" align="center">
        <van-col span="3">
          <img src="./img/brand.svg" class="brand" alt="">
        </van-col>
        <van-col span="3">
          <span class="title">峰格</span>
        </van-col>
      </van-row>
      <p class="color-8F9CA2">使用重剑之前，先用木剑纵横江湖</p>
    </div>
    <div class="swipe" ref="swipeRef">
      <van-swipe :loop="false" :width="swipeItemW" v-if="isShowSwipe">
        <van-swipe-item>
          <img style="width: 100%; height: 100%;" src="./img/swipe.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img style="width: 100%; height: 100%;" src="./img/swipe2.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="grid offset-pr-mt-5">
      <van-grid :column-num="3">
        <van-grid-item v-for="item in gridList" :key="item.text" :icon="item.icon" :text="item.text">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.text}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Col, Row, Grid, GridItem, Swipe, SwipeItem } from 'vant'
import { ref, reactive, onMounted } from 'vue'
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
  computed: {
    swipeWidth() {
      console.log('swipeRef', this.swipeRef)
      return 360
    }
  },
  mounted() {
  },
  setup() {
    const swipeRef = ref(null)
    const swipeItemW = ref(null)
    const isShowSwipe = ref(false)
    const gridList = reactive([
      {
        text: '插件',
        icon: 'iconplugin'
      },
      {
        text: 'blog',
        icon: 'iconblog'
      },
      {
        text: 'blog',
        icon: 'iconblog'
      },
      {
        text: 'blog',
        icon: 'iconblog'
      }
    ])
    onMounted(() => {
      swipeItemW.value = swipeRef.value.clientWidth - swipeRef.value.clientWidth / 100 * 5
      isShowSwipe.value = true
    })
    return {
      gridList,
      swipeRef,
      swipeItemW,
      isShowSwipe
    }
  }

}
export default app
</script>

<style lang="stylus">
.home-container
  height calc(100% - 50PX)
  padding 5%
  background #F7F8FA

  .top
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
</style>
