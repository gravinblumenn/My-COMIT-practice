import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../GamePage.css";

function GamePage() {
  const location = useLocation();
  const gameCard = location.state.from.card;
  let gameGenres = gameCard.genres;
  let gamePlatforms = gameCard.platforms;
  let gameStores = gameCard.stores;
  let gameScreenshots = gameCard.short_screenshots;
  let gameTags = gameCard.tags;

  function getEsrbRating() {
    if (gameCard.esrb_rating === null){
        return 'N/A';
    } else {
        return gameCard.esrb_rating.name;
    }
  }
  
    const [gameDescription, setGameDescription] = useState([]);
    const unirest = require("unirest");

    const req = unirest("GET", `https://rawg-video-games-database.p.rapidapi.com/games/${gameCard.id}`);
    req.headers({
        "x-rapidapi-key": "e846881a1fmsh1ee63f9163d0976p16ef04jsn8a436c9542a2",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "useQueryString": true
    });

    useEffect (() => {
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            setGameDescription(res.body);
        });
    }, []);
    


  return (
    <>
      <Card>
        <Card.Body>
          <img
            src={gameCard.background_image}
            className="gamePage-pic"
            alt={gameCard.name}
          />
          <div className="gamePage-info">
            <div className="gamePage-title-container">
              <h2 className = 'gamePage-title'>{gameCard.name}</h2>
              <div className = 'gamePage-rating'>
                  {`${gameCard.rating} / ${gameCard.rating_top}`} by {gameCard.ratings_count} people
              </div>
              <div className = 'gamePage-esrb_rating'>{getEsrbRating()}</div>
            </div>
            <div className = 'gamePage-description-container'>
                <p className = 'gamePage-description'>{`${gameDescription.description_raw} Released date ${gameCard.released}`} </p>
            </div>
            <div className="gamePage-genres-container">
              <h4>Game Category:</h4>
              <div className="gamePage-genres">
                {gameGenres.map((genre) => {
                  return <p className="gamePage-genre">{genre.name}</p>;
                })}
              </div>
            </div>
            <div className="gamePage-platform-container">
              <h4>Available on:</h4>
              <div className="gamePage-platforms">
                {gamePlatforms.map((platform) => {
                  return (
                    <p className="gamePage-platform">
                      {platform.platform.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="gamePage-stores-container">
              <h4>Can be purchased from:</h4>
              <div className="gamePage-stores">
                {gameStores.map((store) => {
                  return <p className="gamePage-store">{store.store.name}</p>;
                })}
              </div>
            </div>
            <div className="gamePage-screenshots-container">
              <div className="gamePage-screenshots">
                {gameScreenshots.map((screenshot) => {
                  return (
                    <img
                      src={screenshot.image}
                      alt="game-screenshot"
                      className="game-screenshot"
                    />
                  );
                })}
              </div>
            </div>
            <div className="gamePage-tags-container">
              <div className="gamePage-tags">
                {gameTags.map((tag) => {
                  return <p className="gamePage-tag">{tag.name}</p>;
                })}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default GamePage;
