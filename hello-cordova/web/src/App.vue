<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'
const app = {
  name: 'App',
  components: {
  },
  setup() {
    onMounted(() => {
      const { $UpdateManager } = getCurrentInstance().appContext.config.globalProperties
      setTimeout(() => {
        $UpdateManager.start()
      }, 1000)
      console.log('App onMounted', window.device)
    })

    return {
    }
  }

}
export default app
</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  .app-container {
    height: 100%;
  }
}
</style>
