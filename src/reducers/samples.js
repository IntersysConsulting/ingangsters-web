import * as types from "../actions/types/samples";

export default (state = {}, action) => {
  switch (action.type) {
    case types.ACTION_1:
      return Object.assign({}, state, { myNumber: 10 });

    case types.ACTION_2:
      const newState = Object.assign({}, state);
      newState.myNumber++;
      return newState;

    case types.ACTION_3:
      return Object.assign({}, state, { myString: action.theNewString });
    default:
      return state;
  }
};
