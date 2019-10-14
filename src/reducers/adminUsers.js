import * as types from "../actions/types/adminUsers";

const initialState = {
  adminList: [],
  fetching_users: false,
  finishedFetching_users: false,
  totalUsers: 0,
  usersPerPage: 0,
  currentPage_users: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ADMIN_USER:
      return Object.assign({}, state, { adminList: action.adminUserList });

    case types.FETCHING_ADMIN_USERS:
      return Object.assign({}, state, { fetching_users: true });

    case types.FINISHED_FETCHING_ADMIN_USERS:
      return Object.assign({}, state, {
        fetching_users: false,
        finishedFetching_users: true,
        totalUsers: action.totalUsers,
        usersPerPage: action.usersPerPage,
        currentPage_users: action.currentPage
      });

    case types.UPADTE_PAGINATOR:
      return Object.assign({}, state, {
        totalUsers: action.totalUsers,
        usersPerPage: action.usersPerPage,
        currentPage_users: action.currentPage
      });

    case types.ADMIN_GET_SEARCH_USERS:
      return Object.assign({}, state, {
        adminList: action.payload,
        totalUsers: action.payload.length,
        currentPage_users: 1
      });
    case types.GET_ADMIN_USER:
      return Object.assign({}, state, {
        adminList: action.payload.data
      });

    case types.ADMIN_USERS_ERROR:
      return Object.assign({}, state, {
        adminList: action.payload
      });

    default:
      return state;
  }
};
