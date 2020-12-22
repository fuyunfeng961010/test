// import "./index.css";
// import smallImage from "./image/small.jpg";
// import bigImage from "./image/big.jpg";

// // css 处理
// const colorElement = document.createElement("div");
// colorElement.setAttribute("class", "color");
// colorElement.innerText = "my-webpack-index";
// document.body.appendChild(colorElement);

// // font 处理
// const fontElement = document.createElement("div");
// fontElement.setAttribute("class", "color font");
// fontElement.innerText = "my-webpack-config";
// document.body.appendChild(fontElement);

// // img 处理
// const smallElement = document.createElement("img");
// smallElement.setAttribute("src", smallImage);
// document.body.appendChild(smallElement);

// const bigElement = document.createElement("img");
// bigElement.setAttribute("src", bigImage);
// document.body.appendChild(bigElement);

// const num = 99
// console.log('index.js num', num)


import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App.js";

ReactDom.render(<App />, document.getElementById("root"));