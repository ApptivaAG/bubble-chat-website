const cardsListContainer = document.getElementById("cards-list");
const cardsNavPreviousButton = document.getElementById("cards-nav-previous");
const cardsNavNextButton = document.getElementById("cards-nav-next");

const cardWidth = 400;

let cardScrollerTimer = undefined;

// window.matchMedia("(max-width: 991px)").matches -> nichts machen

function onCardsNavPrevious(e) {
  e.preventDefault();
  e.stopPropagation();
  cardsListContainer.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
}

function onCardsNavNext(e) {
  e.preventDefault();
  e.stopPropagation();
  cardsListContainer.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
}

function onCardsContainerScroll(e) {
  if (cardScrollerTimer) {
    clearTimeout(cardScrollerTimer);
  }

  cardScrollerTimer = setTimeout(() => {
    if (cardsListContainer.scrollLeft > 100) {
      cardsNavPreviousButton.disabled = false;
    } else {
      cardsNavPreviousButton.disabled = true;
    }

    if (
      cardsListContainer.offsetWidth + cardsListContainer.scrollLeft >=
      cardsListContainer.scrollWidth - 100
    ) {
      cardsNavNextButton.disabled = true;
    } else {
      cardsNavNextButton.disabled = false;
    }
  }, 50);
}

if (cardsListContainer) {
  if (cardsNavPreviousButton) {
    cardsNavPreviousButton.addEventListener("click", onCardsNavPrevious);
  }

  if (cardsNavNextButton) {
    cardsNavNextButton.addEventListener("click", onCardsNavNext);
  }

  cardsListContainer.addEventListener("scroll", onCardsContainerScroll);
}
