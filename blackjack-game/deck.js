const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const suits = ['c', 'd', 'h', 's'];

function createDeck() {
    const cards = [];
    for (rank of ranks) {
        for (suit of suits) {
            const card = { rank: rank, suit: suit };
            cards.push(card);
        }
    }
    return cards;
}

function displayCards (cards) {
    for (card of cards) {
        console.log(`${card.rank}${card.suit}`);
    }
}

function drawCard(deck) {
    return deck.pop();
}

module.exports = {
    createDeck,
    drawCard,
    displayCards
}