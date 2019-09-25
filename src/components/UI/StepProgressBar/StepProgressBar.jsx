import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
// import logo from "./assets/button-green.png";

class StepProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isMobile: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let isMobile = window.innerWidth <= 760;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile: isMobile });
    }
  }

  dec = () => {
    let value;
    if (this.state.value === 0) {
      value = 0;
    } else {
      if (this.state.isMobile) {
        value = this.state.value - 50;
      } else {
        value = this.state.value - 100;
      }
    }
    this.setState({
      value: value
    });
  };
  inc = () => {
    let value;
    if (this.state.value === 100) {
      value = 100;
    } else {
      if (this.state.isMobile) {
        value = this.state.value + 50;
      } else {
        value = this.state.value + 100;
      }
    }
    this.setState({
      value: value
    });
  };

  render() {
    if (this.state.isMobile) {
      return (
        <React.Fragment>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "25%",
              left: "40%"
            }}
          >
            <ProgressBar
              percent={this.state.value}
              filledBackground="linear-gradient(to right, #6cc04a, #78b55e)"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="20"
                    src={'/assets/button-green.png'}
                  />
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="20"
                    src={'/assets/button-green.png'}
                  />
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="20"
                    src={'/assets/button-green.png'}
                  />
                )}
              </Step>
            </ProgressBar>
          </div>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30%",
              left: "40%"
            }}
          >
            <button onClick={this.dec}>{"<<"} </button>
          </div>

          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30%",
              left: "60%"
            }}
          >
            <button onClick={this.inc}>{">>"} </button>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "25%",
              left: "40%"
            }}
          >
            <ProgressBar
              percent={this.state.value}
              filledBackground="linear-gradient(to right, #6cc04a, #78b55e)"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="20"
                    src={'/assets/button-green.png'}
                  />
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
                    width="20"
                    src={'/assets/button-green.png'}
                  />
                )}
              </Step>
            </ProgressBar>
          </div>
          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30%",
              left: "40%"
            }}
          >
            <button onClick={this.dec}>{"<<"} </button>
          </div>

          <div
            className="container"
            style={{
              width: "25%",
              position: "absolute",
              top: "30%",
              left: "60%"
            }}
          >
            <button onClick={this.inc}>{">>"} </button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default StepProgressBar;
