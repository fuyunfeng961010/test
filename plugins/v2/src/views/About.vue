<template>
  <div class="about">
    <div @click="handlerClick">
      verify
    </div>
    <div class="dialog">
      <SliderVerify  :isShowSelf.sync="isVerifyShow" @reload="reload" @show="show" @hide="hide" @success="success" @fail="fail"></SliderVerify>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      isVerifyShow: true
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
  width: 22%;
  // width: 400px;
  text-align: center;
  margin: 0 auto;
  // border 1px solid
}

</style>