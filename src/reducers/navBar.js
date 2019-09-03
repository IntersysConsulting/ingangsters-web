import * as types from "../actions/types/navBar";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_MOUSE_OVER_ACCOUNT_BUTTON:
      return Object.assign({}, state, {
        mouseOverAccountButton: action.isOverButton
      });
    case types.SET_MOUSE_OVER_CART_BUTTON:
      return Object.assign({}, state, {
        mouseOverCartButton: action.isOverButton
      });
    default:
      return state;
  }
};
