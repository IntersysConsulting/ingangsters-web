import React from "react";
import "./PaymentMethods.css";
import "../../../css/colors.css";
import { STRIPE_KEY } from "../../../config";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../../../config";
import axios from "axios";

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

  async submit(token) {
    const endpoint = `${API}/charge`;
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      customer: {
        email: token.email,
        source: token.id
      },
      items: currentCart,
      description: "Ecomerce Payment"
    };
    try {
      await axios.post(endpoint, config);
      console.log("Success!");
      localStorage.removeItem("cart");
      window.location.replace("/checkout/thankyou");
    } catch (error) {
      console.error("Problem: ", error.response.data.message);
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
          <StripeCheckout
            image="/assets/logoColor.png"
            name={this.props.name}
            email={this.props.email}
            stripeKey={STRIPE_KEY}
            token={this.submit}
            zipCode
            panelLabel="Pay Now"
          >
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
          </StripeCheckout>
        </div>
      </div>
    );
  }
}
export default PaymentMethods;
