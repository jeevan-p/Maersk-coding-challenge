import { useState } from "react";
// Component imports
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import Numbers from "./Components/Cards/Cards.jsx";
import Buttons from "./Components/Buttons/Buttons.jsx";
// Util and content imports
import shuffleFunction from "./Utils/shuffle";
import content from "./data.json";
// Style import
import "./styles.scss";

export default function App() {
  // State holding current array
  const [numberArrayState, setNumberArrayState] = useState(content.array);

  return (
    <div className="app">
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
