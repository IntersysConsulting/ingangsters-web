import * as types from "../types/adminProducts";
import { API } from "../../config";
import axios from "axios";
import store from "../../store";

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

export const enablePriceLTHFilter = () => ({
  type: types.ADMIN_ENABLE_PRICE_LTH
});

export const enablePriceHTLFilter = () => ({
  type: types.ADMIN_ENABLE_PRICE_HTL
});

export const disablePriceFilter = () => ({
  type: types.ADMIN_DISABLE_PRICE
});

export const enableNameAZFilter = () => ({
  type: types.ADMIN_ENABLE_NAME_AZ
});

export const enableNameZAFilter = () => ({
  type: types.ADMIN_ENABLE_NAME_ZA
});

export const disnableNameFilter = () => ({
  type: types.ADMIN_DISABLE_NAME
});

export const enableShippableTrueFilter = () => ({
  type: types.ADMIN_ENABLE_SHIPPABLE_TRUE
});

export const enableShippableFalseFilter = () => ({
  type: types.ADMIN_ENABLE_SHIPPABLE_FALSE
});

export const disableShippableFilter = () => ({
  type: types.ADMIN_DISABLE_SHIPPABLE
});

export const enableStockLTHFilter = () => ({
  type: types.ADMIN_ENABLE_STOCK_LTH
});

export const enableStockHTLFilter = () => ({
  type: types.ADMIN_ENABLE_STOCK_HTL
});

export const disableStockFilter = () => ({
  type: types.ADMIN_DISABLE_STOCK
});

export const enableAvailableTrueFilter = () => ({
  type: types.ADMIN_ENABLE_AVAILABLE_TRUE
});

export const enableAvailableFalseFilter = () => ({
  type: types.ADMIN_ENABLE_AVAILABLE_FALSE
});

export const disableAvailableFilter = () => ({
  type: types.ADMIN_DISABLE_AVAILABLE_FILTER
});

export const clearFilters = () => ({
  type: types.ADMIN_CLEAR_FILTERS
});

export const adminSearchProduct = params => async dispatch => {
  const query = params;
  const AuthStr = `Bearer ${localStorage.getItem("token")}`;
  let config = {
    headers: { Authorization: AuthStr }
  };

  try {
    const res = await axios.get(
      `${API}/admin/products/search?search=` + query,
      config
    );
    dispatch({
      type: types.ADMIN_GET_SEARCH_PRODUCTS,
      payload: res.data.data
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: types.ADMIN_PRODUCT_NO_FOUND,
      payload: error
    });
  }
};

function getFilterParams() {
  const filtersConfig = store.getState().adminProducts.filtersStatus;
  const params = {
    sortPrice: "NONE",
    sortName: "NONE",
    sortStock: "NONE",
    shippable: "NONE",
    available: "NONE"
  };

  if (filtersConfig.priceLTH) params.sortPrice = "ASCENDING";
  else if (filtersConfig.priceHTL) params.sortPrice = "DESCENDING";

  if (filtersConfig.nameAZ) params.sortName = "ASCENDING";
  else if (filtersConfig.nameZA) params.sortName = "DESCENDING";

  if (filtersConfig.stockLTH) params.sortStock = "ASCENDING";
  else if (filtersConfig.stockHTL) params.sortStock = "DESCENDING";

  if (filtersConfig.availableTrue) params.available = "TRUE";
  else if (filtersConfig.availableFalse) params.available = "FALSE";

  if (filtersConfig.shippableTrue) params.shippable = "TRUE";
  else if (filtersConfig.shippableFalse) params.shippable = "FALSE";
  return params;
}

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
