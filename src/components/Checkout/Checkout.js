import React from "react";
import FastLoginButton from "./FastLogin/FastLoginButton/FastLoginButton";
import FastLoginModal from "./FastLogin/FastLoginModal/FastLoginModal";
import PaymentMethods from "./PaymentMethods/PaymentMethods";

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      {/* <FastLoginButton />
      <FastLoginModal /> */}
      <PaymentMethods />
    </div>
  );
};

export default Checkout;
