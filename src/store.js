import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./reducers/index";
import { initialState } from "./reducers/index";

const middleware = [thunk];

const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
