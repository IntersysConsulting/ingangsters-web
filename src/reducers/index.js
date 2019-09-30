import { combineReducers } from "redux";
import navBar from "./navBar";
import auth from "./auth";
import products from "./products";
import adminTabBar from "./AdminTabBar";
import adminProducts from "./adminProducts";
import cart from "./cart";
import checkoutForms from "./checkoutForms";

const reducerCombined = combineReducers({
  navBar,
  auth,
  products,
  adminTabBar,
  adminProducts,
  cart,
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
  }
};
export default reducerCombined;
