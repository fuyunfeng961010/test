<template>
  <view class="vant-container">
    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="设为默认联系人"
      @save="onSave"
      @delete="onDelete"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      editingContact: {},
    }
  },
  onLoad(query) {
    this.errMsg = query.errMsg || ''
  },
  methods: {
    onSave(contactInfo) {
      this.$toast('保存');
    },
    onDelete(contactInfo) {
      this.$toast('删除');
    },
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

.vant-container {
  .mt-15 {
    margin-top: 18px;
  }
}

</style>
