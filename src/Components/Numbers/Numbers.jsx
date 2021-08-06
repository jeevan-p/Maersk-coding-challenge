export default function Numbers(props) {
  return (
    <div className="Numbers">
      <ul>
        {props.arrayOfNumbers.map((number, i) => (
          <li className="numbers-tile" key={i}>
            <div className={`color-${props.tileColor[number - 1]}`}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
