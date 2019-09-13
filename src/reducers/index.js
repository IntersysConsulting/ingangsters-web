import { combineReducers } from "redux";
import sample from "./samples";
import navBar from "./navBar";
import shadow from "./shadow";
import auth from "./auth";
import adminTabBar from "./AdminTabBar";
import adminProducts from "./adminProducts";
// const mainReducer = (state = initialState, action) => {
//   return {
//     sample: sample(state.sample, action)
//   };
// };

const reducerCombined = combineReducers({
  sample,
  navBar,
  shadow,
  auth,
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
};
export default reducerCombined;
