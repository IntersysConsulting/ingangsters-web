import React from "react";
import { shallow, mount } from "enzyme";
import AdminTabBar from "./AdminTabBar";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("AdminTabBar", () => {
  const fakeStore = configureStore()({
    adminTabBar: {
      activeButton: "Users"
    }
  });

  it("renders correctly", () => {
    const wrapper = shallow(<AdminTabBar store={fakeStore} dispatch={null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Buttons redirect to admin/dashboard", () => {
    const wrapper = mount(
      <MemoryRouter>
        <AdminTabBar store={fakeStore} dispatch={null} />
      </MemoryRouter>
    );
  });
});
