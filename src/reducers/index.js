import { combineReducers } from "redux";
import sample from "./samples";
import navBar from "./navBar";
import shadow from "./shadow";
import auth from "./auth";
// const mainReducer = (state = initialState, action) => {
//   return {
//     sample: sample(state.sample, action)
//   };
// };

const reducerCombined = combineReducers({ sample, navBar, shadow, auth });

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
