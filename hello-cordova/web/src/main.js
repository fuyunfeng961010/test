import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UpdateManager from './cordova/UpdateManager'
import Vconsole from './plugins/vconsole';

document.addEventListener('deviceready', () => {
  console.log('deviceready')
})

document.addEventListener('resume', () => {
  setTimeout(() => {
    UpdateManager.start();
  }, 1000);
});

const app = createApp(App)
app.config.globalProperties.$UpdateManager = UpdateManager
app.config.globalProperties.$Vconsole = Vconsole

app.use(store).use(router)
app.mount('#app')
