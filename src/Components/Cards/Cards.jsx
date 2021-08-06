export default function Cards(props) {
  return (
    <div className="cards-container">
      <ul>
        {props.arrayOfNumbers &&
          props.arrayOfNumbers.length > 0 &&
          props.arrayOfNumbers.map((number, i) => (
            <li className="numbers-tile" key={i}>
              <div
                className={`color-${
                  props.tileColor && props.tileColor[number - 1]
                }`}
              >
                {number}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
