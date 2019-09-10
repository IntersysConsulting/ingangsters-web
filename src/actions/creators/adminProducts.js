import * as types from "../types/adminProducts";

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
