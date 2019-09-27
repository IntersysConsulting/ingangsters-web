import React from "react";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";
import PaymentMethods from "./PaymentMethods/PaymentMethods";

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
