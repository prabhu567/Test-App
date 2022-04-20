import React from "react";
import { shallow } from "enzyme";
import Rooter from "./rooter";

describe("Rooter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Rooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
