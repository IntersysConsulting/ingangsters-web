import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { changeMyPassword } from "../UserDataManager";
import {
  createNotificationSuccess,
  createNotificationError
} from "../../../../actions/creators/notification";
import { idNotificationGenerator } from "../../../../utils/idGenerator";
import { connect } from "react-redux";

const ChangePasswordModal = ({
  showModalStatus,
  modalStatusChange,
  userData,
  createNotificationError,
  createNotificationSuccess
}) => {
  const [buttonDisabledState, setButtonDisabledState] = useState(true);

  const saveModifiedPassword = async (
    createNotificationError,
    createNotificationSuccess
  ) => {
    var newPassword = {};
    newPassword.oldpassword =
      document.forms.modifyPasswordForm.elements.oldpassword.value;
    newPassword.newpassword1 =
      document.forms.modifyPasswordForm.elements.newpassword1.value;
    newPassword.newpassword2 =
      document.forms.modifyPasswordForm.elements.newpassword2.value;

    modalStatusChange();
    if (await changeMyPassword(newPassword)) {
      createNotificationSuccess(
        idNotificationGenerator,
        "Password updated",
        "Redirecting to Login Page"
      );
      setTimeout(function() {
        localStorage.removeItem("token");
        window.location.pathname = "login";
      }, 3000);
    } else {
      createNotificationError(
        idNotificationGenerator,
        "Password NOT updated",
        "Check your current password"
      );
    }
  };

  const validateForm = (errors, values) => {
    const isValid = Object.keys(errors).length === 0;
    let allFieldsFilled = true;
    for (var key in values) {
      if (values[key] === "") {
        allFieldsFilled = false;
      }
    }
    allFieldsFilled && isValid
      ? setButtonDisabledState(false)
      : setButtonDisabledState(true);
  };

  const passwordFormSchema = Yup.object().shape({
    oldpassword: Yup.string().required("Current password is required."),
    newpassword1: Yup.string()
      .notOneOf(
        [Yup.ref("oldpassword")],
        "Password should not be as current one."
      )
      .required("New password is required."),
    newpassword2: Yup.string()
      .oneOf([Yup.ref("newpassword1"), null], "Passwords are not the same!")
      .required("Confirmation of new password is required.")
  });

  const modifyPasswordForm = () => (
    <Formik
      initialValues={{
        oldpassword: "",
        newpassword1: "",
        newpassword2: ""
      }}
      validationSchema={passwordFormSchema}
    >
      {({ errors, touched, values }) => {
        validateForm(errors, values);
        return (
          <Form className="mt-2" name="modifyPasswordForm">
            <div className="form-group">
              <label className="text-muted">Password</label>
              <Field
                type="password"
                name="oldpassword"
                placeholder="Enter your password"
                className={`form-control ${
                  touched.oldpassword && errors.oldpassword ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="oldpassword"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label className="text-muted">New password</label>
              <Field
                type="password"
                name="newpassword1"
                placeholder="Enter your new password"
                className={`form-control ${
                  touched.newpassword1 && errors.newpassword1
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="newpassword1"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label className="text-muted">Confirm password</label>
              <Field
                type="password"
                name="newpassword2"
                placeholder="Confirm your new password"
                className={`form-control ${
                  touched.newpassword2 && errors.newpassword2
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="newpassword2"
                className="invalid-feedback"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <Modal show={showModalStatus} onHide={modalStatusChange}>
      <Modal.Header closeButton className="confirmationModalHeader">
        <Modal.Title>Modify password</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modifyPasswordForm()}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          disabled={buttonDisabledState}
          onClick={() => {
            saveModifiedPassword(
              createNotificationError,
              createNotificationSuccess
            );
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(
  null,
  { createNotificationError, createNotificationSuccess }
)(ChangePasswordModal);
