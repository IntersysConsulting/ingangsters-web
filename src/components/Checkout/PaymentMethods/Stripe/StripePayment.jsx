import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    const endpoint = `${API}/charge`;
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      token: token.id
    };
    const result = await axios.get(endpoint, config);
    if (result.ok) console.log("Purchase Complete!");
  }

  render() {
    return (
      <div className="checkout">
        <CardElement />
        {/* <button onClick={this.submit}>Purchase</button> */}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
