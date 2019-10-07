import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { MemoryRouter, Provider } from "react-router-dom";
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

  it("Contains two input fields and 1 Login Button", () => {
    const wrapper = mount(
      <MemoryRouter>
        <FastLoginModal store={store} dispatch={null} />
      </MemoryRouter>
    );
    wrapper.find(FastLoginButton).simulate("click");
    expect(wrapper.find("#emailInput").length).toEqual(1);
    expect(wrapper.find("#passwordInput").length).toEqual(1);
    expect(wrapper.find(FastLoginButton).length).toEqual(1);
    expect(
      wrapper.find(".form-button-modal > .fastLoginButtonModal").length
    ).toEqual(1);
  });
});
