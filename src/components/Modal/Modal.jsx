import React from "react";
import ModalButton from "./ModalButton/ModalButton";
import "./Modal.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Modal = ({ show, isAuthenticated }) => {
  //console.log("Logueado: " + logged);
  if (show) {
    if (isAuthenticated) {
      return (
        <Card>
          {/* Para ir al account que no tenemos */}
          <Link to="/esta_pagina_sera_account_details">
            <ModalButton
              label="Account Details"
              className="buttonOne"
            ></ModalButton>
          </Link>
          <Link to="/logout">
            <ModalButton label="Logout" className="buttonTwo"></ModalButton>
          </Link>
        </Card>
      );
    } else {
      return (
        <Card>
          <Link to="/signin">
            <ModalButton label="Login" className="buttonOne"></ModalButton>
          </Link>
          <Link to="/signup">
            <ModalButton label="Sign Up" className="buttonTwo"></ModalButton>
          </Link>
        </Card>
      );
    }
  }
  return <div />;
};

function mapStateToProps(state) {
  return {
    show: state.modal.active,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Modal);
