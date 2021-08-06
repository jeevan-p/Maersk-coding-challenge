import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cards from "./Cards.jsx";

configure({ adapter: new Adapter() });
describe("test case for Cards.js", () => {
  let component;
  let propsToSend = {
    arrayOfNumbers: [1, 2, 3],
    tileColor: ["test"]
  };
  it("should render correctly", () => {
    component = shallow(<Cards {...propsToSend} />);
    expect(component).toBeTruthy();
    expect(component.find(".numbers-tile").length).toBe(3);
  });
});
