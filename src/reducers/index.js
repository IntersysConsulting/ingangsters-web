import { combineReducers } from "redux";
import navBar from "./navBar";
import auth from "./auth";
import products from "./products";
import adminTabBar from "./AdminTabBar";
import adminProducts from "./adminProducts";
import cart from "./cart";
import checkoutForms from "./checkoutForms";
import checkout from "./checkout";
import adminUsers from "./adminUsers";

const reducerCombined = combineReducers({
  navBar,
  auth,
  products,
  adminTabBar,
  adminProducts,
  adminUsers,
  cart,
  checkout,
  checkoutForms
});

export const initialState = {
  navBar: {
    responsiveMenuActive: false
  },

  adminTabBar: {
    activeButton: "Users"
  },

  cart: {
    isUpdated: false,
    cartItems: 0,
    total: 0
  },
  checkout: {
    displayPaymentMethods: false
  }
};
export default reducerCombined;
