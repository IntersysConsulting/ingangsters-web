import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { API } from "../../../../config";
import axios from "axios";
import "../../Checkout.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    const endpoint = `${API}/charge`;
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      customer: {
        email: this.props.email,
        source: token.id
      },
      items: currentCart,
      description: "Ecomerce Payment"
    };
    try {
      const result = await axios.post(endpoint, config);
      console.log("Success!");
      return <Redirect to="/checkout/thankyou" />;
    } catch (error) {
      console.error("Problem: ", error.response.data.message);
    }
  }

  render() {
    return (
      <div className="checkout">
        <CardElement />
        <div className="text-center mt-5">
          <button className="btn checkout-btn" onClick={this.submit}>
            Pay
          </button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
