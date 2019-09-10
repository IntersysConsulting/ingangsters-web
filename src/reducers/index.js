import { combineReducers } from "redux";
import sample from "./samples";
import navBar from "./navBar";
import shadow from "./shadow";
import auth from "./auth";
import products from "./products";

const reducerCombined = combineReducers({
  sample,
  navBar,
  shadow,
  auth,
  products
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
  }
};
export default reducerCombined;
