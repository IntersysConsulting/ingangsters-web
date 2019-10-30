import axios from "axios";
import { API } from "../../../../config";
import store from "../../../../store";
import {
  createNotificationSuccess,
  createNotificationError
} from "../../../../actions/creators/notification";
import { idNotificationGenerator } from "../../../../utils/idGenerator";
const getToken = () => localStorage.getItem("token");

export const updateProduct = async (data, form, refresh) => {
  const body = {
    _id: data._id,
    name: form.target.name.value,
    description: form.target.description.value,
    price: parseInt(form.target.price.value),
    stock: parseInt(form.target.stock.value),
    image: data.image,
    shippable: data.shippable,
    available: data.available
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    }
  };
  const endpoint = `${API}/products/update`;
  try {
    const res = await axios.put(endpoint, body, config);
    if (res.status) {
      createNotificationSuccess(
        idNotificationGenerator(),
        "Product updated",
        "Saved successfully"
      )(store.dispatch);
      refresh();
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "Something went wrong",
      "Try again later"
    )(store.dispatch);
  }
};

export const loadProduct = async (id, setData) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/products/single`;
  const body = JSON.stringify({ _id: id });
  try {
    const res = await axios.post(endpoint, body, config);
    const { status, data } = res;
    var loadingNow = status !== 200;
    setData(prev => ({
      ...data.data,
      ...prev,
      showDelete: true,
      isLoading: loadingNow,
      submit: updateProduct,
      _id: id,
      requireImage: false
    }));
  } catch (err) {
    window.location.pathname = "productNotFound";
  }
};

export const newProduct = async (data, form, reload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    }
  };
  const body = {
    name: form.target.name.value,
    description: form.target.description.value,
    price: parseInt(form.target.price.value),
    stock: parseInt(form.target.stock.value),
    image: data.image,
    shippable: true
  };
  const endpoint = `${API}/products/create`;
  try {
    const res = await axios.post(endpoint, body, config);
    if (res.status) {
      createNotificationSuccess(
        idNotificationGenerator(),
        "Product added",
        "New product created successfully"
      )(store.dispatch);
      reload();
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "Something went wrong",
      "Product not saved, try again later"
    )(store.dispatch);
    window.history.back();
  }
};

const uploadImage = async image => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + getToken(),
      Accept: "application/json"
    }
  };
  const imgBody = new FormData();
  imgBody.append("image", image);
  const endpoint = `${API}/products/images/upload`;
  try {
    const res = await axios.post(endpoint, imgBody, config);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const imageChange = setData => async evt => {
  var file = evt.target.files[0];
  setData(prev => ({
    ...prev,
    disableSave: true,
    image: "https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif"
  }));
  let results = await uploadImage(file);
  if (results != null) {
    setData(prev => ({
      ...prev,
      disableSave: false,
      image: results[0]
    }));
  }
};

export const removeProduct = async (productID, reload) => {
  // Logic removal
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    data: {
      _id: productID
    }
  };
  const endpoint = `${API}/products/delete`;

  try {
    const response = await axios.delete(endpoint, config);
    const { status } = response;
    if (status === 200) {
      createNotificationSuccess(
        idNotificationGenerator(),
        "Product removed",
        "Removed successfully"
      )(store.dispatch);
      reload();
      window.history.back();
    }
  } catch (err) {
    createNotificationError(
      idNotificationGenerator(),
      "Something went wrong",
      "Product was not removed, try again later"
    )(store.dispatch);
  }
};
