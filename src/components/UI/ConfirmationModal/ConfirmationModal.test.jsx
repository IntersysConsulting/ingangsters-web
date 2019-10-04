import React from "react";
import { shallow } from "enzyme";
import ConfirmationModal from "./ConfirmationModal";
import sinon from "sinon";

describe("Confirmation Modal", () => {
  it("renders properly when show=true", () => {
    const shallowRender = shallow(
      <ConfirmationModal
        title="Test Render"
        message="Test Message"
        negativeText="Decline"
        negativeAction={() => {}}
        affirmativeText="Accept"
        affirmativeAction={() => {}}
        show={true}
      />
    );
    expect(shallowRender).toMatchSnapshot();
  });

  it("calls close function, negative and affirmative actions once each", () => {
    const affirmativeSpy = sinon.spy();
    const negativeSpy = sinon.spy();

    const wrapper = shallow(
      <ConfirmationModal
        title="Test Render"
        message="Test Message"
        negativeText="Decline"
        negativeAction={negativeSpy}
        affirmativeText="Accept"
        affirmativeAction={affirmativeSpy}
        show={true}
      />
    );
    wrapper
      .find(".confirmationAffirmativeButton")
      .first()
      .simulate("click");
    wrapper
      .find(".confirmationNegativeButton")
      .first()
      .simulate("click");
    expect(affirmativeSpy.calledOnce).toBe(true);
    expect(negativeSpy.calledOnce).toBe(true);
  });
});
