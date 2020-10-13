#! /usr/local/bin/node
var args = require('minimist')(process.argv.slice(2), {
  string: ["version"]
});

// 版本 dev:开发 uat:测试 release:生产
const version = args.version;

const child_process = require('child_process')
const fs = require('fs')

/**
 *  read config.xml
 */
function readConfig() {
  var reg1 = /<widget.*version="([^"]*)"/
  var reg2 = /<widget.*version-time="([^"]*)"/
  var reg3 = /<chcp>\s*<config-file *url="([^"]*)"/
  var content = fs.readFileSync('config.xml', 'utf-8')

  // 版本号
  var group = content.match(reg1)
  var version = group[1]

  // 版本日期
  group = content.match(reg2)
  versionTime = group[1]

  // 热更新地址
  group = content.match(reg3)
  if (group) {
    var url = group[1]
    var pos = url.indexOf('chcp.json')
    var myurl = url.substr(0, pos)
  }
  return { version: version, versionTime: versionTime, url: myurl }
}

/**
 * generate version info
 */
function genver() {
  // read from chcp.json
  var mypath = 'www/chcp.json'
  var info = JSON.parse(fs.readFileSync(mypath))

  function numFormatter(num) {
    return num < 10 ? '0' + num : num
  }

  // 读取版本
  var cfg = readConfig()

  // 设置版本的时间标记
  var date = new Date(cfg.versionTime)
  var timeFlag = date.getFullYear() + '.' + numFormatter(date.getMonth() + 1) + '.' + numFormatter(date.getDate()) + ' ' 
    + numFormatter(date.getHours()) + ':' + numFormatter(date.getMinutes())

  info.ios_identifier += cfg.version + '_' + timeFlag
  info.android_identifier += cfg.version + '_' + timeFlag

  // update content_url
  // if (cfg.url) {
  //   // 开发
  //   if (version == 'dev') {
  //     info.content_url = 'https://pedev.gds-services.com/insp-app/html-hot/'
  //   }

  //   // 测试
  //   if (version == 'uat') {
  //     info.content_url = 'https://petest.gds-services.com/insp-app/html-hot/'
  //   }

  //   // 预生产
  //   if (version == 'stg') {
  //     info.content_url = 'https://pestg.gds-services.com/insp-app/html-hot/'
  //   }

  //   // 生产
  //   if (version == 'prd') {
  //     info.content_url = 'https://online.gds-services.com/insp-app/html-hot/'
  //   }
  //   info.content_url = 'https://portal.fuyunfeng.top/hello-cordovas/html-hot/'
  // }
  info.content_url = 'https://portal.fuyunfeng.top/hello-cordova/html-hot/'
  // write chcp.json
  fs.writeFileSync(mypath, JSON.stringify(info))
  console.log(info)
}

// 1. execute cordova-hcp
// 2. generate app version
child_process.exec('cordova-hcp build', genver)
