const initialCards = [
  {
    name: "Шикарный комплект🌷 из пушистой пряжи пух норки 🌷в фиалковом оттенке (розово-фиолетовый) в палитре 058🌷",
    link1: "../../img/11.jpg",
    link2: "../../img/12.jpg",
    link3: "../../img/12.jpg",
    price: 7100,
    id: "wdqw332232e233e2"
  },
  {
    name: "Восхитительный комплект🌷 из пушистой пряжи пух норки 🌷в терракотовом оттенке 🌷",
    link1: "../../img/1.jpg",
    link2: "../../img/2.jpg",
    link3: "../../img/3.jpg",
    price: 6500,
    id: "wdqw3322sd32ef233e2"
  }

];

function createCards(item) {
  const cardTemplate = document.getElementById("card-template").content.querySelector(".col").cloneNode(true);
  cardTemplate.querySelector(".name").textContent = item.name;
  cardTemplate.querySelector('.slide').id = item.id
  cardTemplate.querySelector('.carousel-control-prev').href = "#" + item.id
  cardTemplate.querySelector('.carousel-control-next').href = "#" + item.id
  cardTemplate.querySelectorAll('#buttonSlide').forEach((el) => {
    el.href = "#" + item.id;

  })

  const link1 = cardTemplate.querySelector(".link1")
  const link2 = cardTemplate.querySelector(".link2")
  const link3 = cardTemplate.querySelector(".link3")
  const link4 = cardTemplate.querySelector(".link4")
  const link5 = cardTemplate.querySelector(".link5")
  const zoomImg = document.querySelector(".zoomImg")

  if (item.link1) {
    link1.src = item.link1;
    link1.alt = item.name;
  }
  if (item.link2) {
    link2.src = item.link2;
    link2.alt = item.name;
  }
  if (item.link3) {
    link3.src = item.link3;
    link3.alt = item.name;
  }

  // if (item.link4) {
  //   link3.src = item.link4;
  //   link3.alt = item.name;
  // }
  // if (item.link4) {
  //   link3.src = item.link4;
  //   link3.alt = item.name;
  // }

  link1.addEventListener("mousedown", () => {
    zoomImg.src = item.link1
  })
  link2.addEventListener("mousedown", () => {
    zoomImg.src = item.link2
  })
  link3.addEventListener("mousedown", () => {
    zoomImg.src = item.link3
  })
  // link4.addEventListener("mousedown", () => {
  //   zoomImg.src = item.link4
  // })
  // link5.addEventListener("mousedown", () => {
  //   zoomImg.src = item.link5
  // })

  if (item.price) { cardTemplate.querySelectorAll(".price").forEach((el) => { el.textContent = "Цена: " + item.price + " руб."; }) }
  else { cardTemplate.querySelectorAll(".price").forEach((el) => { el.textContent = "Цена: Узнать лично" }) }
  return cardTemplate;
}

function rendererCard(items) {
  items.forEach((item) => {
    document.querySelector(".cards").append(createCards(item));
  });
}

rendererCard(initialCards)