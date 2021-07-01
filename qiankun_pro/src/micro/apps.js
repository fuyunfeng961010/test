// function genActiveRule(routerPrefix) {
//   //return location => location.pathname.startsWith(routerPrefix)
//   return location => location.hash.startsWith('#' + routerPrefix)
// }
import router from '@/router'
const apps = [
  {
    name: "VueMicroApp",
    entry: "//localhost:10200",
    // entry: "https://portal.fuyunfeng.top/micro-app-vue/index.html",
    container: "#VueMicroApp",
    activeRule: "/micro-app-qiankun/micro-app-vue",
    // activeRule: genActiveRule('/micro-app-vue'),
    props: {
      mainData: {
        router
      }
    }
  },
  {
    name: "JqueryMicroApp",
    entry: "//localhost:10201",
    // entry: "https://portal.fuyunfeng.top/micro-app-jquery/index.html",
    container: "#JqueryMicroApp",
    activeRule: "/micro-app-qiankun/micro-app-jquery",
    props: {
      mainData: {
        router
      }
    }
  }
];

export default apps;

// micro-app-main/src/micro/index.ts
// 一个进度条插件
