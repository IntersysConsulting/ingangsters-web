import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_SEARCH_PRODUCTS,
  PRODUCTS_NOT_FOUND
} from "../types/products";
import axios from "axios";
import { API } from "../../config";

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get(`${API}/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCTS_ERROR,
      payload: err
    });
  }
};

export const searchProducts = params => async dispatch => {
  const query = params;
  try {
    const res = await axios.get(`${API}/products/search`, {
      params: {
        search: query
      }
    });
    dispatch({
      type: GET_SEARCH_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCTS_NOT_FOUND,
      payload: error
    });
  }
};
