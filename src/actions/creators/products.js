import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_SEARCH_PRODUCTS,
  PRODUCTS_NOT_FOUND,
  GET_FILTERED_PRODUCTS
} from "../types/products";
import { SEARCH_PRODUCTS, ORDER_BY_CLEAR_ALL } from "../types/filters";
import axios from "axios";
import { getFilterParams } from "../creators/filters";
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
    dispatch({
      type: SEARCH_PRODUCTS,
      data: query
    });
    dispatch({
      type: ORDER_BY_CLEAR_ALL
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCTS_NOT_FOUND,
      payload: error
    });
  }
};

export const getFilteredProducts = search => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    params: getFilterParams()
  };
  try {
    dispatch({
      type: SEARCH_PRODUCTS,
      data: search
    });
    const endpoint = `${API}/products/filter`;
    const res = await axios.get(endpoint, config);
    const products = res.data;
    dispatch({
      type: GET_FILTERED_PRODUCTS,
      payload: products
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCTS_NOT_FOUND,
      payload: error
    });
  }
};
