import React from "react";
import { shallow, mount } from "enzyme";
import AdminTabBar from "./AdminTabBar";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("AdminNavBar", () => {
  const fakeStore = configureStore()({
    AdminTabBar: {
      active: "Products"
    }
  });

  it("renders correctly", () => {
    const wrapper = shallow(<AdminTabBar store={fakeStore} dispatch={null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("logo link contains admin dashboard", () => {
    const wrapper = mount(
      <MemoryRouter>
        <AdminNavBar store={fakeStore} dispatch={null} />
      </MemoryRouter>
    );
    expect(wrapper.find("Link").prop("to")).toBe("/admin/dashboard");
  });
});
