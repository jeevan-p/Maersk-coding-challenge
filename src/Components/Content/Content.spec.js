import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Content from "./Content.jsx";

configure({ adapter: new Adapter() });
describe("test case for Content.js", () => {
  let component;
  it("should render correctly", () => {
    component = shallow(<Content>ABC</Content>);
    expect(component).toBeTruthy();
    expect(component.find(".content-container").text()).toBe("ABC");
  });
});
