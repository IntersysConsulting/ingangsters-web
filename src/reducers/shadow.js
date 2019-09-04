import * as types from "../actions/types/shadow";

export default (state = {}, action) => {
  switch (action.type) {
    case types.HIDE_SHADOW:
      console.log("HIDE");
      return Object.assign({}, state, {
        active: false,
        outEffect: true
      });

    case types.SHOW_SHADOW:
      console.log("SHOW");
      return Object.assign({}, state, {
        active: true,
        outEffect: false
      });

    default:
      return state;
  }
};
