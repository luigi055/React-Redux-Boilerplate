// @flow
import React from "react";
import { shallow } from "enzyme";

// DUMMY TEST
it("should return true", () => {
  const Fixture = () => (
    <div className="fixure">
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
    </div>
  );

  const wrapper = shallow(<Fixture />); // mount/render/shallow when applicable
  expect(wrapper.is(".fixure")).toBe(true);
  expect(wrapper.children()).toHaveLength(2);
  expect(wrapper.find("#checked")).toHaveLength(1);
  expect(wrapper.find("#chec").exists()).toBe(false);
});
