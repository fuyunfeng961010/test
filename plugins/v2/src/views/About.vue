<template>
  <div class="about">
    <v-button type="warning" @eclick="handlerClick">verify</v-button>
    <div class="dialog">
      <SliderVerify  :isShowSelf.sync="isVerifyShow"></SliderVerify>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      isVerifyShow: false
    }
  },
  mounted() {
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
      this.isVerifyShow = true
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