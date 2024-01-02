const container = document.getElementById("carousel-container");
const cards = document.querySelectorAll(".tours__card");
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

setInterval(nextCard, 2000); // Автоматична прокрутка кожні 2 секунди
