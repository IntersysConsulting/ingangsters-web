import React, { useState } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import CartProducts from "./CartProducts/CartProducts";
import { getCart } from "../Routes/UserRoute";
import Loading from "../UI/Loading/Loading";
import { updateCartStore } from "../../actions/creators/cart";

const Cart = ({ updateCartStore }) => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    getCart(setLoading);
    return (
      <React.Fragment>
        <NavBar />
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </React.Fragment>
    );
  } else {
    updateCartStore();
    return (
      <React.Fragment>
        <NavBar />
        <div className="container my-3">
          <h1>Your Cart</h1>
          <CartProducts />
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { updateCartStore }
)(Cart);
