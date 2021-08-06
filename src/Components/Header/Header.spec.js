import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header.jsx";

configure({ adapter: new Adapter() });
describe("test case for Buttons.js", () => {
  let component;
  let propsToSend = {
    text: "test"
  };
  it("should render correctly", () => {
    component = shallow(<Header {...propsToSend} />);
    expect(component).toBeTruthy();
    expect(component.find(".header-container").text()).toBe("test");
  });
});
