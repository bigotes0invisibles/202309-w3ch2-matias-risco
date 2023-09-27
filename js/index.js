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

const userCardElement = document.querySelector(".user-card");
const hiddenCardElement = document.querySelector(".hidden-card");

const deck = createDeckOfCards(cardType);

const userCard = getRandomCard(deck);
const hiddenCard = getRandomCard(deck);

setCardInUserInterFace(userCardElement, userCard);
setCardInUserInterFace(hiddenCardElement, hiddenCard);

document.querySelectorAll(".button-card").forEach((button) =>
  button.addEventListener("click", (event) => {
    showCard(hiddenCardElement);
    document.querySelector(".game-answer").textContent = isUserGuessCorrect(
      event.target.id,
      userCard,
      hiddenCard
    );
  })
);
