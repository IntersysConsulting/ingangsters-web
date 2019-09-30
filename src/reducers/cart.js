import * as types from "../actions/types/cart";

export default (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CART:
      return Object.assign({}, state, {
        cartItems: action.numItems,
        total: action.total
      });
    default:
      return state;
  }
};
