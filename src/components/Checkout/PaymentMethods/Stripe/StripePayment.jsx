import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { API } from "../../../../config";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    const endpoint = `http://127.0.0.1:5000/charge`;
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      amount: 5000,
      customer: {
        email: "a@a.com",
        source: token.id
      },
      description: "Payment"
    };
    const result = await axios.get(endpoint, config);
    if (result.ok) console.log("Purchase Complete!");
  }

  render() {
    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
