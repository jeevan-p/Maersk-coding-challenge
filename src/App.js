import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import Numbers from "./Components/Numbers/Numbers.jsx";
import Buttons from "./Components/Buttons/Buttons.jsx";
import "./styles.scss";
import content from "./data.json";
import shuffleFunction from "./Utils/shuffle";
import { useState } from "react";

export default function App() {
  const [numberArrayState, setNumberArrayState] = useState(content.array);
  return (
    <div className="App">
      <Header text={content.headerText} />
      <Content>
        <Numbers
          arrayOfNumbers={numberArrayState}
          tileColor={content.tileColor}
        />
        <Buttons
          shuffleClicked={() =>
            setNumberArrayState(shuffleFunction([...numberArrayState]))
          }
          sortClicked={() => setNumberArrayState(content.array)}
          buttonTexts={content.buttonTexts}
        />
      </Content>
    </div>
  );
}
