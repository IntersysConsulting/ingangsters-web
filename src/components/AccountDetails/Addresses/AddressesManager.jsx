import axios from "axios";
import { API } from "../../../config";

export const deleteAddressAt = async (position, userData) => {
  userData.addresses.splice(position, 1);

  updateMyAddresses(userData);
};

export const addAddress = async (newAddressObject, userData) => {
  var userAddresses = userData.addresses;
  var aliasExists = false;
  for (var i = 0; i < userAddresses.length; i++) {
    if (newAddressObject === userAddresses[i].alias) {
      aliasExists = true;
    }
  }

  if (!aliasExists) {
    userData.addresses.push(newAddressObject);
  }
  updateMyAddresses(userData);
};

export const modifyAddressAt = async (position, newAddressObject, userData) => {
  userData.addresses[position] = newAddressObject;

  updateMyAddresses(userData);
};

const updateMyAddresses = async userData => {
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
