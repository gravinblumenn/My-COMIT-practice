var unirest = require("unirest");

var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games");

req.headers({
	"x-rapidapi-key": "e846881a1fmsh1ee63f9163d0976p16ef04jsn8a436c9542a2",
	"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});