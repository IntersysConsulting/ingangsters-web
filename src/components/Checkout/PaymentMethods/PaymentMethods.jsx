import React from "react";
import "./PaymentMethods.css";
import "../../../css/colors.css";
import { STRIPE_KEY } from "../../../config";
import StripeCheckout from "react-stripe-checkout";
import { createOrder } from "../../../actions/creators/orders";
import { API } from "../../../config";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PaymentMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      showCards: false,
      show: false,
      redirect: false
    };
    this.radioChange = this.radioChange.bind(this);
    this.submit = this.submit.bind(this);
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
  updateState() {
    this.setState({ redirect: true });
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

      if (this.props.auth.user != null) {
        this.props.createOrder(
          true,
          this.props.auth.user._id,
          this.props.checkout.formValues.shippingFormValues,
          this.props.checkout.formValues.billingFormValues,
          currentCart
        );
      } else {
        this.props.createOrder(
          false,
          {
            email: token.email,
            name: this.props.name
          },
          this.props.checkout.formValues.shippingFormValues,
          this.props.checkout.formValues.billingFormValues,
          currentCart
        );
      }
      localStorage.removeItem("cart");
      this.updateState();
    } catch (error) {
      console.error("Problem: ", error);
    }
  }

  render() {
    return (
      <div className="PaymentMethods">
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: "/checkout/thankyou",
              state: {
                name: this.props.name,
                address: this.props.checkout.formValues.shippingFormValues
              }
            }}
          />
        ) : (
          <div>
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

              {/* <label htmlFor="oxxoPay" className="paymentTag">
                <img
                  alt="oxxo-pay"
                  src="/assets/Oxxo_logo.svg"
                  width="55"
                  height="auto"
                />
                Oxxo Pay
              </label> */}
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
                locale="en"
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
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, checkout: state.checkout };
}

export default connect(
  mapStateToProps,
  { createOrder }
)(PaymentMethods);
