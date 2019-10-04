import React from "react";
import { mount } from "enzyme";
import AdminNavBar from "./AdminNavBar";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("AdminNavBar", () => {
  const fakeStore = configureStore()({
    navBar: {
      responsiveMenuActive: false
    }
  });

  it("renders correctly", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <AdminNavBar store={fakeStore} dispatch={null} />
      </MemoryRouter>
    );
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
