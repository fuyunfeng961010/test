import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vplugin from './components/index.js';
Vue.use(vplugin, router);

// console.log('Vue.$routerHistory', Vue.$routerHistory)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
