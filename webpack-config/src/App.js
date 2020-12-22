import React from "react";
import smallImage from "./image/small.jpg";
import bigImage from "./image/big.jpg";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="color">my-webpack-config</div>
        <div className="color font">my-webpack-config</div>
        <img src={smallImage} alt=""></img>
        <img src={bigImage} alt=""></img>
      </div>
    );
  }
}