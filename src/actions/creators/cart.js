import * as types from "../types/cart";
import axios from "axios";
import { API } from "../../config";

export function addProductToCart(ProductData) {
  return { type: types.ADD_PRODUCT, ProductData };
}

export const getProductById = id => async dispatch => {
  try {
    const body = JSON.stringify({ _id: id });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    console.log(`${API}/products/single`);
    axios
      .post(`${API}/products/single`, body, config)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
};
