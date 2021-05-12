export default function Messsage(props) {
  return (
    <div className="col-xs-12 col-sm-8 col-lg-7 offset-lg-1 mb-3">
      <textarea
        id="message"
        value={props.text}
        placeholder="Click w zdjęcie - wysyła..."
        rows="4"
        onChange={(e) => props.value(e.target.value)}
      ></textarea>
    </div>
  );
}
