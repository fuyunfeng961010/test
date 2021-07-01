
## 主应用子路由对应

> 主应用 apps.js中定义子路由规则 

```javascript
{
  name: "VueMicroApp",
  entry: "https://portal.fuyunfeng.top/micro-app-vue/index.html",
  container: "#VueMicroApp",
  activeRule: "/micro-app-qiankun/micro-app-vue",
}
```
- name       与子应用webpack output导出library包名一致
- entry      对应子路由地址入口 本地http://localhost  线上部署为nginx静态资源路由
- container  子路由对应被挂载 位置节点 需在主应用页面中定义domId
- activeRule 子路由匹配规则 需与子应用router base中定义一致 特别是主应用部署在二级路由时 主应用切换微应用路由省略path前缀目录
