import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGINADMIN_SUCCESS,
  LOGIN_ADMINFAIL,
  GET_USER,
  AUTH_ERROR,
  CONFIRM_PASSWORD_SUCCESS,
  CONFIRM_PASSWORD_FAIL
} from "../actions/types/auth";
import { isAuthenticated } from "../utils/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: isAuthenticated(),
  loading: true,
  user: null,
  confirmed_password: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };
    case LOGINADMIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        ...payload,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGIN_ADMINFAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload,
        user: null
      };
    case CONFIRM_PASSWORD_SUCCESS:
      return {
        ...state,
        confirmed_password: true
      };
    case CONFIRM_PASSWORD_FAIL:
      return {
        ...state,
        confirmed_password: false
      };
    default:
      return state;
  }
}
