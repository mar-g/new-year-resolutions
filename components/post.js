export default function Post(props) {
  return (
    <div className="item">
      <div className="icons">
        <img
          className="close-msg"
          src="close.svg"
          onClick={() => props.remove(props.id, false)}
          style={{ visibility: props.checkbox ? "visible" : "hidden" }}
        />
        <img
          className="edit-msg"
          src="edit.svg"
          onClick={() => props.remove(props.id, props.message)}
          style={{ visibility: props.checkbox ? "visible" : "hidden" }}
        />
      </div>
      <li>{props.message}</li>
    </div>
  );
}
