// 命名空间
// namespace Components {
//   export class Header {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Header";
//       document.body.appendChild(elem);
//     }
//   }

//   export class Content {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Content";
//       document.body.appendChild(elem);
//     }
//   }

//   export class Footer {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Footer";
//       document.body.appendChild(elem);
//     }
//   }

//   // 子命名空间
//   export namespace SubComponents {
//     export class Fixed {
//       constructor() {
//         const elem = document.createElement("div");
//         elem.innerText = "This is Fixed";
//         elem.style.position = 'fixed'
//         elem.style.bottom = '0'
//         document.body.appendChild(elem);
//       }
//     }
//   }
// }


// 改为使用import语法
export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}