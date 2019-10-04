import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import RegisterButton from "./RegisterButton/RegisterButton";
import "../../../css/colors.css";
import "./ModalPassword.css";
import { connect } from "react-redux";
import { checkPassword } from "../../../actions/creators/auth";

function ModalPassword({ checkPassword, confirmed_password }) {
  const [values, setValues] = useState({
    password: ""
  });
  const { password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const [show, setShow] = React.useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const onSubmit = async event => {
    event.preventDefault();
    checkPassword(password);
  };

  if (confirmed_password) {
    alert("Password Confirmed");
  }

  return (
    <React.Fragment>
      <RegisterButton onClick={handleShow} />
      {confirmed_password !== true ? (
        <Modal show={show} onHide={handleClose} className="AskPasswordModal">
          <Modal.Body className="PasswordModalContent">
            <form>
              <label className="PasswordModalLabel">
                Confirm the register of a New Admin User
              </label>
              <div className="password-form-modal">
                <input
                  onChange={handleChange("password")}
                  type={"password"}
                  placeholder="  Password"
                  className="form-control-password-modal"
                />
              </div>
            </form>
            <Button className="AskPasswordModalSendButton" onClick={onSubmit}>
              Send
            </Button>
          </Modal.Body>
        </Modal>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticatedl,
  confirmed_password: state.auth.confirmed_password
});

export default connect(
  mapStateToProps,
  { checkPassword }
)(ModalPassword);
