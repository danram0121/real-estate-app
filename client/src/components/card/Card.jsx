/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <Link to={`/${item.id}`} className="imageContainer">
          <img src={item.img} alt="" />
        </Link>
        <div className="textContainer">
          <h2 className="title">
            <Link to={`/${item.id}`}>$ {item.price}</Link>
          </h2>
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>
                <b>{item.bedroom}</b> bed
              </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>
                <b>{item.bathroom}</b> bath
              </span>
            </div>
          </div>
          <div className="bottom">
            <p className="address">
              <img src="/pin.png" alt="" />
              <span>
                {item.address}, {item.city}, {item.state}
              </span>
            </p>
            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
