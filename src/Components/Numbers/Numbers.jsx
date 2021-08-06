import "./Numbers.scss";

const tileColor = [
  "#6F98A8",
  "#2B8EAD",
  "#2F454E",
  "#2B8EAD",
  "#2F454E",
  "#BFBFBF",
  "#BFBFBF",
  "#6F98A8",
  "#2F454E"
];

export default function Numbers(props) {
  return (
    <div className="Numbers">
      <ul>
        {props.arrayOfNumbers.map((number, i) => (
          <li className="numbers-tile" key={i}>
            <div style={{ backgroundColor: tileColor[number - 1] }}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
