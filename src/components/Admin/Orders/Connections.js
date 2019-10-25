import axios from "axios";
import { API } from "../../../config";
import {
  startFetchingOrders,
  updateOrdersList
} from "../../../actions/creators/adminOrders";

export async function updateOrderStatus(orderId, newStatus) {
  const endpoint = `${API}/orders/change/${orderId}/to/${newStatus}`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  try {
    const res = await axios.post(endpoint, {}, config);
    if (res.status === 200) {
      window.location.reload();
    } else {
      alert("Something was wrong");
    }
  } catch (err) {
    alert("An error occurred, try again later.");
  }
}

export const fetchOrders = page => async dispatch => {
  dispatch(startFetchingOrders());
  const ordersPerPage = 12;
  const endpoint = `${API}/orders/list/${ordersPerPage}/${page}`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  try {
    const res = await axios.get(endpoint, config);
    if (res.status === 200) {
      dispatch(
        updateOrdersList(
          res.data.data.orders,
          res.data.data.total_orders,
          ordersPerPage,
          page
        )
      );
    } else {
      alert("Something happened");
    }
  } catch (err) {
    alert("An error occurred...");
  }
};
