import React from "react";
import { shallow } from "enzyme";
import ProductView from "./ProductView";
import { createMemoryHistory } from "history";
describe("ADMIN: Products - Product View", () => {
  it('renders "new product" form', () => {
    const history = createMemoryHistory("/admin/product/new");
    const wrapper = shallow(
      <ProductView match={{ params: { id: "new" } }} history={history} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("_default").length).toBe(0);
  });

  it("renders bouncing ball when loading from database", () => {
    const history = createMemoryHistory(
      "/admin/product/5d8e482ed10a23999a8b232d"
    );
    const wrapper = shallow(
      <ProductView
        match={{ params: { id: "5d8e482ed10a23999a8b232d" } }}
        history={history}
      />
    );
    const list = wrapper.find("_default");
    expect(list.length).toBe(1);
    expect(wrapper.find("Form").length).toBe(0);
  });
});
