import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
// import Shadow from "../UI/Shadow/Shadow";
// import Products from "./Products/Products";
import StepProgressBar from "../UI/StepProgressBar/StepProgressBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  dec = () => {
    let value;
    if (this.state.step - 1 <= 0) {
      value = 0;
    } else {
      value = this.state.step - 1;
    }
    this.setState({
      step: value,
    });
    console.log(value);
  };
  inc = () => {
    let value;
    if (this.state.step + 1 >= 2) {
      value = 2;
    } else {
      value = this.state.step + 1;
    }
    console.log(value);
    this.setState({
      step: value
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div
          className="container"
          style={{
            width: "35%",
            position: "absolute",
            top: "35%",
            left: "10%"
          }}
        >
          <StepProgressBar step={this.state.step}/>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30px",
              left: "10%"
            }}
          >
            <button onClick={this.dec}>{"<<"} </button>
          </div>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30px",
              left: "60%"
            }}
          >
            <button onClick={this.inc}>{">>"} </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
