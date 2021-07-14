<template>
  <view class="home-container">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid class="mt-15">
      <van-grid-item
        icon="photo-o"
        text="goDetail"
        @click="goDetail"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
      <van-grid-item
        icon="photo-o"
        text="文字"
      />
    </van-grid>

    <!-- <div id="hello">hello</div> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  onLoad(query) {
    this.errMsg = query.errMsg || ''
  },
  methods: {
    goDetail() {
      // console.log(document.getElementById('hello'))
      uni.navigateTo({
        url: '/pages/news/index'
      });
    }
  }
}
</script>

<style scoped lang="stylus">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.home-container {
  .mt-15 {
    margin-top: 18px;
  }
}

</style>
