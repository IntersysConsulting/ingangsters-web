import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import "../Forms.css";
import { validateShippingForm } from "../../../actions/creators/checkoutForms";

const ShippingForm = ({ isAuthenticated, user, dispatch }) => {
  const [selectedAddress, setSelectedAddress] = useState({
    alias: "",
    city: "",
    country: "",
    number: "",
    state: "",
    street: "",
    type: "",
    zipCode: ""
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSelect = evt => {
    const address = JSON.parse(evt);
    setSelectedAddress(address);
  };

  const displayAddressesDropdown = () => {
    if (isAuthenticated) {
      const { addresses } = user;
      return (
        <DropdownButton
          id="shipping-addresses-dropdown"
          title={
            selectedAddress.alias === "" ? "Addresses" : selectedAddress.alias
          }
          className="dropdown"
          onSelect={handleSelect}
        >
          {addresses.map((address, i) => (
            <Dropdown.Item
              key={`shipping-addresses-option${i}`}
              eventKey={JSON.stringify(address)}
            >
              {address.alias}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      );
    }
  };

  const handleChange = () => {
    setName(document.forms.shippingForm.elements.name.value);
    setPhone(document.forms.shippingForm.elements.phone.value);
    setEmail(document.forms.shippingForm.elements.email.value);
  };

  const validateForm = (errors, values) => {
    const isValid = Object.keys(errors).length === 0;
    let allFieldsFilled = true;
    for (var key in values) {
      if (values[key] === "") {
        allFieldsFilled = false;
      }
    }
    dispatch(validateShippingForm(isValid && allFieldsFilled));
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ShippingFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .trim(),
    street: Yup.string()
      .required("Address is required")
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
      .required("Zip code is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .trim(),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .trim()
  });

  const shippingForm = () => (
    <Formik
      initialValues={{
        name: name,
        address: selectedAddress.street,
        country: selectedAddress.country,
        state: selectedAddress.state,
        city: selectedAddress.city,
        zipCode: selectedAddress.zipCode,
        phone: phone,
        email: email
      }}
      enableReinitialize
      validationSchema={ShippingFormSchema}
    >
      {({ errors, touched, values }) => {
        validateForm(errors, values);
        return (
          <Form className="mt-4" name="shippingForm" onChange={handleChange}>
            <div className="form-group">
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`form-control ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                name="address"
                placeholder="Address"
                className={`form-control ${
                  touched.address && errors.address ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="address"
                className="invalid-feedback"
              />
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
            <div className="form-group">
              <Field
                type="tel"
                name="phone"
                placeholder="Phone"
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

            <div className="form-group">
              <Field
                type="email"
                name="email"
                placeholder="Email for order confirmation"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Shipping</h3>
        </div>
        <div className="col text-right">{displayAddressesDropdown()}</div>
      </div>
      {shippingForm()}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(ShippingForm);
