import "../css/card.css";

export default function Card(props) {
  const cardClass = `card ${props.name}`;
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={props.icon} alt="" />
        {props.username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{props.followers}</span>
        <span className="card-followers-title">Seguidores</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {props.today} Hoy
      </p>
    </article>
  );
}
