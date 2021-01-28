/**
 * cordova-plugin-screen-orientation
 */
const init = () => {
  console.log('window.screen', window.screen.orientation)
}

const lock = type => {
  window.screen.orientation.lock(type)
}

const unlock = () => {
  window.screen.orientation.unlock()
}

const getOrientation = () => {
  return window.screen.orientation.type
}

export default {
  init,
  lock,
  unlock,
  getOrientation
}
