import * as types from "../types/adminOrders";

export function startFetchingOrders() {
  return {
    type: types.ADMIN_BEGIN_FETCH_ORDERS
  };
}

export function updateOrdersList(
  orders,
  totalItems,
  itemsPerPage,
  currentPage
) {
  return {
    type: types.ADMIN_UPDATE_ORDER_LIST,
    newList: orders,
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    currentPage: currentPage
  };
}

export const setStatusList = newList => ({
  type: types.ADMIN_SET_STATUS_LIST,
  newList: newList
});

export const setActiveStatusFilter = status => ({
  type: types.ADMIN_SET_ACTIVE_STATUS_FILTER,
  newStatus: status
});

export const clearStatusFilter = () => ({
  type: types.ADMIN_CLEAR_STATUS_FILTER
});
