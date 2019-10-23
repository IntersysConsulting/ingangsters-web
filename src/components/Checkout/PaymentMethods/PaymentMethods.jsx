import React from "react";
import "./PaymentMethods.css";
import "../../../css/colors.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./Stripe/StripePayment";
import StripeScriptLoader from "react-stripe-script-loader";
import Modal from "react-bootstrap/Modal";

class PaymentMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      showCards: false,
      show: false
    };
    this.radioChange = this.radioChange.bind(this);
  }
  handleClose = () => this.setState({ showCards: false });
  handleShow = () => this.setState({ showCards: true });
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
            onClick={this.handleShow}
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

        <Modal
          size="sm"
          show={this.state.showCards}
          onHide={this.handleClose}
          className="modal_stripe"
        >
          <Modal.Body>
            <StripeScriptLoader
              uniqueId="stripe-js"
              script="https://js.stripe.com/v3/"
              async
            >
              <StripeProvider apiKey="pk_test_YKhTs9fArUxweiwKlKKTRRtW00NOfguXTq">
                <div show="false" className="cardForm">
                  <Elements>
                    <CheckoutForm email={this.props.email} />
                  </Elements>
                </div>
              </StripeProvider>
            </StripeScriptLoader>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default PaymentMethods;
