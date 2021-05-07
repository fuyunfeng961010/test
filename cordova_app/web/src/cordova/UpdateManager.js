/**
 * cordova-hot-code-push-plugin
 */
import axios from 'axios'
import { Dialog } from 'vant'

/**
 * 获取版本
 */
function getClientVersion() {
  return new Promise(function(resolve, reject) {
    if (!window.chcp) {
      resolve({
        clientRelease: '',
        clientVersion: ''
      })
      return
    }
    axios
      .get('chcp.json')
      .then(response => {
        if (window.device.platform === 'Android') {
          resolve({
            clientRelease: response.data.release.split('-')[0],
            contentUrl: response.data.content_url,
            clientVersion: response.data.android_identifier.split('_')[0]
          })
        }

        if (window.device.platform === 'iOS') {
          resolve({
            clientRelease: response.data.release.split('-')[0],
            contentUrl: response.data.content_url,
            clientVersion: response.data.ios_identifier.split('_')[0]
          })
        }
      })
      .catch(e => {
        reject(e)
      })
  })
}

/**
 * 是否需要更新
 */
function checkUpdate() {
  return new Promise(function(resolve, reject) {
    var info = {
      clientHtmlVersion: '',
      serverHtmlVersion: '',
      clientIosVersion: '',
      serverIosVersion: '',
      clientAndroidVersion: '',
      serverAndroidVersion: ''
    }
    // get client chcp.json
    axios
      .get('chcp.json')
      .then(response => {
        console.log('getClientVersion', response)
        // console.log('getClientVersion:' + JSON.stringify(response.data))

        info.clientHtmlVersion = response.data.release

        info.clientIosVersion = response.data.ios_identifier
        info.clientAndroidVersion = response.data.android_identifier

        // get server chcp.json
        // const l =
        //   'https://online.gds-services.com/dcrm-app/' +
        //   version +
        //   '/html-hot/chcp.json?t=' +
        //   new Date().getTime()
        // console.log('getServerVersion: ' + l)
        const l = `${process.env.VUE_APP_ORIGIN}/cordova_app/html-hot/chcp.json?t=${new Date().getTime()}`
        console.log('l', l)
        return axios.get(l)
      })
      .then(response => {
        console.log('getServerVersion', response)
        // console.log('getServerVersion: ' + JSON.stringify(response.data))
        info.serverHtmlVersion = response.data.release

        info.serverIosVersion = response.data.ios_identifier
        info.serverAndroidVersion = response.data.android_identifier

        info.htmlUpdate = info.serverHtmlVersion > info.clientHtmlVersion

        if (info.clientAndroidVersion && info.serverAndroidVersion) {
          info.androidUpdate =
            info.serverAndroidVersion.split('_')[1] > info.clientAndroidVersion.split('_')[1]
        }

        if (info.serverIosVersion && info.clientIosVersion) {
          info.iosUpdate =
            info.serverIosVersion.split('_')[1] > info.clientIosVersion.split('_')[1]
        }

        info.url = response.data.content_url
        resolve(info)
      })
      .catch(error => {
        console.log('checkUpdate.error = ' + error)
        reject(error)
      })
  })
}

/**
 * 热更新HTML
 * test:开发 dev:测试版 release:正式版
 */
function updateHtml(hotUpdateUrl) {
  console.log('hot-update-url: ' + hotUpdateUrl)
  // 下载更新
  window.chcp.fetchUpdate(
    function(error, data) {
      if (error) {
        console.log('fetchUpdate.error: ' + JSON.stringify(error))
        console.log(data)
      } else {
        // 安装更新
        window.chcp.installUpdate()
      }
    },
    {
      'config-file': hotUpdateUrl + 'chcp.json'
    }
  )
}

/**
 * 更新窗口
 */
function updateByDialog(handler) {
  Dialog.confirm({
    title: '版本更新',
    message: '检查到新版本，是否进行版本更新？',
    confirmButtonText: '立即更新',
    cancelButtonText: '以后再说'
  })
    .then(() => {
      handler()
    })
    .catch(e => {
      console.log(e)
    })
}

/**
 * 启动更新检查
 */
function start(handler) {
  // console.log('window.device', window.device)
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (!window.device || process.env.NODE_ENV === 'development') {
    return
  }
  checkUpdate().then(res => {
    console.log('iosUpdate', res)
    // 有Native更新(外壳)，即使有热更新也不热更新
    if (res.androidUpdate || res.iosUpdate) {
      if (window.device.platform === 'Android' && res.androidUpdate) {
        updateByDialog(() => {
          // 安卓 更新跳转到下载页面
          const dlUrl = `${process.env.VUE_APP_ORIGIN}/cordova_app/download.html`
          window.open(dlUrl, '_system')
        })
        return
      }
      // if (window.device.platform === 'iOS' && res.iosUpdate) {
      //   updateByDialog(() => {
      //     // iOS 更新直接跳转到appStore
      //     // let dlUrl = 'itms-apps://apps.apple.com/cn/app/万国服务-gds-services/id1477029920?l=zh&ls=1'
      //     const dlUrl = 'https://online.gds-services.com/dcrm-app/' + version + '/download.html'
      //     window.open(dlUrl, '_system')
      //   })
      //   return
      // }
      return
    }

    // 有热更新
    if (res.htmlUpdate) {
      updateHtml(res.url)
    }

    // 手动检查版本且没有新版本时提示
    if (handler && !res.androidUpdate && !res.installUpdate && !res.htmlUpdate) {
      handler()
    }
  })
}

export default {
  getClientVersion,
  checkUpdate,
  start
}
