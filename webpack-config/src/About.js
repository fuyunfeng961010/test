import React from "react";
import bigImage from "./image/big.jpg";
export default class About extends React.Component {
  render() {
    const goHome = () => {
      console.log('click')
      this.props.history.push('/')
    }
    return (
      <div>
        <div className="color">About Page</div>
        <div className="color font" onClick={goHome}>go to Home</div>
        <img src={bigImage} alt=""></img>
      </div>
    );
  }
}