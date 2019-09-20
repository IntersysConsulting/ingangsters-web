export const addProductToCart = (
  newProductData,
  productId,
  uploadAndUpdateCart
) => {
  const productData = {
    price: 0,
    quantity: 0,
    name: "",
    image: ""
  };

  productData["_id"] = productId;
  productData["price"] = newProductData["price"];
  productData["quantity"] = 1;
  productData["name"] = newProductData["name"];
  productData["image"] = newProductData["image"];
  productData["stock"] = newProductData["stock"];

  var actualCart = [];
  if (localStorage.getItem("cart")) {
    actualCart = JSON.parse(localStorage.getItem("cart"));
    var flag = false;
    for (var i = 0; i < actualCart.length; i++) {
      if (actualCart[i]._id === productId) {
        actualCart[i].quantity += 1;
        flag = true;
      }
    }
    if (!flag) {
      actualCart.push(productData);
    }
  } else {
    actualCart.push(productData);
  }

  localStorage.setItem("cart", JSON.stringify(actualCart));
  uploadAndUpdateCart();
};

export const removeProductFromCart = (productId, uploadAndUpdateCart) => {
  var actualCart = [];
  if (localStorage.getItem("cart")) {
    actualCart = JSON.parse(localStorage.getItem("cart"));
    var flag = -2;
    for (var i = 0; i < actualCart.length; i++) {
      if (actualCart[i]._id === productId) {
        actualCart[i].quantity -= 1;
        if (actualCart[i].quantity === 0) {
          flag = i;
        }
      }
    }
    if (flag !== -2) {
      actualCart.splice(flag, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(actualCart));
  uploadAndUpdateCart();
};

export const deleteProductFromCart = (productId, uploadAndUpdateCart) => {
  var actualCart = [];
  if (localStorage.getItem("cart")) {
    actualCart = JSON.parse(localStorage.getItem("cart"));
    var flag = -2;
    for (var i = 0; i < actualCart.length; i++) {
      if (actualCart[i]._id === productId) {
        flag = i;
      }
    }
    if (flag !== -2) {
      actualCart.splice(flag, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(actualCart));
  uploadAndUpdateCart();
};
