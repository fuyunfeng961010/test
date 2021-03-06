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
import { Router, Route, HashRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import "./index.css";
import App from "./App.js";
import About from "./About.js";

const history = createBrowserHistory()
ReactDom.render(
  <Router history={history}>
    <HashRouter>
      <div className='h100'>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/about" component={About} />
        <Route path="/ProductDetail" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/hall" component={Hall} />
        <Route path="/room/:id" component={Room} /> */}
      </div>
    </HashRouter>
  </Router>, document.getElementById("root"));