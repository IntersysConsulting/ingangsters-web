import { combineReducers } from "redux";
import navBar from "./navBar";
import auth from "./auth";
import products from "./products";
import adminTabBar from "./AdminTabBar";
import adminProducts from "./adminProducts";

const reducerCombined = combineReducers({
  navBar,
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

  adminTabBar: {
    activeButton: "Users"
  }
};
export default reducerCombined;
