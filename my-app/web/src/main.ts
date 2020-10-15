import { createApp } from 'vue'
import { Popup, Cell, CellGroup, Switch, Dialog } from 'vant';
import Vconsole from 'vconsole'

import App from './App.vue'
import router from './router'
import store from './store'

import UpdateManager from './plugins/cordova/UpdateManager'

const checkHotCode = () => {
  setTimeout(() => {
    UpdateManager.start(null)
  }, 1000)
}

// 环境准备就绪
document.addEventListener('deviceready', () => {
  console.log('deviceready');
  checkHotCode()
}, false);

// 唤醒
document.addEventListener('resume', () => {
  console.log('resume');
  checkHotCode()
});

const app = createApp(App);
const vConsole: any = new Vconsole()

// vant
app.use(Popup)
app.use(Cell)
app.use(CellGroup)
app.use(Switch)
app.use(Dialog)

app.use(vConsole)
app.use(store)
app.use(router)

app.mount('#app')

export default app
