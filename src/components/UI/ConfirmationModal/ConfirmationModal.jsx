import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ConfirmationModal.css";
const ConfirmationModal = ({
  title,
  message,
  negativeText = "No",
  negativeAction,
  affirmativeText = "Yes",
  affirmativeAction,
  show,
  closeAction = () => {}
}) => {
  return (
    <Modal show={show} onHide={closeAction}>
      <Modal.Header closeButton className="confirmationModalHeader">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer className="confirmationModalFooter">
        <Button
          variant="light"
          className="confirmationNegativeButton"
          onClick={negativeAction}
        >
          {negativeText}
        </Button>
        <Button
          variant="light"
          className="confirmationAffirmativeButton"
          onClick={affirmativeAction}
        >
          {affirmativeText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
