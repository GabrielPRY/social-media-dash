import CardSmall from "./card-small";
import "../css/overview.css";

const cardSmallList = [
  {
    icon: "images/icon-facebook.svg",
    views: "87",
    aumento: 3,
    key: 1,
  },
  {
    icon: "images/icon-twitter.svg",
    views: "52",
    aumento: 2,
    key: 2,
  },
  {
    icon: "images/icon-instagram.svg",
    views: "5400",
    aumento: 3,
    key: 3,
  },
  {
    icon: "images/icon-youtube.svg",
    views: "200",
    aumento: 1,
    key: 4,
  },
];

export default function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Vistas de hoy</h2>
        <div className="grid">
          {cardSmallList.map((cardData) => (
            <CardSmall
              icon={cardData.icon}
              views={cardData.views}
              aumento={cardData.aumento}
              key={cardData.views}
            ></CardSmall>
          ))}
        </div>
      </div>
    </section>
  );
}
