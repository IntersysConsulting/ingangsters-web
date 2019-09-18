import React from "react";
import ModalButton from "./ModalButton/ModalButton";
import "./Modal.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { isAuthenticated } from "../../utils/auth";
import { Link } from "react-router-dom";

const Modal = ({ show, modalOut }) => {
  var logged = isAuthenticated();
  //console.log("Logueado: " + logged);
  if (logged) {
    if (show)
      return (
        <Card>
          {/* Para ir al account que no tenemos */}
          <Link to={`/esta_pagina_sera_account_details`}>
            <ModalButton
              label="Account Details"
              className="buttonOne"
            ></ModalButton>
          </Link>

          <ModalButton
            label="Logout"
            className="buttonTwo"
            onClick={this.logout()}
          ></ModalButton>
        </Card>
      );
    return <div />;
  } else {
    if (show)
      return (
        <Card>
          <Link to={`/signin`}>
            <ModalButton label="Login" className="buttonOne"></ModalButton>
          </Link>
          <Link to={"/signup"}>
            <ModalButton label="Sign Up" className="buttonTwo"></ModalButton>
          </Link>
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

function logout() {
  localStorage.clear();
  return <Link className="link" to="/"></Link>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
