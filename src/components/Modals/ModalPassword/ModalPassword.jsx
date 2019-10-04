import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import RegisterButton from "./RegisterButton/RegisterButton";
import "../../../css/colors.css";
import "./ModalPassword.css";

function ModalPassword() {
  const [values, setValues] = useState({
    password: ""
  });
  const { password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <RegisterButton onClick={handleShow} />
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
          <Button className="AskPasswordModalSendButton">Send</Button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalPassword;
