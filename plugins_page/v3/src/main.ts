import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import SliderVerify from 'slider-verify-v3';
import 'slider-verify-v3/lib/SliderVerify.css';

createApp(App).use(ElementPlus).use(SliderVerify).use(store).use(router).mount('#app');
