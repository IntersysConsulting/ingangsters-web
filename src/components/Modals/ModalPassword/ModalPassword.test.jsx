import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import ModalPassword from "./ModalPassword";
import RegisterButton from "./RegisterButton/RegisterButton";
import { checkPassword } from "../../../actions/creators/auth";

Enzyme.configure({ adapter: new Adapter() });

describe("Confirmation Password Modal", () => {
  const initialState = {
    auth: {
      isAuthenticated: true,
      confirmed_password: false
    }
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const actions = [checkPassword];
  const store = mockStore(initialState, actions);

  it("Renders correctly", () => {
    const wrapper = renderer.create(<ModalPassword store={store} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper = mount(
    <MemoryRouter>
      <ModalPassword store={store} dispatch={null} />
    </MemoryRouter>
  );

  it("Doens't display Modal before RegisterButton Click", () => {
    expect(wrapper.find(".PasswordModalContent")).toHaveLength(0);
  });

  it("Displays Modal after RegisterButton click", () => {
    wrapper.find(RegisterButton).simulate("click");
    expect(wrapper.find(".PasswordModalContent")).toHaveLength(2);
  });

  it("Contains password field and button", () => {
    wrapper.find(RegisterButton).simulate("click");
    expect(wrapper.find(".password-form-modal").length).toEqual(1);
    expect(wrapper.find(".AskPasswordModalSendButton").length).toEqual(2);
  });
});
