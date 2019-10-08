import axios from "axios";
import { API } from "../../../../config";

const getToken = () => localStorage.getItem("token");

export const updateProduct = async (data, form) => {
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
      alert("Saved successfully");
      window.location.pathname = "admin/product/" + data._id;
    }
  } catch (err) {
    console.log(err);
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
    console.log(err);
    window.location.pathname = "productNotFound";
  }
};

export const newProduct = async (data, form) => {
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
      alert("New product created successfully");
      window.location.pathname = "admin/product/" + res.data.data;
    }
  } catch (err) {
    alert("Product not saved");
    console.log(err);
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

export const removeProduct = async productID => {
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
      alert("Removed successfully");
      window.location.pathname = "admin/dashboard";
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred");
  }
};
