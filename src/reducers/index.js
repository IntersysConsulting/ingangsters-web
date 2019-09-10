import { combineReducers } from "redux";
import sample from "./samples";
import navBar from "./navBar";
import shadow from "./shadow";
import auth from "./auth";
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

  adminProducts: {
    list: [
      {
        _id: "5d7802f71827209bc8ee7764",
        productName: "pariatur ex irure do",
        productStock: 52,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7201461c40fa0fe1a",
        productName: "enim dolore aute ullamco",
        productStock: 27,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f76cb937cc50cf9ce7",
        productName: "eiusmod consequat elit",
        productStock: 47,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7eb182704b5dcc5aa",
        productName: "aliquip est sit",
        productStock: 34,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f73ccd51ba398f4d90",
        productName: "ex consectetur nulla",
        productStock: 17,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7743c3e86d7c12440",
        productName: "consequat deserunt est",
        productStock: 74,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7fa8de308c941ecbb",
        productName: "ut sit magna laborum",
        productStock: 74,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7a17a78051472d503",
        productName: "sint nulla enim",
        productStock: 11,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7220983e822d6fc47",
        productName: "proident fugiat est",
        productStock: 53,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f77af76330b7d1a43b",
        productName: "anim labore laborum excepteur",
        productStock: 67,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7ed2ff3f54f5a2e6b",
        productName: "ut ullamco cillum veniam",
        productStock: 46,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f761af29481f0aff5d",
        productName: "veniam aliqua velit nostrud",
        productStock: 21,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f74f3c10a9b3ac6df4",
        productName: "et nostrud consequat",
        productStock: 19,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      },
      {
        _id: "5d7802f7b45f427b2f5607ea",
        productName: "officia cupidatat laboris reprehenderit",
        productStock: 17,
        productImage: "https://img.icons8.com/cute-clipart/64/000000/box.png"
      }
    ],
    fetching: true
  }
};
export default reducerCombined;
