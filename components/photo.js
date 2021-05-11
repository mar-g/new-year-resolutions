export default function Photo(props) {
  return (
    <div className="col-xs-12 col-sm-4 col-lg-3 order-sm-2 mb-3">
      <img
        src="/mg.png"
        onClick={props.add}
        className="img-fluid mx-auto d-block"
      />
    </div>
  );
}
