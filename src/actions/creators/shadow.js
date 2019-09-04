import * as types from "../types/shadow";

export function hideShadow() {
  return { type: types.HIDE_SHADOW };
}

export function showShadow() {
  return { type: types.SHOW_SHADOW };
}
