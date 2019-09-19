import * as types from "../actions/types/shadow";

const initialState = {
  active: false,
  outEffect: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_SHADOW:
<<<<<<< development
=======
      //console.log("HIDE");
>>>>>>> Responsive modal and the respective labels appears
      return Object.assign({}, state, {
        active: false,
        outEffect: true
      });

    case types.SHOW_SHADOW:
<<<<<<< development
=======
      //console.log("SHOW");
>>>>>>> Responsive modal and the respective labels appears
      return Object.assign({}, state, {
        active: true,
        outEffect: false
      });

    default:
      return state;
  }
};
