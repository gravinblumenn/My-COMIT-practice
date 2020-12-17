import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import {useCards} from '../contexts/CardsContext';

function Cards() {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
            <CardItem
              src="../imgs/exampleIMG.jpg"
              label="Game Categories"
              text="This would be the title"
              rating="4.5/5"
              path="/"
            />
          </ul>
        
          </div>
      </div>
    </div>
  );
}

export default Cards;
