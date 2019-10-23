// import axios from "axios";

export function updateOrderStatus(orderId, newStatus) {
  console.log("Changing " + orderId + " to " + newStatus);
}

export const fetchOrders = page => dispatch => {
  console.log("Fetching page " + page + "....");
};
