import * as types from "../types/samples";

export function performAction1() {
  // Reset number
  return { type: types.ACTION_1 };
}

export function performAction2(actionData) {
  // Increase number
  return { type: types.ACTION_2, actionData };
}

export function performAction3(theNewString) {
  // Set a new string
  return { type: types.ACTION_3, theNewString };
}
