import * as types from "../actions/types/checkout";

export default (state = {}, action) => {
  switch (action.type) {
    case types.DISPLAY_PAYMENT_METHODS:
      return Object.assign({}, state, {
        displayPaymentMethods: true
      });
    default:
      return state;
  }
};
