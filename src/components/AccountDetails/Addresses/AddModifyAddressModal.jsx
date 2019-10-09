import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addAddress, modifyAddressAt } from "./AddressesManager";

const AddModifyAddressModal = ({
  isModifying,
  position,
  title,
  buttonText,
  showModalStatus,
  modalStatusChange,
  userData
}) => {
  const [buttonDisabledState, setButtonDisabledState] = useState(true);

  var aliasG = "";
  var streetG = "";
  var numberG = "";
  var countryG = "";
  var stateG = "";
  var cityG = "";
  var zipCodeG = "";

  if (isModifying) {
    aliasG = userData.addresses[position].alias;
    streetG = userData.addresses[position].street;
    numberG = userData.addresses[position].number;
    countryG = userData.addresses[position].country;
    stateG = userData.addresses[position].state;
    cityG = userData.addresses[position].city;
    zipCodeG = userData.addresses[position].zip;
  }

  const addModifyAddressMethod = () => {
    const addressObject = {};
    addressObject.type = "Both";
    addressObject.alias = document.forms.newAddressForm.elements.alias.value;
    addressObject.country =
      document.forms.newAddressForm.elements.country.value;
    addressObject.state = document.forms.newAddressForm.elements.state.value;
    addressObject.city = document.forms.newAddressForm.elements.city.value;
    addressObject.zip = parseInt(
      document.forms.newAddressForm.elements.zipCode.value
    );
    addressObject.street = document.forms.newAddressForm.elements.street.value;
    addressObject.number = document.forms.newAddressForm.elements.number.value;

    if (isModifying) {
      modifyAddressAt(position, addressObject, userData);
    } else {
      addAddress(addressObject, userData);
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

  const ShippingFormSchema = Yup.object().shape({
    alias: Yup.string()
      .required("Alias is required")
      .trim(),
    street: Yup.string()
      .required("Street is required")
      .trim(),
    number: Yup.string()
      .required("Street is required")
      .trim(),
    country: Yup.string()
      .required("Country is required")
      .trim(),
    state: Yup.string()
      .required("State is required")
      .trim(),
    city: Yup.string()
      .required("City is required")
      .trim(),
    zipCode: Yup.number()
      .typeError("Zip code must be a number")
      .required("Zip code is required")
  });

  const addModifyAddressForm = () => (
    <Formik
      initialValues={{
        alias: aliasG,
        street: streetG,
        number: numberG,
        country: countryG,
        state: stateG,
        city: cityG,
        zipCode: zipCodeG
      }}
      enableReinitialize
      validationSchema={ShippingFormSchema}
    >
      {({ errors, touched, values }) => {
        validateForm(errors, values);
        return (
          <Form className="mt-4" name="newAddressForm">
            <div className="form-group">
              <Field
                type="text"
                name="alias"
                placeholder="Enter an alias"
                className={`form-control ${
                  touched.alias && errors.alias ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="alias"
                className="invalid-feedback"
              />
            </div>

            <div className="row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="street"
                  placeholder="Street"
                  className={`form-control ${
                    touched.street && errors.street ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="street"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col-4">
                <Field
                  type="text"
                  name="number"
                  placeholder="Number"
                  className={`form-control ${
                    touched.number && errors.number ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="number"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="country"
                  placeholder="Country"
                  className={`form-control ${
                    touched.country && errors.country ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="country"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col">
                <Field
                  type="text"
                  name="state"
                  placeholder="State"
                  className={`form-control ${
                    touched.state && errors.state ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="state"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={`form-control ${
                    touched.city && errors.city ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="city"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col">
                <Field
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className={`form-control ${
                    touched.zipCode && errors.zipCode ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="zipCode"
                  className="invalid-feedback"
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <Modal show={showModalStatus} onHide={modalStatusChange}>
      <Modal.Header closeButton className="confirmationModalHeader">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{addModifyAddressForm()}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          disabled={buttonDisabledState}
          onClick={addModifyAddressMethod}
        >
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModifyAddressModal;
