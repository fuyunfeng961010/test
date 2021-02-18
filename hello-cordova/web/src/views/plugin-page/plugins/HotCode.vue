<template>
  <div class="hot-code-container">
    <van-button :loading="isUpdate" block type="primary" loading-text="检查更新中..." @click="checkUpdate">检查更新</van-button>
    <van-button :loading="isVersion" block type="primary" loading-text="检查版本中..." @click="getVersion" class="offset-px-mt-10">检查版本</van-button>
    <div class="version-info" v-if="versionInfo.clientVersion">
      <van-cell-group>
        <van-cell title="版本" :value="versionInfo.clientVersion" />
        <van-cell title="更新时间" :value="versionInfo.clientRelease" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import { cell, CellGroup, Button, Toast } from 'vant'
const app = {
  name: 'HotCode',
  components: {
    [cell.name]: cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  setup() {
    const { $UpdateManager } = getCurrentInstance().appContext.config.globalProperties

    const isUpdate = ref(false)
    const checkUpdate = () => {
      isUpdate.value = true
      $UpdateManager.start(() => {
        isUpdate.value = false
        Toast({
          message: '暂无更新',
          position: 'bottom'
        })
      })
    }

    const isVersion = ref(false)
    const versionInfo = reactive({
      clientRelease: '',
      contentUrl: '',
      clientVersion: ''
    })
    const getVersion = () => {
      isVersion.value = true
      $UpdateManager.getClientVersion()
        .then(res => {
          console.log('res', res)
          // versionInfo.clientVersion = '1.0'
          // versionInfo.clientRelease = '2021'

          // versionInfo = res
          Object.assign(versionInfo, res)
          isVersion.value = false
        })
    }
    return {
      isUpdate,
      checkUpdate,
      isVersion,
      getVersion,
      versionInfo
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.hot-code-container {
  height: 100%;

  .header {
    height: $header-height;
  }

  .version-info {
    // width 50%
  }
}
</style>
