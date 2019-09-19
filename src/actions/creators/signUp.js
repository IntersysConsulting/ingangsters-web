import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../../actions/types/signUp";
import axios from "axios";
import { API } from "../../config";

export async function signUp(name, email, password, phone) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password, phone });
  try {
    const res = await axios.post(`${API}/user/signup`, body, config);
    return {
      type: SIGNUP_SUCCESS,
      payload: res.data,
      status: 201
    };
  } catch (err) {
    console.log(err);
    return {
      type: SIGNUP_FAIL,
      status: err.response.status
    };
  }
}
