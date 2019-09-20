import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import CartProducts from "./CartProducts/CartProducts";

const Cart = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container my-3">
        <h1>Your Cart</h1>
        <CartProducts />
      </div>
    </React.Fragment>
  );
};

export default Cart;
