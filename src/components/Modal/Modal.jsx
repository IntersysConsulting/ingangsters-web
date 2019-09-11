import React from "react";
import ModalButton from "./ModalButton/ModalButton";
import "./Modal.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { isAuthenticated } from "../../utils/auth";

const Modal = ({ show, modalOut }) => {
  var logged = isAuthenticated();
  //console.log("Logueado: " + logged);
  if (logged) {
    if (show)
      return (
        <Card>
          <ModalButton
            label="Account Details"
            className="buttonOne"
          ></ModalButton>
          <ModalButton label="Logout" className="buttonTwo"></ModalButton>
        </Card>
      );
    return <div />;
  } else {
    if (show)
      return (
        <Card>
          <ModalButton label="Login" className="buttonOne"></ModalButton>
          <ModalButton label="Sign Up" className="buttonTwo"></ModalButton>
        </Card>
      );
    return <div />;
  }
};

function mapStateToProps(state) {
  return {
    show: state.modal.active,
    modalOut: state.modal.outEffect
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
