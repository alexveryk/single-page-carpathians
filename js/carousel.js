const container = document.getElementById("carousel-container");
const cards = document.querySelectorAll(".tours__card");
const btnLeft = document.querySelector("#tours__btn-left");
const btnRight = document.querySelector("#tours__btn-right");




let currentIndex = 0;

function showCard(index) {
  const offset = -index * 326; // Ширина карточки (311px) + відстань між карточками (15px)
  container.style.transform = `translateX(${offset}px)`;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

btnLeft.addEventListener("click", prevCard)
btnRight.addEventListener("click", nextCard)

// setInterval(nextCard, 2000); // Автоматична прокрутка кожні 2 секунди
