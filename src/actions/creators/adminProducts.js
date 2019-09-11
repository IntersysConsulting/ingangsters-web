import * as types from "../types/adminProducts";
<<<<<<< HEAD
import { API } from "../../config";
import axios from "axios";
=======
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1

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
<<<<<<< HEAD

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
=======
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1
