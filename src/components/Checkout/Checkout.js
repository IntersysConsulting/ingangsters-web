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
import {
  displayPaymentMethods,
  saveFormValues
} from "../../actions/creators/checkout";
import StepProgressBar from "../UI/StepProgressBar/StepProgressBar";
import { Link } from "react-router-dom";

const Checkout = ({
  isAuthenticated,
  loading,
  isShippingFormValid,
  isBillingFormValid,
  displayPaymentMethods,
  displayAction,
  saveFormValuesAction,
  isSaveFormValues,
  formValues
}) => {
  const [useBillingAddress, setUseBillingAddress] = useState(true);
  const [step, setStep] = useState(0);
  const [isDisplayOrderSummary, setDisplayOrderSummary] = useState(true);
  const isMobile = window.innerWidth <= 767;
  let shippingFormValues = {
    name: "",
    street: "",
    country: "",
    number: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
    email: ""
  };
  let billingFormValues = {
    name: "",
    street: "",
    country: "",
    number: "",
    state: "",
    city: "",
    zip: ""
  };

  if (isSaveFormValues) {
    console.log("formValues", formValues);
    shippingFormValues=formValues.shippingFormValues;
    billingFormValues = formValues.billingFormValues;
  }

  const displayLoginBtn = () => {
    if (!isAuthenticated)
      return (
        <div className="text-center">
          <FastLoginModal />
          <p>...or continue as a guest</p>
        </div>
      );
  };
  const displayStepProgressBar = () => {
    return (
      <div className="container" style={{ paddingBottom: "30px" }}>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-4 col-4">
            <StepProgressBar step={step} setStep={changeStep} />
          </div>
        </div>
      </div>
    );
  };
  const displayOrderSummary = () => {
    return (
      <div className="col-md-6 col-lg-6">
        <h3>Your order</h3>
        <OrderSummary />
        <div className="text-center mt-5">
          <button
            className="btn checkout-btn"
            onClick={() => {
              setDisplayOrderSummary(false);
              setStep(1);
            }}
          >
            Continue to Shipping
          </button>
        </div>
      </div>
    );
  };

  const changeStep = newStep => {
    if (newStep < step) {
      setStep(newStep);
    }
  };

  const displayBillingForm = () =>
    !useBillingAddress ? <BillingForm  billingFormValues={billingFormValues}/> : null;

  const handleCheck = () => {
    setUseBillingAddress(!useBillingAddress);
  };

  const onSubmit = () => {
    const shippingAddressForm = document.forms.shippingForm;
    shippingFormValues = {
      name: shippingAddressForm.elements.name.value,
      street: shippingAddressForm.elements.street.value,
      country: shippingAddressForm.elements.country.value,
      number: shippingAddressForm.elements.number.value,
      state: shippingAddressForm.elements.state.value,
      city: shippingAddressForm.elements.city.value,
      zip: shippingAddressForm.elements.zip.value,
      phone: shippingAddressForm.elements.phone.value,
      email: shippingAddressForm.elements.email.value
    };
    billingFormValues = {};
    if (useBillingAddress) {
      billingFormValues = { ...shippingFormValues };
    } else {
      const billingAddressForm = document.forms.billingForm;
      billingFormValues = {
        name: billingAddressForm.elements.name.value,
        street: billingAddressForm.elements.street.value,
        country: billingAddressForm.elements.country.value,
        number: billingAddressForm.elements.number.value,
        state: billingAddressForm.elements.state.value,
        city: billingAddressForm.elements.city.value,
        zip: billingAddressForm.elements.zip.value
      };
    }
    console.log("shippingFormValues", shippingFormValues);
    console.log("billingAddressForm", billingFormValues);

    saveFormValuesAction(true, {
      shippingFormValues: shippingFormValues,
      billingFormValues: billingFormValues
    });

    if (isMobile) {
      setStep(2);
      displayAction(true);
    } else {
      setStep(1);
    }
    //displayAction(true);
  };

  const disabledPaymentBtn = () => {
    return useBillingAddress
      ? !isShippingFormValid
      : !(isShippingFormValid && isBillingFormValid);
  };

  const render = () => {
    if (loading) {
      return (
        <Fragment>
          <SimpleNavBar />
          <div className="d-flex justify-content-center">
            <Loading />
          </div>
        </Fragment>
      );
    } else {
      if (!isMobile) {
        if (step === 0) {
          displayAction(false);
        } else if (step === 1) {
          if (!displayPaymentMethods) {
            displayAction(true);
          }
        }
        return (
          <div>
            <SimpleNavBar />
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="checkout-form">
                    {displayStepProgressBar()}
                    {!displayPaymentMethods ? (
                      <div>
                        {displayLoginBtn()}
                        <ShippingForm shippingFormValues={shippingFormValues} />
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
      } else {
        switch (step) {
          case 0:
            if (!isDisplayOrderSummary) {
              displayAction(false);
              setDisplayOrderSummary(true);
            }
            break;
          case 1:
            displayAction(false);
            break;
          default:
        }
        if (isDisplayOrderSummary) {
          return (
            <div>
              <SimpleNavBar />
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="checkout-form">
                      {displayStepProgressBar()}
                      {displayOrderSummary()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <SimpleNavBar />
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="checkout-form">
                      {displayStepProgressBar()}
                      {!displayPaymentMethods ? (
                        <div>
                          {displayLoginBtn()}
                          <ShippingForm
                            shippingFormValues={shippingFormValues}
                          />
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
                </div>
              </div>
            </div>
          );
        }
      }
    }
  };
  return render();
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  isShippingFormValid: state.checkoutForms.isShippingFormValid,
  isBillingFormValid: state.checkoutForms.isBillingFormValid,
  displayPaymentMethods: state.checkout.displayPaymentMethods,
  isSaveFormValues: state.checkout.isSaveFormValues,
  formValues: state.checkout.formValues
});
function mapDispatchToProps(dispatch) {
  return {
    displayAction(value) {
      dispatch(displayPaymentMethods(value));
    },
    saveFormValuesAction(isSaveFormValues, formValues) {
      dispatch(saveFormValues(isSaveFormValues, formValues));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
