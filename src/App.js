import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import Numbers from "./Components/Numbers/Numbers.jsx";
import Buttons from "./Components/Buttons/Buttons.jsx";
import "./styles.scss";
import content from "./labelData.json";

export default function App() {
  return (
    <div className="App">
      <Header text={content.headerText} />
      <Content>
        <Numbers arrayOfNumbers={content.array} />
        <Buttons />
      </Content>
    </div>
  );
}
