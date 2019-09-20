import * as types from "../types/cart";

export function addProductToCart(ProductData) {
  return { type: types.ADD_PRODUCT, ProductData };
}
