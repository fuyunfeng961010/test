# qiankun

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 主应用子路由对应

apps.js中定义子路由规则 

`javascript
{
  name: "VueMicroApp",
  entry: "https://portal.fuyunfeng.top/micro-app-vue/index.html",
  container: "#VueMicroApp",
  activeRule: "/micro-app-qiankun/micro-app-vue",
}
`
name       与子应用webpack output导出library包名一致
entry      对应子路由地址入口 本地http://localhost 部署为nginx静态资源路由
container  子路由对应被挂载位置节点
activeRule 子路由匹配规则 需与子应用router base中定义一致 特别是主应用部署在二级路由时 否则子应用无法正确加载