import { GET_PRODUCTS, PRODUCTS_ERROR } from "../actions/types/products";

const initialState = {
  products: [],
  product: null,
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

    case PRODUCTS_ERROR:
      return {
        ...state,
        products: payload,
        loading: false
      };

    default:
      return state;
  }
}
