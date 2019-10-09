import React, { useState, Fragment } from "react";
import "./Checkout.css";
import ShippingForm from "./ShippingForm/ShippingForm";
import BillingForm from "./BillingForm/BillingForm";
import { connect } from "react-redux";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";
import OrderSummary from "./OrderSummary/OrderSummary";
import Loading from "../UI/Loading/Loading";
import FastLoginModal from "./FastLogin/FastLoginModal/FastLoginModal";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import { displayPaymentMethods } from "../../actions/creators/checkout";
import { Link } from "react-router-dom";

const Checkout = ({
  isAuthenticated,
  loading,
  isShippingFormValid,
  isBillingFormValid,
  displayPaymentMethods,
  displayAction
}) => {
  const [useBillingAddress, setUseBillingAddress] = useState(true);

  const displayLoginBtn = () => {
    if (!isAuthenticated)
      return (
        <div className="text-center">
          <FastLoginModal />
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
    let billingFormValues = {};
    if (useBillingAddress) {
      billingFormValues = { ...shippingFormValues };
    } else {
      const billingAddressForm = document.forms.billingForm;
      billingFormValues = {
        name: billingAddressForm.elements.name.value,
        street: billingAddressForm.elements.address.value,
        country: billingAddressForm.elements.country.value,
        state: billingAddressForm.elements.state.value,
        city: billingAddressForm.elements.city.value,
        zipCode: billingAddressForm.elements.zipCode.value
      };
    }
    console.log("shippingFormValues", shippingFormValues);
    console.log("billingAddressForm", billingFormValues);
    displayAction();
  };

  const disabledPaymentBtn = () => {
    return useBillingAddress
      ? !isShippingFormValid
      : !(isShippingFormValid && isBillingFormValid);
  };

  return loading ? (
    <Fragment>
      <SimpleNavBar />
      <div className="d-flex justify-content-center">
        <Loading />
      </div>
    </Fragment>
  ) : (
    <div>
      <SimpleNavBar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="checkout-form">
              {!displayPaymentMethods ? (
                <div>
                  {displayLoginBtn()}
                  <ShippingForm />
                  <div className="custom-control custom-checkbox my-4 ml-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlValidation1"
                      checked={useBillingAddress}
                      onChange={handleCheck}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlValidation1"
                    >
                      Use this address for billing
                    </label>
                  </div>
                  {displayBillingForm()}
                  <div className="text-center mt-5">
                    <button
                      className="btn checkout-btn"
                      onClick={onSubmit}
                      disabled={disabledPaymentBtn()}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <PaymentMethods />
                  <div className="text-center mt-5">
                    {/* we'll save the data in the DB in this button, 
                  meanwhile I'll use Link and props until de endpoints are ready*/}
                    <Link to="/checkout/thankyou">
                      <button className="btn checkout-btn">
                        Confirm Order
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3>Your order</h3>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  isShippingFormValid: state.checkoutForms.isShippingFormValid,
  isBillingFormValid: state.checkoutForms.isBillingFormValid,
  displayPaymentMethods: state.checkout.displayPaymentMethods
});
function mapDispatchToProps(dispatch) {
  return {
    displayAction() {
      dispatch(displayPaymentMethods());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
