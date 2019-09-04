import * as types from "../types/navBar";

export function setMouseOverAccountButton(isOverButton) {
  return { type: types.SET_MOUSE_OVER_ACCOUNT_BUTTON, isOverButton };
}

export function setMouseOverCartButton(isOverButton) {
  return { type: types.SET_MOUSE_OVER_CART_BUTTON, isOverButton };
}

export function setAccountButtonClicked() {
  return { type: types.ACCOUNT_BUTTON_CLICKED };
}

export function shadowClicked() {
  return { type: types.SHADOW_CLICKED };
}
