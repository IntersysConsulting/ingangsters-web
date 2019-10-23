import React from "react";
import Paginator from "./Paginator";
import { shallow } from "enzyme";

describe("ADMIN: Products Grid Paginator", () => {
  it("renders with c = 5, t=16, i=2", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={5}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("calculates pages correctly", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={5}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );

    const list = wrapper.find(".removable");
    const last = list
      .last()
      .render()
      .text();
    expect(last).toBe("8");
  });

  it("disables prev button on first page", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={1}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );

    const list = wrapper.find("[disabled=true]");
    const first = list
      .first()
      .render()
      .text();
    expect(first).toBe("<");
  });

  it("disables prev button on last page", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={8}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );

    const list = wrapper.find("[disabled=true]");
    const last = list
      .first()
      .render()
      .text();
    expect(last).toBe(">");
  });

  it("renders proper left ellipsis", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={8}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );
    const list = wrapper.children("Ellipsis");
    expect(list.length).toBe(1);
  });

  it("renders proper right ellipsis", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={1}
        totalItems={16}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );
    const list = wrapper.children("Ellipsis");
    expect(list.length).toBe(1);
  });

  it("calculates both sides ellipsis", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={8}
        totalItems={32}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );
    const list = wrapper.children("Ellipsis");
    expect(list.length).toBe(2);
  });

  it("calculates hidden buttons correctly", () => {
    const wrapper = shallow(
      <Paginator
        currentPage={8}
        totalItems={32}
        itemsPerPage={2}
        navigateFunction={pageToNavigate => {}}
      />
    );
    const list = wrapper.children('[className="removable"]');
    expect(list.length).toBe(6);
  });
});
