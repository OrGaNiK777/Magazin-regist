import { initialCards } from '../init/cards.js';

console.log(initialCards)

function createCards(item) {
  const cardTemplate = document.getElementById("card-template").content.querySelector(".card").cloneNode(true);
  cardTemplate.querySelector(".name").textContent = item.name;
  cardTemplate.querySelector(".link1").src = item.link1;
  cardTemplate.querySelector(".link2").src = item.link2;
  cardTemplate.querySelector(".link3").src = item.link3;
  cardTemplate.querySelector(".link4").src = item.link4;
  cardTemplate.querySelector(".link5").src = item.link5;
  return cardTemplate;
}

function rendererCard(items) {
  items.forEach((item) => {
    document.querySelector(".main").append(createCards(item));
  });
}

rendererCard(initialCards)