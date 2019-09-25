import React from "react";
import { shallow } from "enzyme";
import ProductView from "./ProductView";

describe("ADMIN: Products - Product View", () => {
  it('renders "new product" form', () => {
    const wrapper = shallow(<ProductView match={{ params: { id: "new" } }} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("_default").length).toBe(0);
  });

  it("renders bouncing ball when loading from database", () => {
    const wrapper = shallow(
      <ProductView match={{ params: { id: "5d7676f35db4e862cc84027d" } }} />
    );
    const list = wrapper.find("_default");
    expect(list.length).toBe(1);
    expect(wrapper.find("Form").length).toBe(0);
  });
});
