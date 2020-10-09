// namespace Home {
//   class Header {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Header";
//       document.body.appendChild(elem);
//     }
//   }

//   class Content {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Content";
//       document.body.appendChild(elem);
//     }
//   }

//   class Footer {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Footer";
//       document.body.appendChild(elem);
//     }
//   }

//   export class Page {
//     constructor() {
//       new Header();
//       new Content();
//       new Footer();
//     }
//   }
// }

// 命名空间 改为引用Components中暴露出的类
// namespace Home {
//   export class Page {
//     constructor() {
//       new Components.Header();
//       new Components.Content();
//       new Components.Footer();
//       new Components.SubComponents.Fixed();
//     }
//   }
// }

// 改为ES6 import引入
import { Header, Content, Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}