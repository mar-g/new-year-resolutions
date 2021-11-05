export default function Messsage({ value, text }) {
  return (
    <div className="col-xs-12 col-sm-8 col-lg-7 offset-lg-1 mb-3">
      <textarea
        id="message"
        value={text}
        placeholder="Klik w kopertę wysyła..."
        rows="5"
        onChange={(e) => value(e.target.value)}
      ></textarea>
    </div>
  );
}
