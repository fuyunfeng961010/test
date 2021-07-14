<template>
  <view>
    
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
    goHome() {
      uni.navigateTo({
        url: 'home'
      });
    }
  }
}
</script>

<style>

</style>
