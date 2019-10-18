import React from "react";
import "./PaymentMethods.css";
import "../../../css/colors.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./Stripe/StripePayment";
import StripeScriptLoader from "react-stripe-script-loader";

class PaymentMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      showCards: false
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    if (e.currentTarget.value === "card") {
      this.setState({
        selectedOption: e.currentTarget.value,
        showCards: true
      });
    } else {
      this.setState({
        selectedOption: e.currentTarget.value,
        showCards: false
      });
    }
  }

  render() {
    return (
      <div className="PaymentMethods">
        <h1 className="paymentMethodsTitle">Select Payment Method</h1>
        <br />

        <div className="paymentOption">
          <input
            id="oxxoPay"
            type="radio"
            value="oxxoPay"
            checked={this.state.selectedOption === "oxxoPay"}
            onChange={this.radioChange}
            className="paymentButton"
          />

          <label htmlFor="oxxoPay" className="paymentTag">
            <img
              alt="oxxo-pay"
              src="/assets/Oxxo_logo.svg"
              width="55"
              height="auto"
            />
            Oxxo Pay
          </label>
        </div>
        <br />

        <div className="paymentOption" onClick={this.radioChange}>
          <input
            id="payPal"
            type="radio"
            value="payPal"
            checked={this.state.selectedOption === "payPal"}
            onChange={this.radioChange}
            className="paymentButton"
          />

          <label htmlFor="payPal" className="paymentTag">
            <img
              alt="PayPal"
              src="/assets/PayPal-Logo.png"
              width="65"
              height="auto"
            />
            PayPal
          </label>
        </div>
        <br />

        <div className="paymentOption">
          <input
            id="card"
            type="radio"
            value="card"
            checked={this.state.selectedOption === "card"}
            onChange={this.radioChange}
            className="paymentButton"
          />

          <label htmlFor="card" className="paymentTag">
            <img
              alt="card"
              src="/assets/card-logo.png"
              width="65"
              height="auto"
            />
            Card
          </label>
        </div>
        {this.state.showCards ? (
          <StripeScriptLoader
            uniqueId="stripe-js"
            script="https://js.stripe.com/v3/"
            async
          >
            <StripeProvider apiKey={process.env.STRIPE_TEST_KEY}>
              <div show="false" className="cardForm">
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </StripeScriptLoader>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default PaymentMethods;
