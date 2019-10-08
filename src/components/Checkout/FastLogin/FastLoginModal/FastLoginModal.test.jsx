import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import FastLoginModal from "./FastLoginModal";
import FastLoginButton from "../FastLoginButton/FastLoginButton";
import { login } from "../../../../actions/creators/auth";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });

describe("FastLoginModal", () => {
  const initialState = {
    auth: {
      isAuthenticated: false
    },
    show: true
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const actions = [login];
  const store = mockStore(initialState, actions);

  it("Renders Correctly", () => {
    const wrapper = renderer
      .create(<FastLoginModal store={store} dispatch={null} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper = mount(
    <MemoryRouter>
      <FastLoginModal store={store} dispatch={null} />
    </MemoryRouter>
  );

  it("Doens't display Modal before FastLoginButton Click", () => {
    expect(wrapper.find(".LoginModalContent")).toHaveLength(0);
  });

  it("Displays Modal after FastLoginButton click", () => {
    wrapper.find(FastLoginButton).simulate("click");
    expect(wrapper.find(".LoginModalContent")).toHaveLength(2);
  });

  it("Contains two input fields and one Login Button", () => {
    wrapper.find(FastLoginButton).simulate("click");
    expect(wrapper.find("#emailInput").length).toEqual(1);
    expect(wrapper.find("#passwordInput").length).toEqual(1);
    expect(wrapper.find(FastLoginButton).length).toEqual(1);
    expect(
      wrapper.find(".form-button-modal > .fastLoginButtonModal").length
    ).toEqual(1);
  });
});
