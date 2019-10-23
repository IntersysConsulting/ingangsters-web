import * as types from "../actions/types/adminOrders";

const initialState = {
  list: [],
  fetching: false,
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 0
};

export default function(currentState, action) {
  switch (action.type) {
    case types.ADMIN_BEGIN_FETCH_ORDERS:
      return {
        ...currentState,
        fetching: true
      };

    case types.ADMIN_UPDATE_ORDER_LIST:
      return {
        ...currentState,
        fetching: false,
        list: action.newList,
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      };

    default:
      return currentState;
  }
}
