import * as types from "../types/modal";

export function showModal() {
  return { type: types.SHOW_MODAL };
}

export function hideModal() {
  return { type: types.HIDE_MODAL };
}
