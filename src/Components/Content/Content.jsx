export default function Content(props) {
  // Container for holding cards and buttons
  // Created separately for styling
  return <div className="content-container">{props.children}</div>;
}
