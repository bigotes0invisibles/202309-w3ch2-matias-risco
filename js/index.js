const createDeckOfCards = (cardType, deck) => {
  cardType.figure.forEach((figure, position) =>
    cardType.suits.forEach((suit) =>
      deck.push({ value: position, figure: figure, suit: suit })
    )
  );
  return deck;
};

const cardType = {
  suits: ["♣", "♦", "♥", "♠"],
  figure: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ],
};

let deck = [];

deck = createDeckOfCards(cardType, deck);

deck.forEach((card) => console.log(`${card.figure} ${card.suit}`));
