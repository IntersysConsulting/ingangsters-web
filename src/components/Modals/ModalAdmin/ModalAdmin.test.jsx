import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import ModalAdmin from "./ModalAdmin";
import ModalButton from "../ModalGeneral/ModalButton/ModalButton";

Enzyme.configure({ adapter: new Adapter() });

describe("ModalAdmin", () => {
  let wrapper;

  it("Renders correctly", () => {
    const tree = renderer.create(<ModalAdmin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("counst ", () => {
  const wrapper = shallow(<ModalAdmin />);
  expect(wrapper.find(ModalButton)).toBe(2);
});
