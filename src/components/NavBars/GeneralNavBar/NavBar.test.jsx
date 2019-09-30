import React from "react";
import { shallow } from "enzyme";
import { NavBarComponent } from "./NavBar";

describe("General Navbar", () => {
  it("renders correctly", () => {
    const shallowRender = shallow(
      <NavBarComponent
        responsiveMenuActive={false}
        toggleMenuResponsive={() => {
          console.log("Toggle menu responsive");
        }}
      />
    );

    expect(shallowRender).toMatchSnapshot();
  });

  it("renders cheeseburguer button", () => {
    const wrapper = shallow(
      <NavBarComponent
        responsiveMenuActive={false}
        toggleMenuResponsive={() => {
          console.log("Toggle menu responsive");
        }}
      />
    );

    const burguerButtonList = wrapper.find("MdMenu");
    expect(burguerButtonList.length).toBe(1);
  });

  it("hides buttons on responsitve menu inactive", () => {
    const wrapper = shallow(
      <NavBarComponent
        responsiveMenuActive={false}
        toggleMenuResponsive={() => {
          console.log("Toggle menu responsive");
        }}
      />
    );

    const navBarActiveList = wrapper.find(".navbar-responsive.active");
    expect(navBarActiveList.length).toBe(0);
  });

  it("shows buttons on responsitve menu active", () => {
    const wrapper = shallow(
      <NavBarComponent
        responsiveMenuActive={true}
        toggleMenuResponsive={() => {
          console.log("Toggle menu responsive");
        }}
      />
    );

    const navBarActiveList = wrapper.find(".navbar-responsive.active");
    expect(navBarActiveList.length).toBe(1);
  });

  it("renders close button", () => {
    const wrapper = shallow(
      <NavBarComponent
        responsiveMenuActive={true}
        toggleMenuResponsive={() => {
          console.log("Toggle menu responsive");
        }}
      />
    );

    const closeButtonList = wrapper.find("FaRegWindowClose");
    expect(closeButtonList.length).toBe(1);
  });
});
