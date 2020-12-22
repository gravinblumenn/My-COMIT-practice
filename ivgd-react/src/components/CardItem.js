import React from "react";
import { Link } from "react-router-dom";



function CardItem({card}) {
  return (
    <>
      <li className="cards-item">
        <Link key = {card.id} className="cards-item-link" to={{
          pathname: `/GamePage/${card.id}`,
          state: {
            from: {card}
          }
          }} >
          <figure className="cards-item-pic-wrap" data-category={card.genres[0].name}>
            <img src={card.background_image} className="cards-item-img" alt="game" />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{card.name}</h5>
            <p >{`${card.rating}/ 5`}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
