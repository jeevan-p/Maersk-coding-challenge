import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Buttons.jsx";

configure({ adapter: new Adapter() });
describe("test case for Buttons.js", () => {
  let component;
  let propsToSend = {
    shuffleClicked: jest.fn(),
    sortClicked: jest.fn(),
    buttonTexts: {
      shuffleButtonText: "test",
      sortButtonText: "test"
    }
  };
  it("should render correctly", () => {
    component = shallow(<Button {...propsToSend} />);
    expect(component).toBeTruthy();
    component.find(".shuffle-button").simulate("click");
    expect(propsToSend.shuffleClicked).toHaveBeenCalled();
    component.find(".sort-button").simulate("click");
    expect(propsToSend.sortClicked).toHaveBeenCalled();
  });
});
