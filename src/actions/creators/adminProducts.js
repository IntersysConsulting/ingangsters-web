import * as types from "../types/adminProducts";
import { API } from "../../config";
import axios from "axios";
import { getFilterParams, setSearch } from "../creators/filters";
export const updateAdminProducts = newProductList => ({
  type: types.UPDATE_PRODUCTS,
  newProductList
});

export const startFetchProducts = () => ({
  type: types.FETCHING_PRODUCTS
});

export const endFetchProducts = (totalItems, itemsPerPage, currentPage) => ({
  type: types.FINISHED_FETCHING_PRODUCTS,
  totalItems,
  itemsPerPage,
  currentPage
});

export const updatePaginator = (totalItems, itemsPerPage, currentPage) => ({
  type: types.UPADTE_PAGINATOR,
  totalItems,
  itemsPerPage,
  currentPage
});

export const adminSearchProduct = params => async dispatch => {
  const query = params;
  dispatch(setSearch(query));
  fetchProducts(1)(dispatch);
};

export const fetchProducts = pageRequested => async dispatch => {
  const numberOfProducts = window.innerWidth <= 550 ? 10 : 20;
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    params: getFilterParams()
  };
  const endpoint = `${API}/products/${numberOfProducts}/${pageRequested}`;
  try {
    dispatch(startFetchProducts());
    const result = await axios.get(endpoint, config);
    const { products, total_products } = result.data.data;
    dispatch(updateAdminProducts(products));
    dispatch(endFetchProducts(total_products, numberOfProducts, pageRequested));
  } catch (err) {
    console.log(err);
  }
};
