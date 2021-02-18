<template>
  <div class="screen-orientation-container">
    <van-button block type="primary" @click="setScreen('landscape-primary')"
      >横向</van-button
    >
    <van-button
      block
      type="primary"
      @click="setScreen('portrait-primary')"
      class="offset-px-mt-10"
      >纵向</van-button
    >
    <van-button block type="primary" @click="unScreen" class="offset-px-mt-10"
      >解锁</van-button
    >
    <van-button block type="primary" @click="getScreen" class="offset-px-mt-10"
      >当前</van-button
    >
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { cell, Button, Toast } from 'vant'
const app = {
  name: 'ScreenOrientation',
  components: {
    [cell.name]: cell,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  setup() {
    const { $ScreenOrientation } = getCurrentInstance().appContext.config.globalProperties
    const setScreen = (type) => {
      $ScreenOrientation.lock(type)
    }

    const unScreen = () => {
      $ScreenOrientation.unlock()
    }

    const getScreen = () => {
      Toast({
        message: $ScreenOrientation.getOrientation(),
        position: 'bottom'
      })
    }
    return {
      setScreen,
      unScreen,
      getScreen
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.screen-orientation-container {
  height: 100%;

  .header {
    height: $header-height;
  }
}
</style>
