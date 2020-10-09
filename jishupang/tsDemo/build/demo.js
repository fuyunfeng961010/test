"use strict";
// // 静态数字类型
// const num:Number = 30
function isSelect(type) {
    if (type.anjiao) {
        type.skill();
    }
    else {
        type.say();
    }
}
isSelect({ anjiao: true, skill: function () { return ({}); } });
//# sourceMappingURL=demo.js.map