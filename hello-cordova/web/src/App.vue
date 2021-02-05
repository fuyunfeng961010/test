<template>
  <div id="app" class="app-container">
    <router-view v-slot="{ Component }">
        <transition :name="slideName" mode="out-in">
          <component :is="Component" class="router-view" />
        </transition>
    </router-view>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
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

    const store = useStore()

    return {
      slideName: computed(() => store.getters.getSlideFlag)
    }
  }

}
export default app
</script>
<style lang="stylus">
#app {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .app-container {
    height: 100%;
  }
}

.slide-out-enter-active, .slide-out-leave-active, .slide-in-enter-active, .slide-in-leave-active {
  will-change: transform;
  transition: transform 300ms;
  height: 100%;
  top: 0;
  position: absolute;
}

.slide-out-enter, .slide-in-leave-active {
  transform: translate(-100%);
}

.slide-out-leave-active, .slide-in-enter {
  transform: translate(100%);
}

.router-view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
