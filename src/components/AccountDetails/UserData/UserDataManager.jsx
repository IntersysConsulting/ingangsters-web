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

export const changeMyPassword = async passwordsObject => {
  var passwordChanged = false;
  try {
    const body = JSON.stringify({
      oldpassword: passwordsObject.oldpassword,
      newpassword1: passwordsObject.newpassword1,
      newpassword2: passwordsObject.newpassword2
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const res = await axios.put(`${API}/user/changepassword`, body, config);
    if (res.status === 200) {
      passwordChanged = true;
      return passwordChanged;
    } else {
      return passwordChanged;
    }
  } catch (err) {
    console.log(err.response);
  }
};
