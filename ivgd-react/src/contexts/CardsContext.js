import React, { createContext, useContext, useState, useEffect } from "react";

const unirest = require("unirest");

const req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games");
console.log(req);

req.headers({
	"x-rapidapi-key": "e846881a1fmsh1ee63f9163d0976p16ef04jsn8a436c9542a2",
	"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

const CardContext = createContext();

export function useCards() {
    return useContext(CardContext);
}

export function CardsProvider({children}) {

    function getGameName() {

    }

    const value = {
        getGameName,
    }

    return (
        <CardContext.Provider value = {value}>
            {children}
        </CardContext.Provider>
    );
}

export default CardsProvider;

