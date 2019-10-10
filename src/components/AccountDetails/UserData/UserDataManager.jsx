import axios from "axios";
import { API } from "../../../config";

export const updateUserData = async userData => {
  try {
    const body = JSON.stringify({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      addresses: userData.addresses
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const res = await axios.put(`${API}/user/update`, body, config);
    if (res.status === 200) {
      window.location.reload();
    }
  } catch (err) {
    console.log(err.response);
  }
};
