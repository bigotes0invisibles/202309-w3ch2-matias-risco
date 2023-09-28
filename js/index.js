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

const showCard = (element) => {
  element
    .querySelectorAll(".card-suit")
    .forEach((element) => element.classList.remove("display-none"));
  element.querySelector(".card-figure").classList.remove("display-none");
  element.querySelector(".image-card").classList.add("display-none");
};

const startgame = (deck) => {
  let haveUserGuess = false;

  const userCard = getRandomCard(deck);
  const hiddenCard = getRandomCard(deck);

  const userCardElement = document.querySelector(".current-card");
  const hiddenCardElement = document.querySelector(".guess-card");

  setCardInUserInterFace(userCardElement, userCard);
  setCardInUserInterFace(hiddenCardElement, hiddenCard);

  document.querySelectorAll(".button-card").forEach((button) =>
    button.addEventListener("click", (event) => {
      showCard(hiddenCardElement);
      if (!haveUserGuess)
        document.querySelector(".game-answer").textContent = isUserGuessCorrect(
          event.target.textContent,
          userCard,
          hiddenCard
        );
      haveUserGuess = true;
    })
  );

  document
    .querySelector(".button-start-game")
    .addEventListener("click", (event) => {
      document
        .querySelector(".button-start-container")
        .classList.add("display-none");
      document
        .querySelector(".game-container")
        .classList.remove("display-none");
    });
};

const deck = createDeckOfCards(cardType);

startgame(deck);
