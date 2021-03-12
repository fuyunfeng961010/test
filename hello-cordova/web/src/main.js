import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NavBar from './components/nav-bar/nav-bar.vue'

import UpdateManager from './cordova/UpdateManager'
import AppBrowser from './cordova/AppBrowser'
import ScreenOrientation from './cordova/ScreenOrientation'
import Vconsole from './plugins/vconsole'
import Moment from 'moment'

import 'lib-flexible/flexible.js'
import './assets/style/base.styl'

document.addEventListener('deviceready', () => {
  console.log('deviceready')
  UpdateManager.start()
  ScreenOrientation.unlock()
})

// 后台唤醒
document.addEventListener('resume', () => {
  setTimeout(() => {
    UpdateManager.start()
  }, 1000)
})

document.addEventListener('backbutton', function (ev) {
  console.log('backbutton')
  store.commit('setIsGoBack', true)
  router.go(-1)
}, false)

const app = createApp(App)

app.component('NavBar', NavBar)

app.config.globalProperties.$UpdateManager = UpdateManager
app.config.globalProperties.$AppBrowser = AppBrowser
app.config.globalProperties.$ScreenOrientation = ScreenOrientation
app.config.globalProperties.$Vconsole = Vconsole
app.config.globalProperties.$Moment = Moment

app.use(store).use(router)
app.mount('#app')
