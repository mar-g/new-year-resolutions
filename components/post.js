export default function Post({ id, message, remove, checkbox }) {
  return (
    <div className="item">
      <div className="icons">
        <img
          className="close-msg"
          src="close.svg"
          onClick={() => remove(id, false)}
        />
        <img
          className="edit-msg"
          src="edit.svg"
          onClick={() => remove(id, message)}
          style={{ visibility: checkbox ? "visible" : "hidden" }}
        />
      </div>
      <li>{message}</li>
    </div>
  );
}
