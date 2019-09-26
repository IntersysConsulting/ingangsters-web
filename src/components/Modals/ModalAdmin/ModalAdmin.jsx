import React from "react";
import "../ModalGeneral/Modal.css";
import Modal from "react-bootstrap/Modal";
import IconButton from "../../NavBars/GeneralNavBar/IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import ModalButton from "../ModalGeneral/ModalButton/ModalButton";

function ModalAdmin() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <IconButton
        Icon={MdPerson}
        type="z"
        onClick={handleShow}
        className="iconAdmin iconButton"
      ></IconButton>

      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        className="modal_navbar modal_admin"
      >
        <Modal.Body className="modalObject">
          <Link to="/admin/dashboard">
            <ModalButton
              label="Admin Page"
              className="buttonOne modalButton"
            ></ModalButton>
          </Link>
          <Link to="/logout">
            <ModalButton
              label="Logout"
              className="buttonTwo modalButton"
            ></ModalButton>
          </Link>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalAdmin;
