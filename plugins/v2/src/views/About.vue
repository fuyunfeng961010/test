<template>
  <div class="about">
    <div class="opreation">
      <span @click="imgUrl = 'https://portal.fuyunfeng.top/files/images/SliderVerify-31.jpg'">imgUrl</span>
      <span @click="isShowSelf = !isShowSelf">isShowSelf</span>
      <span @click="width = 400">width 400</span>
      <span @click="height = 200">height 220</span>
      <span @click="isBorder = !isBorder">isBorder 取反</span>
      <span @click="isParentNode = !isParentNode">isParentNode 取反</span>
      <span @click="isCloseBtn = !isCloseBtn">isCloseBtn 取反</span>
      <span @click="isReloadBtn = !isReloadBtn">isReloadBtn 取反</span>
    </div>
    <div class="dialog">
      <SliderVerify
        :isShowSelf.sync="isShowSelf"
        :width="width"
        :height="height"
        :isBorder="isBorder"
        :imgUrl="imgUrl"
        :isCloseBtn="isCloseBtn"
        :isReloadBtn="isReloadBtn"
        :isParentNode="isParentNode"
        @reload="reload"
        @show="show"
        @hide="hide"
        @success="success"
        @fail="fail"
      ></SliderVerify>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      isShowSelf: true,
      width: 300,
      height: 180,
      isBorder: true,
      imgUrl: '',
      isCloseBtn: true,
      isReloadBtn: true,
      isParentNode: false
    }
  },
  mounted() {
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
      this.isVerifyShow = true
    },
    reload() {
      console.log('SliderVerify => reload')
    },
    show() {
      console.log('SliderVerify => show')
    },
    hide() {
      console.log('SliderVerify => hide')
    },
    success() {
      console.log('SliderVerify => success')
    },
    fail() {
      console.log('SliderVerify => fail')
    }
  }
}
</script>
<style scoped lang="stylus">
.dialog {
  width: 35%;
  // width: 400px;
  text-align: center;
  margin: 0 auto;
  // border 1px solid
}

.opreation {
  display: flex;

  span {
    margin-left: 20px;
  }
}
</style>