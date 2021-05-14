export default function Messsage({ value, text }) {
  return (
    <div className="col-xs-12 col-sm-8 col-lg-7 offset-lg-1 mb-3">
      <textarea
        id="message"
        value={text}
        placeholder="Click in the picture to send"
        rows="4"
        onChange={(e) => value(e.target.value)}
      ></textarea>
    </div>
  );
}
