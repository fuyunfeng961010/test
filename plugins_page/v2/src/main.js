import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import SliderVerify from '@fuyf/slider-verify-v2';
import '@fuyf/slider-verify-v2/lib/vplugin.css'
Vue.use(SliderVerify);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
