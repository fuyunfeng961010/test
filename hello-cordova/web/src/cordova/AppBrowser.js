/**
 * cordova-plugin-inappbrowser
 * 白名单内的域名 用cordova webview打开 会导致后台唤醒时退出打开的webhview
 * window.location.href 则不会  需白名单内配置
 */
const init = () => {
  console.log('cordova.InAppBrowser', cordova.InAppBrowser)
}

const open = (...arg) => {
  cordova.InAppBrowser.open(...arg)
}

export default {
  init,
  open
}
