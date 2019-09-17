import { GET_PRODUCTS, PRODUCTS_ERROR } from "../types/products";
import axios from "axios";

// Get products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("https://www.reddit.com/r/reactjs.json");
    console.log("getProducts() from creators", res);
    dispatch({
      type: GET_PRODUCTS,
      payload: res
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
