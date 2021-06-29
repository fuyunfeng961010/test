// micro-app-main/src/micro/apps.ts
// 此时我们还没有微应用，所以 apps 为空
const apps = [
  {
    name: "VueMicroApp",
    entry: "//localhost:10200",
    container: "#VueMicroApp",
    activeRule: "/micro-app-vue",
  },
  {
    name: "JqueryMicroApp",
    entry: "//localhost:10201",
    container: "#JqueryMicroApp",
    activeRule: "/micro-app-jquery",
  },
];

export default apps;

// micro-app-main/src/micro/index.ts
// 一个进度条插件
