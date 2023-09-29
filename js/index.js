const cards = {
  userCard: getRandomCard(deck),
  hiddenCard: getRandomCard(deck),
  haveUserGuess: false,
};

const userCardElement = document.querySelector(".current-card");
const hiddenCardElement = document.querySelector(".guess-card");

const setCardInUserInterFace = (element, card) => {
  const cardSuitElements = element.querySelectorAll(".card-suit");
  cardSuitElements.forEach(
    (cardSuitElement) => (cardSuitElement.textContent = card.suit)
  );

  const cardFiguresElements = element.querySelectorAll(".card-figure");
  cardFiguresElements.forEach(
    (cardSuitElement) => (cardSuitElement.textContent = card.figure)
  );
};

const toggleCard = (element) => {
  element
    .querySelectorAll(".card-suit")
    .forEach((element) => element.classList.toggle("display-none"));
  element.querySelector(".card-figure").classList.toggle("display-none");
  element.querySelector(".image-card").classList.toggle("display-none");
};

const startgame = (deck, cards) => {
  cards.haveUserGuess = false;
  cards.userCard = getRandomCard(deck);
  cards.hiddenCard = getRandomCard(deck);

  setCardInUserInterFace(userCardElement, cards.userCard);
  setCardInUserInterFace(hiddenCardElement, cards.hiddenCard);
};

const resetGame = () => {
  document
    .querySelector(".button-start-container")
    .classList.remove("display-none");

  document.querySelector(".game-container").classList.add("display-none");

  document.querySelector(".game-answer").textContent = "";

  toggleCard(hiddenCardElement);
  startgame(deck, cards);
};

const deck = createDeckOfCards(cardType);

startgame(deck, cards);

document
  .querySelector(".button-start-game")
  .addEventListener("click", (event) => {
    document
      .querySelector(".button-start-container")
      .classList.add("display-none");

    document.querySelector(".game-container").classList.remove("display-none");
  });

document.querySelectorAll(".button-card").forEach((button) =>
  button.addEventListener("click", (event) => {
    if (!cards.haveUserGuess) {
      toggleCard(hiddenCardElement);

      document.querySelector(".game-answer").textContent = isUserGuessCorrect(
        event.target.textContent,
        cards.userCard,
        cards.hiddenCard
      );

      cards.haveUserGuess = true;

      setTimeout(resetGame, 3000);
    }
  })
);
