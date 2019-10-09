import { API } from "../../../../config";

export function loadAdmin(id, setLoading, setData) {
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}

export function deleteAdmin(id) {
  console.log("Deleting " + id);
}
