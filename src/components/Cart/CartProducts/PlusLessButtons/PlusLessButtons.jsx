import React from "react";
import { connect } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../ProductsManager";
import { uploadAndUpdateCart } from "../../../../actions/creators/cart";
import "./PlusLessButtons.css";

const PlusLessButtons = ({ data, uploadAndUpdateCart }) => {
  return (
    <React.Fragment>
      <button
        className="btn btn-sm btn-intersys-btn"
        onClick={() => {
          removeProductFromCart(data._id, uploadAndUpdateCart);
        }}
      >
        -
      </button>
      <div className="my-rectangle my-auto">{data.quantity}</div>
      <button
        className="btn btn-sm btn-intersys-btn"
        onClick={() => {
          if (data.stock >= data.quantity + 1) {
            addProductToCart(data, data._id, uploadAndUpdateCart);
          } else {
            //WIP: Set alert, without stock
          }
        }}
      >
        +
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { uploadAndUpdateCart }
)(PlusLessButtons);
