import axios from "axios";
import { API } from "../config";

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  return localStorage.getItem("token") ? true : false;
};

export const isAdmin = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const res = await axios.post(`${API}/admin/check`, {}, config);
    console.log("res:", res.data.isAdmin);
    return res.data.isAdmin;
  } catch (err) {
    console.log(err);
    return false;
  }
};
