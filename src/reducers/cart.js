import * as types from "../actions/types/cart";

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return Object.assign({}, state, {
        ...state,
        products: action.ProductData
      });
    default:
      return state;
  }
};
