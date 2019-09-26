import React from "react";
import "./PaymentMethods.css";
import "../../../css/colors.css";

class PaymentMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ""
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="PaymentMethods">
        <h1 className="paymentMethodsTitle">Select Payment Method</h1>
        <div className="paymentOption">
          <input
            type="radio"
            value="oxxoPay"
            checked={this.state.selectedOption === "oxxoPay"}
            onChange={this.radioChange}
            className="paymentButton"
          />
          <span className="paymentTag">Oxxo Pay</span>
        </div>
        <br />
        <div className="paymentOption">
          <input
            type="radio"
            value="payPal"
            checked={this.state.selectedOption === "payPal"}
            onChange={this.radioChange}
          />
          <span className="paymentTag">PayPal</span>
        </div>
        <br />
        <div className="paymentOption">
          <input
            type="radio"
            value="card"
            checked={this.state.selectedOption === "card"}
            onChange={this.radioChange}
          />
          <span className="paymentTag">Tarjeta</span>
        </div>
      </div>
    );
  }
}
export default PaymentMethods;
