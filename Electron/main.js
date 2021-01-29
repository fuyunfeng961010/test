// https://jspang.com/detailed?id=62#toc337

// 引入electron模块 创建electron引用 创建窗口引用
var { app, BrowserWindow, BrowserView, globalShortcut } = require('electron')

var mainWindow = null;  //声明要打开的主窗口
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: { nodeIntegration: true, enableRemoteModule: true }
  })  // 设置打开的窗口大小
  require('./main/menu.js')
  mainWindow.loadFile('index.html')  //加载那个页面
  mainWindow.openDevTools(); // 打开开发工具

  // 全局注册快捷键
  globalShortcut.register('ctrl+e', () => {
    // mainWindow.loadURL('https://jspang.com')
    win = new BrowserWindow({
      width: 600,
      height: 500,
      webPreferences: { nodeIntegration: true, enableRemoteModule: true }
    })
    win.loadURL('https://jspang.com')
    win.on('closed', () => {
      win = null
    })
  })

  console.log('process.versions', process.versions)
  //监听关闭事件，把主窗口设置为null
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // BrowserView 嵌入网页
  // var view = new BrowserView()   //new出对象
  // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
  // view.setBounds({ x: 0, y: 20, width: 1200, height: 800 })  //定义view的具体样式和位置
  // view.webContents.loadURL('https://portal.fuyunfeng.top')  //wiew载入的页面
})

app.on('will-quit',function(){
  //注销全局快捷键的监听
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()

})
