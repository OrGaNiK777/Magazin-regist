import { initialCards } from '../init/cards.js';

function createCards(item) {
  const cardTemplate = document.getElementById("card-template").content.querySelector(".col").cloneNode(true);
  cardTemplate.querySelectorAll(".name").forEach((el) => { el.textContent = item.name; })
  cardTemplate.querySelectorAll(".link1").forEach((el) => { el.src = item.link1 })
  cardTemplate.querySelector('#staticBackdrop').id = item.id
  cardTemplate.querySelector("#buttonModal").href = "about:blank#" + item.id

  if (item.price) { cardTemplate.querySelectorAll(".price").forEach((el) => { el.textContent = "Цена: " + item.price + " руб."; }) }
  else { cardTemplate.querySelectorAll(".price").forEach((el) => { el.textContent = "Цена: Узнать лично" }) }

  cardTemplate.querySelector(".link2").src = item.link2;
  cardTemplate.querySelector(".link3").src = item.link3;
  cardTemplate.querySelector(".link4").src = item.link4;
  cardTemplate.querySelector(".link5").src = item.link5;
  return cardTemplate;
}

function rendererCard(items) {
  items.forEach((item) => {
    document.querySelector(".cards").append(createCards(item));
  });
}

rendererCard(initialCards)

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })