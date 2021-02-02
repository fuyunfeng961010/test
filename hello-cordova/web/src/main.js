import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NavBar from './components/nav-bar/nav-bar.vue'

import UpdateManager from './cordova/UpdateManager'
import AppBrowser from './cordova/AppBrowser'
import ScreenOrientation from './cordova/ScreenOrientation'
import Vconsole from './plugins/vconsole'

import 'lib-flexible/flexible.js'
import './assets/style/base.styl'

document.addEventListener('deviceready', () => {
  console.log('deviceready')
  UpdateManager.start()
  ScreenOrientation.unlock()
})

document.addEventListener('resume', () => {
  setTimeout(() => {
    UpdateManager.start()
  }, 1000)
})

const app = createApp(App)

app.component('NavBar', NavBar)

app.config.globalProperties.$UpdateManager = UpdateManager
app.config.globalProperties.$AppBrowser = AppBrowser
app.config.globalProperties.$ScreenOrientation = ScreenOrientation
app.config.globalProperties.$Vconsole = Vconsole

app.use(store).use(router)
app.mount('#app')
