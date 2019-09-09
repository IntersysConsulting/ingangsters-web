import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../actions/types/auth";
import axios from "axios";
import { API } from "../../config";

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${API}/user/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
