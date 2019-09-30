import React from "react";
import { shallow, mount } from "enzyme";
import AdminNavBar from "./AdminNavBar";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";

describe("AdminNavBar", () => {
  const fakeStore = configureStore()({
    navBar: {
      responsiveMenuActive: false
    }
  });
  it("renders correctly", () => {
    const wrapper = shallow(<AdminNavBar store={fakeStore} dispatch={null} />);
    expect(wrapper).toMatchSnapshot();
  });
});
