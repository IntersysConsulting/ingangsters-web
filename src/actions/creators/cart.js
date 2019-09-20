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
    body = {
      items: actualCart
    };
    for (var i = 0; i < actualCart.length; i++) {
      totalItems += actualCart[i].quantity;
      greatTotalPrice += actualCart[i].price * actualCart[i].quantity;
    }
  }
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "aplicattion/json",
      Authorization: "Bearer " + token
    }
  };
  try {
    dispatch(updateCart(totalItems, greatTotalPrice));
    if (token) {
      console.log("Body: ", body);
      const result = await axios.post(`${API}/cart`, body, config);
      console.log("Result: " + result);
    }
  } catch (err) {
    console.log(err.response);
  }
};
