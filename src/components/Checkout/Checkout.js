import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import ShippingForm from "./ShippingForm/ShippingForm";
import BillingForm from "./BillingForm/BillingForm";
import { connect } from "react-redux";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";

const Checkout = ({ isAuthenticated }) => {
  const [useBillingAddress, setUseBillingAddress] = useState(true);

  const displayLoginBtn = () => {
    if (!isAuthenticated)
      return (
        <div className="text-center">
          <Link to="/login">
            <button className="btn checkout-btn">
              Login for faster Checkout
            </button>
          </Link>
          <p>...or continue as a guest</p>
        </div>
      );
  };

  const displayBillingForm = () =>
    !useBillingAddress ? <BillingForm /> : null;

  const handleCheck = () => {
    setUseBillingAddress(!useBillingAddress);
  };

  const onSubmit = () => {
    const shippingAddressForm = document.forms.shippingForm;
    const shippingFormValues = {
      name: shippingAddressForm.elements.name.value,
      street: shippingAddressForm.elements.address.value,
      country: shippingAddressForm.elements.country.value,
      state: shippingAddressForm.elements.state.value,
      city: shippingAddressForm.elements.city.value,
      zipCode: shippingAddressForm.elements.zipCode.value,
      phone: shippingAddressForm.elements.phone.value,
      email: shippingAddressForm.elements.email.value
    };
    console.log(shippingFormValues);
  };

  return (
    <div>
      <SimpleNavBar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            {displayLoginBtn()}
            <ShippingForm />
            <label className="mt-4">
              <input
                name="isGoing"
                type="checkbox"
                checked={useBillingAddress}
                onChange={handleCheck}
              />
              Use this address for billing
            </label>
            {displayBillingForm()}
            <div className="text-center mt-5">
              <button className="btn checkout-btn" onClick={onSubmit}>
                Continue to Payment
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <h1>Your Order</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Checkout);
