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
    zip: "",
    name: "",
    email: "",
    phone: ""
  });

  let formFormik;

  const handleSelect = evt => {
    const address = JSON.parse(evt);

    setSelectedAddress({
      ...address,
      email: formFormik.state.values.email,
      phone: formFormik.state.values.phone,
      name: formFormik.state.values.name
    });
    formFormik.resetForm();
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

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ShippingFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .trim(),
    street: Yup.string()
      .required("Street is required")
      .trim(),
    number: Yup.string()
      .required("Street number is required")
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
    zip: Yup.number()
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
      ref={ref => (formFormik = ref)}
      initialValues={{
        name: selectedAddress.name,
        street: selectedAddress.street,
        number: selectedAddress.number,
        country: selectedAddress.country,
        state: selectedAddress.state,
        city: selectedAddress.city,
        zip: selectedAddress.zip,
        phone: selectedAddress.phone,
        email: selectedAddress.email
      }}
      enableReinitialize
      validationSchema={ShippingFormSchema}
      isInitialValid={ShippingFormSchema.isValidSync(selectedAddress)}
    >
      {({ errors, touched, isValid }) => {
        dispatch(validateShippingForm(isValid));
        return (
          <Form className="mt-4" name="shippingForm">
            <div className="form-group">
              <label className="text-muted">Name</label>
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

            <div className="row">
              <div className="form-group col">
                <label className="text-muted">Street</label>
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
              <div className="form-group col">
                <label className="text-muted">Street Number</label>
                <Field
                  type="text"
                  name="number"
                  placeholder="Street number"
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
                <label className="text-muted">Country</label>
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
                <label className="text-muted">State</label>
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
                <label className="text-muted">City</label>
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
                <label className="text-muted">ZIP Code</label>
                <Field
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  className={`form-control ${
                    touched.zip && errors.zip ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="zip"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-muted">Phone</label>
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
              <label className="text-muted">Email</label>
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
