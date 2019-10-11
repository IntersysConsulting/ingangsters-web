import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateUserData } from "../UserDataManager";

const ChangePhoneModal = ({ showModalStatus, modalStatusChange, userData }) => {
  const [buttonDisabledState, setButtonDisabledState] = useState(true);

  const saveModifiedPhone = () => {
    userData.phone = document.forms.modifyPhoneForm.elements.phone.value;
    updateUserData(userData);
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

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const phoneFormSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .trim()
  });

  const modifyPhoneForm = () => (
    <Formik
      initialValues={{
        phone: userData.phone ? userData.phone : ""
      }}
      validationSchema={phoneFormSchema}
    >
      {({ errors, touched, values }) => {
        validateForm(errors, values);
        return (
          <Form className="mt-2" name="modifyPhoneForm">
            <div className="form-group">
              <label className="text-muted">Phone number</label>
              <Field
                type="text"
                name="phone"
                placeholder="Enter a phone"
                className={`form-control ${
                  touched.phone && errors.phone ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="phone"
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
        <Modal.Title>Modify phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modifyPhoneForm()}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          disabled={buttonDisabledState}
          onClick={saveModifiedPhone}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePhoneModal;
