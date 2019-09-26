import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./Card";

describe("ADMIN: Product Card", () => {
  it("renders with random props", () => {
    const component = shallow(
      <ProductCard
        name="LOREM"
        image="https://makeitreal.camp/assets/react-logo-ac85b6b5793992bc49365c389fe88d09b100c758d6981653724ad613764911b2.png"
        stock={123}
        onClick="/random/Path"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
