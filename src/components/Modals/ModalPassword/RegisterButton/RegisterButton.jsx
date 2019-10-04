import React from "react";
import { Button } from "react-bootstrap";
import "./RegisterButton.css";
import "../../../../css/colors.css";

const RegisterButton = props => {
  return (
    <Button
      className="RegisterButtonModal"
      variant="primary"
      onClick={props.onClick}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
