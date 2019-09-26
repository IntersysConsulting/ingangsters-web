import React from "react";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";
const Checkout = () => {
  return (
    <div>
      <SimpleNavBar />
      <h1>Checkout</h1>
      <PaymentMethods />
    </div>
  );
};

export default Checkout;
