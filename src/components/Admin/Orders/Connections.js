import axios from "axios";
import { API } from "../../../config";
import {
  startFetchingOrders,
  updateOrdersList,
  setStatusList
} from "../../../actions/creators/adminOrders";
import store from "../../../store";
import { createNotificationError } from "../../../actions/creators/notification";
import { idNotificationGenerator } from "../../../utils/idGenerator";

export async function updateOrderStatus(orderId, newStatus, reload) {
  const endpoint = `${API}/orders/change/${orderId}/to/${newStatus}`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  try {
    const res = await axios.post(endpoint, {}, config);
    if (res.status === 200) {
      reload();
    } else {
      createNotificationError(
        idNotificationGenerator(),
        "We are sorry",
        "Something went wrong"
      )(store.dispatch);
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "An error ocurred",
      "Try again later"
    )(store.dispatch);
  }
}

export const fetchOrders = async (
  page,
  targetStatus,
  dispatch,
  orderByDate = 0
) => {
  dispatch(startFetchingOrders());
  const ordersPerPage = 12;
  const endpoint = `${API}/orders/list/${ordersPerPage}/${page}`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    params: {
      dateOrder: orderByDate,
      status: targetStatus
    }
  };
  try {
    const res = await axios.get(endpoint, config);
    const statusList = await getStatusList();
    if (res.status === 200) {
      dispatch(
        updateOrdersList(
          res.data.data.orders,
          res.data.data.total_orders,
          ordersPerPage,
          page
        )
      );
      dispatch(setStatusList(statusList));
    } else {
      createNotificationError(
        idNotificationGenerator(),
        "We are sorry",
        "Something went wrong"
      )(store.dispatch);
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "An error ocurred",
      "Try again later"
    )(store.dispatch);
  }
};

const getStatusList = async () => {
  const endpoint = `${API}/orders/statusList`;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  try {
    const res = await axios.get(endpoint, config);
    return res.data.data;
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "An error ocurred",
      "Try again later"
    )(store.dispatch);
    return [];
  }
};
