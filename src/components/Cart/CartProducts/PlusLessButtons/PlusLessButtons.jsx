import React from "react";
import { connect } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../ProductsManager";
import { uploadAndUpdateCart } from "../../../../actions/creators/cart";
import { createNotificationInfo } from "../../../../actions/creators/notification";
import { idNotificationGenerator } from "../../../../utils/idGenerator";
import "./PlusLessButtons.css";

const PlusLessButtons = ({
  data,
  uploadAndUpdateCart,
  createNotificationInfo
}) => {
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
            createNotificationInfo(
              idNotificationGenerator(),
              "We are sorry",
              "That is all our stock"
            );
          }
        }}
      >
        +
      </button>
    </React.Fragment>
  );
};

export default connect(
  null,
  { uploadAndUpdateCart, createNotificationInfo }
)(PlusLessButtons);
