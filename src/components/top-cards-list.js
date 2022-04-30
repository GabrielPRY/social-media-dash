import Card from "./card";
import "../css/top-cards-list.css";

const cardListData = [
  {
    username: "@Pepillo",
    id: 1,
    followers: "1.5k",
    todayFollowers: 10,
    icon: "images/icon-facebook.svg",
    name: "facebook",
  },
  {
    username: "@Pepillo",
    id: 2,
    followers: "28k",
    todayFollowers: 10,
    icon: "images/icon-twitter.svg",
    name: "twitter",
  },
  {
    username: "@Pepillo",
    id: 3,
    followers: "6k",
    todayFollowers: 10,
    icon: "images/icon-instagram.svg",
    name: "instagram",
  },
  {
    username: "@Pepillo",
    id: 4,
    followers: "12k",
    todayFollowers: 10,
    icon: "images/icon-youtube.svg",
    name: "youtube",
  },
];

export default function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card
              key={cardData.id}
              username={cardData.username}
              followers={cardData.followers}
              today={cardData.todayFollowers}
              icon={cardData.icon}
              name={cardData.name}
            ></Card>
          ))}

          {/* <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}
