import { combineReducers } from "redux";
import sample from "./samples";

// const mainReducer = (state = initialState, action) => {
//   return {
//     sample: sample(state.sample, action)
//   };
// };

const reducerCombined = combineReducers({ sample });

export const initialState = {
  userData: {
    name: "John Doe",
    id: "3312"
  },

  cartData: {
    id: "3399",
    items: [],
    createdAt: "TODAY",
    updatedAt: "NOW"
  },

  session: {
    token: "ABC"
  },

  sample: {
    myNumber: 10,
    myString: "Hola mundo!!!!"
  }
};
export default reducerCombined;
