import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGINADMIN_SUCCESS,
  LOGIN_ADMINFAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  GET_USER,
  AUTH_ERROR
} from "../../actions/types/auth";
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

export const adminLogin = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${API}/admin/login`, body, config);
    dispatch({
      type: LOGINADMIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_ADMINFAIL
    });
  }
};

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

export const getUser = () => async dispatch => {
  try {
    const AuthStr = `Bearer ${localStorage.getItem("token")}`;
    const res = await axios.get("http://127.0.0.1:5000/user/", {
      headers: { Authorization: AuthStr }
    });
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
      payload: err
    });
  }
};
