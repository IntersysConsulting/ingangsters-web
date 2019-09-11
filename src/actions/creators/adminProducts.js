import * as types from "../types/adminProducts";
import { API } from "../../config";
import axios from "axios";

export const updateAdminProducts = newProductList => ({
  type: types.UPDATE_PRODUCTS,
  newProductList
});

export const startFetchProducts = () => ({
  type: types.FETCHING_PRODUCTS
});

export const endFetchProducts = () => ({
  type: types.FINISHED_FETCHING_PRODUCTS
});

export const fetchProducts = pageRequested => async dispatch => {
  const numberOfProducts = window.innerWidth <= 550 ? 10 : 20;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/products/${numberOfProducts}/${pageRequested}`;
  try {
    dispatch(startFetchProducts());
    console.log("GET " + endpoint);
    const result = await axios.get(endpoint, config);
    const { products } = result.data.data;
    dispatch(updateAdminProducts(products));
    dispatch(endFetchProducts());
  } catch (err) {
    console.log(err);
  }
};
