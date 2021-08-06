export default function Content(props) {
  return (
    <div className="Buttons">
      <div>
        <button onClick={props.shuffleClicked}>
          {props.buttonTexts.shuffleButtonText}
        </button>
      </div>
      <div>
        <button onClick={props.sortClicked}>
          {props.buttonTexts.sortButtonText}
        </button>
      </div>
    </div>
  );
}
