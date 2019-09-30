import React from "react";
import { shallow, mount } from "enzyme";
import SimpleNavBar from "./SimpleNavBar";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe("SimpleNavBar", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SimpleNavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("redirects to home", () => {
    const history = createMemoryHistory();
    const wrapper = mount(
      <Router history={history}>
        <SimpleNavBar />
      </Router>
    );
    wrapper.find("img").simulate("click");
    expect(history.location.pathname).toBe("/");
  });
});
