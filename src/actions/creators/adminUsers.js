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
  const numberOfUsers = window.innerWidth <= 550 ? 3 : 3;
  const AuthStr = `Bearer ${localStorage.getItem("token")}`;

  const endpoint = `${API}/admin/${numberOfUsers}/${pageRequested}`;
  try {
    dispatch(startFetchAdminUsers());
    const result = await axios.get(endpoint, {
      headers: { "Content-Type": "application/json", Authorization: AuthStr }
    });

    const adminUsers = result.data.data.admin_users;
    const total_admin_users = result.data.data.total_users;

    console.log(total_admin_users);
    dispatch(updateAdminUsers(adminUsers));
    dispatch(
      endFetchAdminUsers(total_admin_users, numberOfUsers, pageRequested)
    );
  } catch (err) {
    console.log(err);
  }
};

export const getAdminUsers = () => async dispatch => {
  const AuthStr = `Bearer ${localStorage.getItem("token")}`;
  try {
    const res = await axios.get(`${API}/admin/users`, {
      headers: { "Content-Type": "application/json", Authorization: AuthStr }
    });
    dispatch({
      type: types.GET_ADMIN_USER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.ADMIN_USERS_ERROR,
      payload: err
    });
  }
};
