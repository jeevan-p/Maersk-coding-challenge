import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer.jsx";

configure({ adapter: new Adapter() });
describe("test case for Content.js", () => {
  let component;
  it("should render correctly", () => {
    component = shallow(<Footer textToDisplay="ABC" />);
    expect(component).toBeTruthy();
    expect(component.find(".footer-container").text()).toBe("ABC");
  });
});
