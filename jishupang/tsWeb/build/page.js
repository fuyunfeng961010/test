// 命名空间
// namespace Components {
//   export class Header {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Header";
//       document.body.appendChild(elem);
//     }
//   }
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
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
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// namespace Home {
//   class Header {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Header";
//       document.body.appendChild(elem);
//     }
//   }
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
