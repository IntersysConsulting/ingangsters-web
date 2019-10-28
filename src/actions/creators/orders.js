import * as types from "../types/orders";
import { async } from "q";
import axios from "axios";
import { API } from "../../config";

export const createOrder = (
  isUser,
  user,
  billingAddress,
  shippingAddress,
  itemsList
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  let body = {};
  if (isUser) {
    let body = {
      userId: user,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      items: itemsList
    };
  } else {
    let body = {
      name: user.name,
      email: user.email,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      items: itemsList
    };
  }

  try {
    await axios.post(`${API}/orders/create`, body, config);
  } catch (err) {
    console.log(err.response);
  }
};
