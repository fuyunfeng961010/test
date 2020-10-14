import { createApp } from 'vue'
import { Popup, Cell, CellGroup, Switch } from 'vant';
import Vconsole from 'vconsole'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
const vConsole: any = new Vconsole()

// vant
app.use(Popup)
app.use(Cell)
app.use(CellGroup)
app.use(Switch)

app.use(vConsole)
app.use(store)
app.use(router)

app.mount('#app')

export default app
