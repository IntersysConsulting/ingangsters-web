import React from "react";
import { Button } from "react-bootstrap";
import "./FastLoginButton.css";
import "../../../../css/colors.css";

const FastLoginButton = props => {
  return (
    <Button className="FastLoginButton" onClick={props.onClick}>
      Login for faster Checkout
    </Button>
  );
};

export default FastLoginButton;
