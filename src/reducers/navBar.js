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

    case types.ACCOUNT_BUTTON_CLICKED:
      return Object.assign({}, state, {
        accountButtonActive: true,
        shadowOut: false
      });

    case types.SHADOW_CLICKED:
      return Object.assign({}, state, {
        accountButtonActive: false,
        shadowOut: true
      });

    default:
      return state;
  }
};
