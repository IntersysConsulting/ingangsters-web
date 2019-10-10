import * as types from "../actions/types/adminProducts";

const initialState = {
  list: [],
  fetching: false,
  finishedFetching: false,
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return Object.assign({}, state, { list: action.newProductList });

    case types.FETCHING_PRODUCTS:
      return Object.assign({}, state, { fetching: true });

    case types.FINISHED_FETCHING_PRODUCTS:
      return Object.assign({}, state, {
        fetching: false,
        finishedFetching: true,
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      });

    case types.UPADTE_PAGINATOR:
      return Object.assign({}, state, {
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      });

    case types.ADMIN_GET_SEARCH_PRODUCTS:
      return Object.assign({}, state, {
        list: action.payload,
        totalItems: action.payload.length,
        currentPage: 1
      });
    default:
      return state;
  }
};
