<template>
  <div id="appContainer" class="app-container">
    <router-view v-slot="{ Component }">
      <transition :name="slideName">
        <keep-alive>
          <component :is="Component" class="router-view" />
        </keep-alive>
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
#appContainer {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  .app-container {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}

// .slide-out-enter-active, .slide-out-leave-active, .slide-in-enter-active, .slide-in-leave-active {
//   will-change: transform;
//   transition: transform 300ms;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   backface-visibility: hidden;
//   perspective: 1000;
// }

// .slide-out-enter, .slide-in-leave-active {
//   transform: translate(-100%);
// }

// .slide-out-leave-active, .slide-in-enter {
//   transform: translate(100%);
// }

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

.slide-in-enter-active {
  animation: bounce-out 0.2s;
}

.slide-in-leave-active {
  animation: bounce-in 0.2s;
}

.slide-out-enter-active {
  animation: bounce-in-2 0.2s;
}

.slide-out-leave-active {
  animation: bounce-out-2 0.2s;
}

@keyframes bounce-in {
  0% {
    transform: translate3d(0px, 0, 0);
  }

  25% {
    transform: translate3d(-25%, 0, 0);
  }

  50% {
    transform: translate3d(-50%, 0, 0);
  }

  75% {
    transform: translate3d(-75%, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes bounce-out {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  25% {
    transform: translate3d(75%, 0, 0);
  }

  50% {
    transform: translate3d(50%, 0, 0);
  }

  75% {
    transform: translate3d(25%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounce-in-2 {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  25% {
    transform: translate3d(-75%, 0, 0);
  }

  50% {
    transform: translate3d(-50%, 0, 0);
  }

  75% {
    transform: translate3d(-25%, 0, 0);
  }

  100% {
    transform: translate3d(0px, 0, 0);
  }
}

@keyframes bounce-out-2 {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(25%, 0, 0);
  }

  50% {
    transform: translate3d(50%, 0, 0);
  }

  75% {
    transform: translate3d(75%, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
