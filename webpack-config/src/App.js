import React from "react";
import smallImage from "./image/small.jpg";
class App extends React.Component {
  render() {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    const goAbout = () => {
      console.log('click')
      this.props.history.push('/About')
    }
    return (
      <div>
        <div className="color">my-webpack-config</div>
        <div className="color font" onClick={goAbout}>go to About</div>
        <img src={smallImage} alt=""></img>
      </div>
    );
  }
}

export default App