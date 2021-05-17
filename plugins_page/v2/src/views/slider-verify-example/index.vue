<template>
  <div class="slider-verify-example">
    <div class="left-config"></div>
    <div class="right-show-off">
      <SliderVerify :isShowSelf.sync="isVerifyShow"></SliderVerify>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderVerifyExample',
  data() {
    return {
      isVerifyShow: true
    }
  }
}
</script>

<style scoped lang="stylus">
  .slider-verify-example {
    
  }
</style>