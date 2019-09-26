import * as types from "../actions/types/navBar";

export default (state = {}, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU_RESPONSIVE:
      return Object.assign({}, state, {
        responsiveMenuActive: !state.responsiveMenuActive
      });
    default:
      return state;
  }
};
