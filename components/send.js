export default function Photo({ add }) {
  return (
    <div className="col-xs-12 col-sm-4 col-lg-3 order-sm-2 mb-3">
      <img
        src="/private_message.png"
        onClick={add}
        className="img-fluid mx-auto d-block send"
      />
    </div>
  );
}
