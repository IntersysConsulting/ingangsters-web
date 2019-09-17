import * as types from "../actions/types/AdminTabBar";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_ADMINBAR_BUTTON:
      return Object.assign({}, state, {
        activeButton: action.newButton
      });
    default:
      return state;
  }
};
