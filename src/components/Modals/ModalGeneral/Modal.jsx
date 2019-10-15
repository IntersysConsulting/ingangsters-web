import React from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
import IconButton from "../../NavBars/GeneralNavBar/IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import ModalButton from "./ModalButton/ModalButton";
import { isAuthenticated } from "../../../utils/auth";

function ModalSchema() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isAuthenticated()) {
    return (
      <React.Fragment>
        <IconButton
          Icon={MdPerson}
          Label="Account"
          onClick={handleShow}
        ></IconButton>

        <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          className="modal_navbar"
        >
          <Modal.Body className="modalObject">
            <Link to="/account">
              <ModalButton
                label="Account Details"
                className="accountButton modalButton"
              ></ModalButton>
            </Link>
            <Link to="/logout">
              <ModalButton
                label="Logout"
                className="logoutButton modalButton"
              ></ModalButton>
            </Link>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <IconButton
          Icon={MdPerson}
          Label="Account"
          onClick={handleShow}
        ></IconButton>

        <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          className="modal_navbar"
        >
          <Modal.Body className="modalObject">
            <Link to="/login">
              <ModalButton
                label="Login"
                className="accountButton modalButton"
              ></ModalButton>
            </Link>
            <Link to="/signup">
              <ModalButton
                label="Sign Up"
                className="logoutButton modalButton"
              ></ModalButton>
            </Link>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalSchema;
