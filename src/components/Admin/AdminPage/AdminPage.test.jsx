import React from "react";
import { shallow, mount } from "enzyme";
import AdminPage from "./AdminPage";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

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
    expect(wrapper).toMatchSnapshot();
  });
});
