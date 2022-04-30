import "../css/card-small.css";

export default function CardSmall(props) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={props.icon} alt="" />
      </p>
      <p className="card-small-number">{props.views}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {props.aumento}%
        </span>
      </p>
    </div>
  );
}
