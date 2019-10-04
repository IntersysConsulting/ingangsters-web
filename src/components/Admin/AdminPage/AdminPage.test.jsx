import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Provider } from "react-router-dom";
import AdminPage from "./AdminPage";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import toJson from "enzyme-to-json";

describe("Admin Page", () => {
  const initialState = {
    adminTabBar: {
      activeButton: "Users"
    }
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const actions = [];
  const store = mockStore(initialState, actions);

  it("renders correctly", () => {
    const wrapper = shallow(<AdminPage store={store} dispatch={null} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
