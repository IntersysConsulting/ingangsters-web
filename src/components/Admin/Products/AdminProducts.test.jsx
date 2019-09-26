import React from "react";
import { shallow } from "enzyme";
import AdminProducts from "./index";
import configureStore from "redux-mock-store";

describe("ADMIN: Products", () => {
  it("renders properly", () => {
    const fakeStore = configureStore()({
      adminProducts: { currentPage: 1, totalItems: 16, itemsPerPage: 10 }
    });
    const render = shallow(<AdminProducts store={fakeStore} dispatch={null} />);
    expect(render).toMatchSnapshot();
  });
});
