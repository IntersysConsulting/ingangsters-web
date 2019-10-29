import * as types from "../actions/types/adminOrders";

const initialState = {
  list: [],
  fetching: false,
  finishedFetch: false,
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 0,
  statusList: [],
  statusFilter: null
};

export default function(currentState = initialState, action) {
  switch (action.type) {
    case types.ADMIN_BEGIN_FETCH_ORDERS:
      return {
        ...currentState,
        fetching: true,
        finishedFetch: false,
        list: []
      };

    case types.ADMIN_UPDATE_ORDER_LIST:
      return {
        ...currentState,
        fetching: false,
        finishedFetch: true,
        list: action.newList,
        totalItems: action.totalItems,
        itemsPerPage: action.itemsPerPage,
        currentPage: action.currentPage
      };

    case types.ADMIN_SET_STATUS_LIST:
      return {
        ...currentState,
        statusList: action.newList
      };

    case types.ADMIN_SET_ACTIVE_STATUS_FILTER:
      return {
        ...currentState,
        statusFilter: action.newStatus
      };

    case types.ADMIN_CLEAR_STATUS_FILTER:
      return {
        ...currentState,
        statusFilter: initialState.statusFilter
      };

    default:
      return currentState;
  }
}
