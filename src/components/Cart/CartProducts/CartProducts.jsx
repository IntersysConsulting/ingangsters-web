import React from "react";
import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";

const CartProducts = ({ cartItems }) => {
  const currentCart = JSON.parse(localStorage.getItem("cart"));

  return currentCart && currentCart.length > 0 ? (
    <div className="row">
      {currentCart.map((singleItem, i) => (
        <div key={i} className="col-12 pb-1 pt-3">
          <SingleProduct data={singleItem} />
        </div>
      ))}
      <div className="col-6 offset-6 pt-3">Total items: {cartItems}</div>
    </div>
  ) : (
    <div>No products in cart</div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartProducts);
