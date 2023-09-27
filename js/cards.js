const createDeckOfCards = (cardType) => {
  let deck = [];
  cardType.figure.forEach((figure, position) =>
    cardType.suits.forEach((suit) =>
      deck.push({ value: position, figure: figure, suit: suit })
    )
  );
  return deck;
};

const getRandomCard = (deck) => deck[Math.floor(Math.random() * deck.length)];

const isUserCardBigger = (userCard, hiddenCard) =>
  userCard.value > hiddenCard.value;

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
