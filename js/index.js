const userCardElement = document.querySelector(".user-card");
const hiddenCardElement = document.querySelector(".hidden-card");

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

const deck = createDeckOfCards(cardType);

const userCard = getRandomCard(deck);
const hiddenCard = getRandomCard(deck);

setCardInUserInterFace(userCardElement, userCard);
setCardInUserInterFace(hiddenCardElement, hiddenCard);
