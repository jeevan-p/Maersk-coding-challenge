import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App.js";

configure({ adapter: new Adapter() });

describe("test case for app.js", () => {
  let component;
  it("should render correctly", () => {
    component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
