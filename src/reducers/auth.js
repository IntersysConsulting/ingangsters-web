import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGINADMIN_SUCCESS,
  LOGIN_ADMINFAIL,
  GET_USER,
  AUTH_ERROR
} from "../actions/types/auth";
import { isAuthenticated } from "../utils/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: isAuthenticated(),
  loading: true,
  user: null
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
        error: payload
      };
    default:
      return state;
  }
}
