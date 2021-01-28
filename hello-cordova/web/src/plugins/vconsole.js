import { createApp } from 'vue'
import Vconsole from 'vconsole'
let timeOutEvent = null
const touchStart = () => {
  timeOutEvent = setTimeout(function () {
    longPress()
  }, 3000)
}

const touchMove = () => {
  console.log('stop')
  clearTimeout(timeOutEvent)
  timeOutEvent = 0
}

const touchEnd = () => {
  console.log('stop')
  clearTimeout(timeOutEvent)
}

const longPress = () => {
  clearTimeout(timeOutEvent) // 清除定时器
  timeOutEvent = 0
  // 执行长按要执行的内容
  vConsoleLog()
}

const vConsoleLog = () => {
  createApp().use(new Vconsole())
}

vConsoleLog()

export default {
  touchStart,
  touchMove,
  touchEnd
}
