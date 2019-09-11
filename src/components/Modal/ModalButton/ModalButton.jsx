import React from "react";
import "./ModalButton.css";
import Button from "react-bootstrap/Button";

const ModalButton = props => {
  return <Button className={props.className}>{props.label}</Button>;
};

export default ModalButton;
