import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types/auth";
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
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        ...payload,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
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
