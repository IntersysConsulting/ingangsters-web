import { combineReducers } from "redux";
import navBar from "./navBar";
import shadow from "./shadow";
import auth from "./auth";
import products from "./products";
import adminTabBar from "./AdminTabBar";
import adminProducts from "./adminProducts";

const reducerCombined = combineReducers({
  navBar,
  shadow,
  auth,
  products,
  adminTabBar,
  adminProducts
});

export const initialState = {
  navBar: {
    mouseOverAccountButton: false,
    mouseOverCartButton: false,
    accountButtonActive: false,
    responsiveMenuActive: false
  },

  shadow: {
    active: false,
    outEffect: false
  },

  adminTabBar: {
    activeButton: "Users"
  }

  // cart: []
};
export default reducerCombined;
