import Vue from 'vue'
import App from './App'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
