import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FastLoginButton from "../FastLoginButton/FastLoginButton";
import "../../../../css/colors.css";
import "./FastLoginModal.css";
import { connect } from "react-redux";
import { login } from "../../../../actions/creators/auth";

function FastLoginModal({ login, isAuthenticated }) {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    handleClose();
    login(email, password);
  };
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!isAuthenticated) {
    return (
      <React.Fragment>
        <FastLoginButton onClick={handleShow} />
        <Modal show={show} onHide={handleClose} className="fastLoginModal">
          <Modal.Body className="LoginModalContent">
            <form>
              <div className="form-group-modal">
                <input
                  id="emailInput"
                  onChange={handleChange("email")}
                  type="email"
                  placeholder="  Email"
                  className="form-control-modal"
                />
              </div>
              <div className="form-group-modal">
                <input
                  id="passwordInput"
                  onChange={handleChange("password")}
                  type={"password"}
                  placeholder="  Password"
                  className="form-control-modal"
                />
              </div>
              <div className="form-button-modal">
                <Button
                  className="fastLoginButtonModal"
                  type="submit"
                  onClick={onSubmit}
                >
                  Login
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(FastLoginModal);
