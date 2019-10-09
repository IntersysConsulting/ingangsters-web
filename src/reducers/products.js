import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_SEARCH_PRODUCTS,
  PRODUCTS_NOT_FOUND
} from "../actions/types/products";

const initialState = {
  products: [],
  product: null,
  searchProducts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload.data,
        loading: false
      };

    case GET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: payload.data,
        loading: false
      };

    case PRODUCTS_NOT_FOUND:
      return {
        ...state,
        searchProducts: [],
        loading: false,
        error: payload
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        products: payload,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
}
