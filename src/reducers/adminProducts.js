import * as types from "../actions/types/adminProducts";

const initialState = {
  list: [],
  fetching: false,
  finishedFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return Object.assign({}, state, { list: action.newProductList });

    case types.FETCHING_PRODUCTS:
      console.log("Fetch start");
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      console.log("Fetch end");
      return Object.assign({}, state, {
        fetching: false,
        finishedFetching: true
      });

    default:
      return state;
  }
};
