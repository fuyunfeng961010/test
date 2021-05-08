import { App } from 'vue'

import toast from './Toast/index';
import Button from './Button/index.vue';

const install = function (app: App): void {
  app.provide('$toast', toast)

  app.component(Button.name, Button)
}

// 默认导出 install
export default {
  install,
};