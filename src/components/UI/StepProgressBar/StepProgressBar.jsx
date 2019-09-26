import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
// import logo from "/assets/button-green.png";

class StepProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 1,
      step: props.step,
      isMobile: false
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.step !== nextProps.step) {
      let step;
      step = (100 / prevState.maxStep) * nextProps.step;
      if (step >= 100) {
        step = 100;
      }
      return {
        maxStep: prevState.maxStep,
        step: step,
        isMobile: prevState.isMobile
      };
    }
    return null;
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let isMobile = window.innerWidth <= 760;
    let maxStep;
    let step;
    isMobile ? (maxStep = 2) : (maxStep = 1);
    step = (100 / maxStep) * this.state.step;
    if (step >= 100) {
      step = 100;
    }
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile: isMobile, maxStep: maxStep, step: step });
    }
    this.setState({ isMobile: isMobile, maxStep: maxStep, step: step });
  }

  render() {
    const steps = [];
    for (var i = 0; i < this.state.maxStep + 1; i++) {
      steps.push(
        <Step transition="scale" key={i}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 90}%)` }}
              width="20"
              src="/assets/button-green.png"
              alt="step"
            />
          )}
        </Step>
      );
    }
    return (
      <React.Fragment>
        <ProgressBar
          percent={this.state.step}
          filledBackground="linear-gradient(to right, #6cc04a, #78b55e)"
        >
          {steps}
        </ProgressBar>
      </React.Fragment>
    );
  }
}

export default StepProgressBar;
