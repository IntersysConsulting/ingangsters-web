import { API } from "../../../../config";
import axios from "axios";
import store from "../../../../store";
import {
  createNotificationSuccess,
  createNotificationError,
  createNotificationInfo
} from "../../../../actions/creators/notification";
import { idNotificationGenerator } from "../../../../utils/idGenerator";

export async function loadAdmin(id, setData) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/admin/get`;
  const body = {
    _id: id
  };
  try {
    const res = await axios.post(endpoint, body, config);
    if (res.status === 200) {
      const fullName = res.data.data.name.split(" ");
      const firstName = fullName.shift();
      setData(prev => ({
        ...prev,
        showDeleteButton: true,
        title: "Update Administrator",
        name: firstName,
        lastName: fullName.join(" "),
        email: res.data.data.email,
        submitAction: evt => {
          updateAdmin(evt, id);
        },
        isLoading: false,
        requirePassword: false
      }));
    }
  } catch (err) {
    window.location.replace("/404");
  }
}

export async function deleteAdmin(id) {
  const endpoint = `${API}/admin/delete`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    data: {
      _id: id
    }
  };
  try {
    const res = await axios.delete(endpoint, config);
    if (res.status === 200) {
      createNotificationSuccess(
        idNotificationGenerator(),
        "Admin deleted",
        "Saved successfully"
      )(store.dispatch);
      setTimeout((window.location.replace("/admin/dashboard"), 5000));
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "Something went wrong",
      "The user wasn't deleted, try again later"
    )(store.dispatch);
  }
}

export async function createNewAdmin(evt) {
  const name = [
      evt.target["merchantName"].value,
      evt.target["merchantLastName"].value
    ].join(" "),
    email = evt.target["merchantEmail"].value,
    password1 = evt.target["merchantPassword"].value,
    password2 = evt.target["merchantPasswordConfirm"].value;

  if (password1 !== password2) {
    createNotificationInfo(
      idNotificationGenerator(),
      "Passwords must match",
      "Please check the fields"
    );
    evt.target["merchantPasswordConfirm"].focus();
  } else {
    const endpoint = `${API}/admin/create`;
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };
    const data = {
      name: name,
      email: email,
      password: password1
    };
    try {
      const res = await axios.post(endpoint, data, config);
      if (res.status === 200) {
        createNotificationSuccess(
          idNotificationGenerator(),
          "Admin created",
          "Admin user created successfully"
        )(store.dispatch);
        setTimeout((window.location.pathname = "admin/dashboard"), 5000);
      } else {
        createNotificationError(
          idNotificationGenerator(),
          "Something went wrong",
          "Admin user was not created, try again later"
        )(store.dispatch);
        setTimeout(window.location.reload(), 5000);
      }
    } catch (err) {
      createNotificationError(
        idNotificationGenerator(),
        "Something went wrong",
        "Try again later"
      )(store.dispatch);
    }
  }
}

export async function updateAdmin(evt, id) {
  const password1 = evt.target["merchantPassword"].value,
    password2 = evt.target["merchantPasswordConfirm"].value;

  if (password1 !== password2) {
    createNotificationInfo(
      idNotificationGenerator(),
      "Passwords must match",
      "Please check the fields"
    );
    evt.target["merchantPasswordConfirm"].focus();
  } else {
    console.log("Updating...");
    const name = [
        evt.target["merchantName"].value,
        evt.target["merchantLastName"].value
      ].join(" "),
      email = evt.target["merchantEmail"].value,
      endpoint = `${API}/admin/update`,
      config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      };
    const data = {
      _id: id,
      name: name,
      email: email
    };
    if (password1 !== "") data["newpassword"] = password1;

    try {
      const res = await axios.put(endpoint, data, config);

      if (res.status === 200) window.location.reload();
      else {
        createNotificationError(
          idNotificationGenerator(),
          "Something went wrong",
          "Try again later"
        )(store.dispatch);
      }
    } catch (err) {
      createNotificationError(
        idNotificationGenerator(),
        "Something went wrong",
        "Try again later"
      )(store.dispatch);
    }
  }
}
