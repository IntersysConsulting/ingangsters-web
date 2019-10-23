import React from "react";
import { mount } from "enzyme";
import AdminTabBar from "./AdminTabBar";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { setActiveAdminBarButton } from "../../../actions/creators/AdminTabBar";
import { fetchProducts } from "../../../actions/creators/adminProducts";
import { fetchAdminUsers } from "../../../actions/creators/adminUsers";
import { FETCHING_ADMIN_USERS } from "../../../actions/types/adminUsers";
import { FETCHING_PRODUCTS } from "../../../actions/types/adminProducts";
import { CLEAR_SEARCH } from "../../../actions/types/filters";
import * as types from "../../../actions/types/AdminTabBar";
import reducer from "../../../reducers/AdminTabBar";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

describe("AdminTabBar", () => {
  const initialState = {
    adminTabBar: {
      activeButton: "Users"
    }
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const actions = [setActiveAdminBarButton, fetchProducts, fetchAdminUsers];
  const store = mockStore(initialState, actions);

  it("renders correctly", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <AdminTabBar store={store} dispatch={null} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  const wrapper = mount(
    <MemoryRouter>
      <AdminTabBar store={store} dispatch={null} />
    </MemoryRouter>
  );

  it("Buttons redirect to admin/dashboard", () => {
    let linkElement = wrapper.find("#adminTabBarUsersDiv");
    expect(linkElement.find("Link").prop("to")).toBe("/admin/dashboard");

    linkElement = wrapper.find("#adminTabBarProductsDiv");
    expect(linkElement.find("Link").prop("to")).toBe("/admin/dashboard");

    linkElement = wrapper.find("#adminTabBarOrdersDiv");
    expect(linkElement.find("Link").prop("to")).toBe("/admin/dashboard");
  });

  it("setActiveAdminBarButton Action Creator", () => {
    const newButton = "Users";
    const expectedAction = {
      type: types.SET_ACTIVE_ADMINBAR_BUTTON,
      newButton
    };
    expect(setActiveAdminBarButton(newButton)).toEqual(expectedAction);
  });

  it("should handle SET_ACTIVE_ADMINBAR_BUTTON", () => {
    expect(
      reducer([], {
        type: types.SET_ACTIVE_ADMINBAR_BUTTON,
        newButton: "Users"
      })
    ).toEqual({
      activeButton: "Users"
    });

    expect(
      reducer([], {
        type: types.SET_ACTIVE_ADMINBAR_BUTTON,
        newButton: "Products"
      })
    ).toEqual({
      activeButton: "Products"
    });

    expect(
      reducer([], {
        type: types.SET_ACTIVE_ADMINBAR_BUTTON,
        newButton: "Orders"
      })
    ).toEqual({
      activeButton: "Orders"
    });
  });

  it("handles Click", () => {
    let event = { target: { value: "Users" } };
    wrapper
      .find("#adminTabBarUsersButton")
      .at(0)
      .simulate("click", event);
    expect(store.getActions()).toEqual([
      { newButton: "Users", type: types.SET_ACTIVE_ADMINBAR_BUTTON },
      { type: FETCHING_ADMIN_USERS }
    ]);

    event = { target: { value: "Products" } };
    store.clearActions();
    wrapper
      .find("#adminTabBarProductsButton")
      .at(0)
      .simulate("click", event);
    expect(store.getActions()).toEqual([
      { newButton: "Products", type: types.SET_ACTIVE_ADMINBAR_BUTTON },
      { type: CLEAR_SEARCH },
      { type: FETCHING_PRODUCTS }
    ]);

    event = { target: { value: "Orders" } };
    store.clearActions();
    wrapper
      .find("#adminTabBarOrdersButton")
      .at(0)
      .simulate("click", event);
    expect(store.getActions()).toEqual([
      { newButton: "Orders", type: types.SET_ACTIVE_ADMINBAR_BUTTON }
    ]);
  });

  it("Has 3 Buttons with Links", () => {
    expect(wrapper.find("Link").length).toEqual(3);
    expect(wrapper.find("Button").length).toEqual(3);
  });
});
