import * as types from "../actions/types/modal";

const initialState = {
  active: false,
  outEffect: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_MODAL:
      //console.log("Hide modal");
      return Object.assign({}, state, {
        active: false,
        outEffect: true
      });
    case types.SHOW_MODAL:
      //console.log("Show modal");
      return Object.assign({}, state, {
        active: true,
        outEffect: false
      });
    default:
      return state;
  }
};
