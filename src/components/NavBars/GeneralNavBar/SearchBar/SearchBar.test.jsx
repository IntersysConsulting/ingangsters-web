import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("General Navbar: Search Bar", () => {
  it("renders", () => {
    const shallowRender = shallow(<SearchBar />);
    expect(shallowRender).toMatchSnapshot();
  });

  it("has both right side variants", () => {
    const wrapper = shallow(<SearchBar />);

    const searchButtonList = wrapper.find(".append > .searchButton");
    const searchIconList = wrapper.find(".append > .rightSearchIcon");

    expect(searchButtonList.length).toBe(1);
    expect(searchIconList.length).toBe(1);
  });

  it("prefixIcon", () => {
    const wrapper = shallow(<SearchBar />);

    const searchIconList = wrapper.find(".searchBar > .prepend");
    expect(searchIconList.children().length).toBe(1);
  });
});
