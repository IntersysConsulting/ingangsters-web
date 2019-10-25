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
