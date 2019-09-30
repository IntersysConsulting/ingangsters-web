import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SimpleNavBar from "../../NavBars/SimpleNavBar/SimpleNavBar";
import "./ErrorPage.css";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <SimpleNavBar />
        <div className="error-page-container">
          <p className="first-line">Looks like you're lost</p>
          <p className="second-line">
            the page you are looking for is not available!
          </p>
          <div>
            <img src="/assets/logoColor.png" alt="" className="img-error" />
          </div>
          <Link to="/">
            <Button className="errorButton">Go to home</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
