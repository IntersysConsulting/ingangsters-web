import { createStore } from "redux";

import appReducer from "./reducers/index";
import { initialState } from "./reducers/index";

const store = createStore(appReducer, initialState);

export default store;
