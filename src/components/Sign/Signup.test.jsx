import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import Signup from "./Signup";

Enzyme.configure({ adapter: new Adapter() });

describe("SignUp Form", () => {
  it("SignUp Form renders correctly", () => {
    const component = shallow(<Signup />);
    expect(component).toMatchSnapshot();
  });

  /* it("it", () => {
    const wrapper = shallow(<Signup />);
    //wrapper.find('form').simulate('submit');
    const signUpForm = wrapper.find("#form").simulate("submit", {
      preventDefault: () => {
        console.log("hola mundo");
      }
    });
  }); */
});
