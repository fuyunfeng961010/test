// 文件读取
// var fs = require('fs');
// window.onload = function () {
//   var btn = this.document.querySelector('#btn')
//   var mybaby = this.document.querySelector('#mybaby')
//   btn.onclick = function () {
//     fs.readFile('source.txt', (err, data) => {
//       mybaby.innerHTML = data
//     })
//   }
// }

// 鼠标右键事件

// 渲染进程使用 remote 发送主进程事件方法
// const { remote } = require('electron')
// var rigthTemplate = [
//   { label: '粘贴' },
//   { label: '复制' }
// ]
// var m = remote.Menu.buildFromTemplate(rigthTemplate)
// window.addEventListener('contextmenu', function (e) {
//   //阻止当前窗口默认事件
//   e.preventDefault();
//   //把菜单模板添加到右键菜单
//   m.popup({ window: remote.getCurrentWindow() })

// })

// shell 外部浏览器打开链接
var { shell } = require('electron')
window.onload = function () {
  var aHref = document.querySelector('#aHref')
  aHref.onclick = function (e) {
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
  }
}

// 打开子窗口
window.onload = function () {
  var mybtn = document.querySelector('#mybtn')
  mybtn.onclick = function (e) {
    window.open('child_page.html')
  }
}

// 父级窗口接收信息
window.addEventListener('message', (msg) => {
  let mytext = document.querySelector('#mytext')
  mytext.innerHTML = JSON.stringify(msg)
})

/**
 * 打开文件对话框 dialog.showOpenDialog() 它有两个参数，一个是设置基本属性，另一个是回调函数，如果是异步可以使用then来实现
 * title ： String (可选)，对话框的标题
 * defaultPath ： String (可选),默认打开的路径
 * buttonLabel ： String (可选), 确认按钮的自定义标签，当为空时，将使用默认标签
 * filters ： 文件选择过滤器，定义后可以对文件扩展名进行筛选
 * properties：打开文件的属性，比如打开文件还是打开文件夹，甚至是隐藏文件。
 */
const { dialog } = require('electron').remote
window.onload = function () {
  var openBtn = document.getElementById('openBtn');
  openBtn.onclick = function () {
    dialog.showOpenDialog({
      title: '请选择你喜欢的照片',
      defaultPath: 'bg.jpg', // 默认文件路径
      buttonLabel: '打开图片', // 自定义确定按钮
      filters: [ // 可选文件过滤
        { name: 'jpg', extensions: ['jpg'] }
      ]
    }).then(result => {
      console.log(result)
      // 确认选择
      if (!result.canceled) {
        let image = document.getElementById('images')
        image.setAttribute("src", result.filePaths[0]);
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

// 保存对话框
window.onload = function () {
  const fs = require('fs')
  var saveBtn = document.getElementById('saveBtn')
  saveBtn.onclick = function () {
    dialog.showSaveDialog({
      title: '保存文件',
    }).then(result => {
      console.log(result)
      if (!result.canceled) {
        // 保存生成本地文件
        fs.writeFileSync(result.filePath, '技术胖一个前端爱好者')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

/**
 * 消息对话框
 * type ：String类型，可以选，图标样式，有none、info、error、question和warning
 * title: String类型，弹出框的标题
 * messsage : String 类型，必选 message box 的内容，这个是必须要写的
 * buttons: 数组类型，在案例中我会详细的讲解，返回的是一个索引数值（下标）
 */
window.onload = function () {
  var messageBtn = document.getElementById('messageBtn')
  messageBtn.onclick = function () {
    dialog.showMessageBox({
      type: 'warning',
      title: '去不去由你',
      message: '是不是要跟胖哥去红袖招?',
      buttons: ['我要去', '不去了']
    }).then(result => {
      console.log(result)
    })
  }
}

// 网络连接
window.addEventListener('online', function () {
  let internet = document.getElementById('internet')
  internet.innerHTML = 'online'
})

window.addEventListener('offline', function () {
  let internet = document.getElementById('internet')
  internet.innerHTML = 'offline'
})

// 桌面底部通知消息
window.onload = () => {
  var notifyBtn = document.getElementById('notifyBtn');
  var option = {
    title: '小二,来订单了，出来接客了!',
    body: '有大官人刚翻了你的牌子',
  }
  notifyBtn.onclick = function () {
    new window.Notification(option.title, option)
  }
}

// 复制激活码
window.onload = () => {
  const { clipboard } = require('electron')
  const code = document.getElementById('code')
  const btn = document.getElementById('btn')
  btn.onclick = function () {
    clipboard.writeText(code.innerHTML)
    alert('复制成功')
  }
}