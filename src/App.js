import Header from "./Components/Header/Header.jsx";
import "./styles.scss";
import content from "./labelData.json";

export default function App() {
  return (
    <div className="App">
      <Header text={content.headerText} />
    </div>
  );
}
