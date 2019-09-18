import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGINADMIN_SUCCESS,
  LOGIN_ADMINFAIL
} from "../actions/types/auth";
import { isAuthenticated } from "../utils/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: isAuthenticated(),
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case LOGINADMIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        ...payload,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
    case LOGIN_ADMINFAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
