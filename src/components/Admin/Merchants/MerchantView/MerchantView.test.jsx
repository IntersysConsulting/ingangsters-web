import React from "react";
import { shallow } from "enzyme";
import MerchantView from "./MerchantView";

describe("Merchant View", () => {
  it('Renders "new admin" form', () => {
    const shallowRender = shallow(
      <MerchantView match={{ params: { id: "new" } }} />
    );
    expect(shallowRender).toMatchSnapshot();
  });

  it("Renders loading animation when admin ID passed", () => {
    const shallowRender = shallow(
      <MerchantView match={{ params: { id: "5da74ef4677c765948cd8d80" } }} />
    );
    expect(shallowRender.children().length).toBe(3);
  });
});
