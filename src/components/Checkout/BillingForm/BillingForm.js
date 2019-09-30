import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import "../Forms.css";

const BillingForm = ({ isAuthenticated, user }) => {
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

  const handleSelect = evt => {
    const address = JSON.parse(evt);
    setSelectedAddress(address);
  };

  const displayAddressesDropdown = () => {
    if (isAuthenticated) {
      const { addresses } = user;
      return (
        <DropdownButton
          id="billing-addresses-dropdown"
          title={
            selectedAddress.alias === "" ? "Addresses" : selectedAddress.alias
          }
          className="dropdown"
          onSelect={handleSelect}
        >
          {addresses.map((address, i) => (
            <Dropdown.Item
              key={`billing-addresses-option${i}`}
              eventKey={JSON.stringify(address)}
            >
              {address.alias}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      );
    }
  };

  const BillingFormSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("Zip code is required")
  });

  const shippingForm = () => (
    <Formik
      initialValues={{
        address: selectedAddress.street,
        country: selectedAddress.country,
        state: selectedAddress.state,
        city: selectedAddress.city,
        zipCode: selectedAddress.zipCode
      }}
      enableReinitialize
      validationSchema={BillingFormSchema}
    >
      {({ errors, touched }) => {
        return (
          <Form className="mt-4" name="shippingForm">
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
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Billing</h3>
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

export default connect(mapStateToProps)(BillingForm);
