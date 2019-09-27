import * as types from "../types/cart";
import { API } from "../../config";
import axios from "axios";

export const updateCart = (numItems, total) => ({
  type: types.UPDATE_CART,
  numItems,
  total
});

export const uploadAndUpdateCart = () => async dispatch => {
  var totalItems = 0;
  var greatTotalPrice = 0;
  var body = {
    items: JSON.stringify([])
  };
  const actualCart = JSON.parse(localStorage.getItem("cart"));
  if (actualCart) {
    body = JSON.stringify({ items: actualCart });

    for (var i = 0; i < actualCart.length; i++) {
      totalItems += actualCart[i].quantity;
      greatTotalPrice += actualCart[i].price * actualCart[i].quantity;
    }
  }
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  };
  try {
    dispatch(updateCart(totalItems, greatTotalPrice));
    if (token) {
      await axios.post(`${API}/cart`, body, config).then(function(response) {
        if (response.status === 200) {
        }
      });
    }
  } catch (err) {
    console.log(err.response);
  }
};

export const updateCartStore = () => async dispatch => {
  var totalItems = 0;
  var greatTotalPrice = 0;

  const actualCart = JSON.parse(localStorage.getItem("cart"));
  if (actualCart) {
    for (var i = 0; i < actualCart.length; i++) {
      totalItems += actualCart[i].quantity;
      greatTotalPrice += actualCart[i].price * actualCart[i].quantity;
    }
  }
  try {
    dispatch(updateCart(totalItems, greatTotalPrice));
  } catch (err) {
    console.log(err.response);
  }
};
