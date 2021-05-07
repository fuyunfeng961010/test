/**
 * cordova-plugin-inappbrowser
 * 未配置白名单时 window.location.href会使用外部浏览器打开页面  当前插件正常调用
 * 白名单内的域名 当前插件调用也会使用自带的webView打开而非插件webView 但会在后台唤醒时退出打开的webhview 回首页
 * window.location.href 则不会
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
