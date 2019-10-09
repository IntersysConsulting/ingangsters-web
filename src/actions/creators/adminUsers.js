import * as types from "../types/adminUsers";
import { API } from "../../config";
import axios from "axios";

export const updateAdminUsers = adminUserList => ({
  type: types.UPDATE_ADMIN_USER,
  adminUserList
});

export const startFetchAdminUsers = () => ({
  type: types.FETCHING_ADMIN_USERS
});

export const endFetchAdminUsers = (totalUsers, usersPerPage, currentPage) => ({
  type: types.FINISHED_FETCHING_ADMIN_USERS,
  totalUsers,
  usersPerPage,
  currentPage
});

export const updatePaginator = (totalUsers, usersPerPage, currentPage) => ({
  type: types.UPADTE_PAGINATOR,
  totalUsers,
  usersPerPage,
  currentPage
});

export const fetchAdminUsers = pageRequested => async dispatch => {
  const numberOfUsers = window.innerWidth <= 550 ? 10 : 20;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/admin/${numberOfUsers}/${pageRequested}`;
  try {
    dispatch(startFetchAdminUsers());
    const result = await axios.get(endpoint, config);
    const { adminUsers, total_admin_users } = result.data.data;
    dispatch(updateAdminUsers(adminUsers));
    dispatch(
      endFetchAdminUsers(total_admin_users, numberOfUsers, pageRequested)
    );
  } catch (err) {
    console.log(err);
  }
};
