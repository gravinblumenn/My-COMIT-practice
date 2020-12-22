import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import {useCards} from '../contexts/CardsContext';
import SearchBar from "./Search";


function Cards() {
    const {cards} = useCards();
    
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
              {cards.map((card) => 
                <CardItem
                    card = {card}
                />
            )}
          </ul>        
          </div>
      </div>
    </div>
  );
}

export default Cards;
