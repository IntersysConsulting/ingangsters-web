import * as types from "../actions/types/adminProducts";

export default (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return Object.assign({}, state, { list: action.newProductList });

    case types.FETCHING_PRODUCTS:
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      console.log("FINISH");
      return Object.assign({}, state, { fetching: false });

    default:
      return state;
  }
};
