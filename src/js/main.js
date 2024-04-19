import { initialCards } from '../init/cards.js';

function createCards(item) {
  const cardTemplate = document.getElementById("card-template").content.querySelector(".col").cloneNode(true);
  cardTemplate.querySelectorAll(".name").forEach((el) => { el.textContent = item.name; })
  cardTemplate.querySelectorAll(".link1").forEach((el) => { el.src = item.link1 })

  const modal = cardTemplate.querySelector('#staticBackdrop')
  console.log(initialCards)
  //console.log(modal.id = modal.id + cardTemplate.length)
  modal.id = modal.id + length

  // const button = cardTemplate.querySelector('#buttonModal')
  // console.log(button)
  // console.log(button.data - bs - target)

  if (item.price) { cardTemplate.querySelectorAll(".price").forEach((el) => { el.textContent = item.price + " руб."; }) }
  else { cardTemplate.querySelector(".price").textContent = "Узнать лично"; }

  // cardTemplate.querySelector(".link2").s rc = item.link2;
  // cardTemplate.querySelector(".link3").src = item.link3;
  // cardTemplate.querySelector(".link4").src = item.link4;
  // cardTemplate.querySelector(".link5").src = item.link5;
  return cardTemplate;
}

function rendererCard(items) {
  items.forEach((item) => {
    document.querySelector(".cards1").append(createCards(item));
  });
}

rendererCard(initialCards)

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })