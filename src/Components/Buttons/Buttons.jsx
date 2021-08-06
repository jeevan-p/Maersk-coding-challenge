export default function Content(props) {
  return (
    <div className="buttons-container">
      <div>
        <button
          className="button shuffle-button"
          onClick={props.shuffleClicked}
        >
          {props.buttonTexts && props.buttonTexts.shuffleButtonText}
        </button>
      </div>
      <div>
        <button className="button sort-button" onClick={props.sortClicked}>
          {props.buttonTexts && props.buttonTexts.sortButtonText}
        </button>
      </div>
    </div>
  );
}
