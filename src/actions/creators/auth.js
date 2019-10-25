import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGINADMIN_SUCCESS,
  LOGIN_ADMINFAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  GET_USER,
  AUTH_ERROR,
  CONFIRM_PASSWORD_SUCCESS,
  CONFIRM_PASSWORD_FAIL
} from "../../actions/types/auth";
import axios from "axios";
import { API } from "../../config";
import {
  createNotificationError,
  createNotificationSuccess
} from "./notification";
import { idNotificationGenerator } from "../../utils/idGenerator";

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
    dispatch(
      createNotificationSuccess(
        idNotificationGenerator(),
        "Valid credentials",
        "Login successful"
      )
    );
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
    dispatch(
      createNotificationError(
        idNotificationGenerator(),
        "Login fail",
        "Invalid credentials"
      )
    );
  }
};

export const checkPassword = password => async dispatch => {
  const AuthStr = `Bearer ${localStorage.getItem("token")}`;
  const body = JSON.stringify({ password });
  console.log(body);
  try {
    const res = await axios.post(`${API}/admin/confirm`, body, {
      headers: { "Content-Type": "application/json", Authorization: AuthStr }
    });
    dispatch({
      type: CONFIRM_PASSWORD_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CONFIRM_PASSWORD_FAIL
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
    dispatch(
      createNotificationError(
        idNotificationGenerator(),
        "Login fail",
        "Invalid credentials"
      )
    );
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
  if (localStorage.token) {
    try {
      const AuthStr = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.get(`${API}/user`, {
        headers: { Authorization: AuthStr }
      });
      dispatch({
        type: GET_USER,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
        payload: err
      });
    }
  } else {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
