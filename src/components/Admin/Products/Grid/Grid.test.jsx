import React from "react";
import { shallow } from "enzyme";
import { ProductsGrid } from "./Grid";

describe("ADMIN: Products Grid", () => {
  it("renders loading animation at start", () => {
    const wrapper = shallow(
      <ProductsGrid
        items={[]}
        loading={false}
        finishedFetch={false}
        fetchProducts={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders some items after loading", () => {
    const mockData = [
      {
        _id: "5d7676f35db4e862cc84027d",
        available: true,
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--m6F4tJ-n--/c_scale,f_auto,fl_progressive,q_80,w_800/imfz8sq2jjpl19apqhvb.jpg",
        name: "Nintendo Switch",
        onClick: "/admin/product/5d7676f35db4e862cc84027d",
        price: 600000,
        shippable: true,
        stock: 1
      }
    ];

    const wrapper = shallow(
      <ProductsGrid
        items={mockData}
        loading={false}
        finishedFetch={true}
        fetchProducts={() => {}}
      />
    );
    expect(wrapper.find("Card").length).not.toBe(0);
  });
});
