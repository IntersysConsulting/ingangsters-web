import { API } from "../../../../config";
import axios from "axios";

export function loadAdmin(id, setLoading, setData) {
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}

export function deleteAdmin(id) {
  console.log("Deleting " + id);
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
    alert("Passwords must match");
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
        alert("Admin created correctly");
        window.location.pathname = "admin/dashboard";
      } else {
        alert("An error occurred. Try again later");
        window.location.reload();
      }
    } catch (err) {
      alert("An error occurred. Try again later");
    }
  }
}

export function updateAdmin(evt) {
  console.log("Updating...");
}
