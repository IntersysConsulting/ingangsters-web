import * as types from "../actions/types/adminProducts";

<<<<<<< HEAD
const initialState = {
  list: [],
  fetching: false,
  finishedFetching: false
};

export default (state = initialState, action) => {
=======
export default (state = {}, action) => {
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return Object.assign({}, state, { list: action.newProductList });

    case types.FETCHING_PRODUCTS:
<<<<<<< HEAD
      console.log("Fetch start");
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      console.log("Fetch end");
      return Object.assign({}, state, {
        fetching: false,
        finishedFetching: true
      });
=======
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      console.log("FINISH");
      return Object.assign({}, state, { fetching: false });
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1

    default:
      return state;
  }
};
