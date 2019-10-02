import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import ModalAdmin from "./ModalAdmin";
import ModalButton from "../ModalGeneral/ModalButton/ModalButton";

Enzyme.configure({ adapter: new Adapter() });

describe("ModalAdmin", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<ModalAdmin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("Should show two buttons", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find(ModalButton)).toHaveLength(2);
});

it("Should show an account button", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find(".accountButton")).toHaveLength(1);
});

it("Should show a logout button", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find(".logoutButton")).toHaveLength(1);
});

it("includes a Link to admin dashboard (Admin Page button)", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find("#dashboardB").props().to).toBe("/admin/dashboard");
});

it("includes a Link to logout", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find("#logoutB").props().to).toBe("/logout");
});
