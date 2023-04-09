console.log(
  "Score: 100 / 100\n [+] Вёрстка страницы Main соответствует макету при ширине экрана 1280px: (14)\n [+] Вёрстка страницы Main соответствует макету при ширине экрана 768px: (14)\n [+] Вёрстка страницы Main соответствует макету при ширине экрана 320px: (14)\n [+] Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: (6)\n [+] Вёрстка страницы Pets соответствует макету при ширине экрана 768px: (6)\n [+] Вёрстка страницы Pets соответствует макету при ширине экрана 320px: (6)\n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется:\n[+] нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n [+] нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n [+] нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5\n [+] нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5"
);
console.log(
  "Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции\n [+] на странице Main: (4)\n [+] на странице Pets: (4)"
);
console.log(
  "[+] При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: (4) \nОткрытие меню при клике на иконку бургер-меню на текущем этапе не проверяется"
);
console.log(
  "[+] Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ (8)"
);
// Бургер начало

const burger = document.querySelector(".burger_wrap");
const headerLink = document.querySelectorAll(".header_link");
const burgerMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () =>
  document.querySelector(".wrapper").classList.toggle("open")
);
burger.addEventListener("click", () =>
  document.querySelector(".blackout").classList.toggle("on")
);

burger.addEventListener("click", () =>
  document.querySelector("body").classList.toggle("noScroll")
);
document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
    document.querySelector(".wrapper").classList.remove("open");
  }
});
document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
    document.querySelector(".blackout").classList.remove("on");
  }
});
document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
    document.querySelector("body").classList.remove("noScroll");
  }
});

headerLink.forEach((el) =>
  el.addEventListener("click", () =>
    document.querySelector(".wrapper").classList.remove("open")
  )
);
headerLink.forEach((el) =>
  el.addEventListener("click", () =>
    document.querySelector(".blackout").classList.remove("on")
  )
);

headerLink.forEach((el) =>
  el.addEventListener("click", () =>
    document.querySelector("body").classList.remove("noScroll")
  )
);
// Бургер конец

// Слайдер Начало

const ARROW_LEFT = document.querySelector(".arrow_left");
const ARROW_RIGTH = document.querySelector(".arrow_rigth");
const CAROUSEL = document.querySelector(".carousel");
let left1 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(1)"
);
let left2 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(2)"
);
let left3 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(3)"
);
let center1 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(4)"
);
let center2 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(5)"
);
let center3 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(6)"
);
let right1 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(7)"
);
let right2 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(8)"
);
let right3 = document.querySelector(
  "body > div > main > section.pets > div > div.slider > div > div > div:nth-child(9)"
);

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  ARROW_LEFT.removeEventListener("click", moveLeft);
  ARROW_RIGTH.removeEventListener("click", moveRigth);
};

const moveRigth = () => {
  CAROUSEL.classList.add("transition-right");
  ARROW_RIGTH.removeEventListener("click", moveRigth);
  ARROW_LEFT.removeEventListener("click", moveLeft);
};
const createCard = () => {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
};

ARROW_LEFT.addEventListener("click", moveLeft);
ARROW_RIGTH.addEventListener("click", moveRigth);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    center1.innerHTML = left1.innerHTML;
    center2.innerHTML = left2.innerHTML;
    center3.innerHTML = left3.innerHTML;

    const card1 = createCard();
    card1.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-freddie.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Freddie</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-scarlet.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Scarlett</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card3 = createCard();
    card3.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-charly.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Charly</h4>
    <button class="learn_more" type="submit">Learn more</button>`;
    left1.innerHTML = "";
    left2.innerHTML = "";
    left3.innerHTML = "";
    left1.prepend(card1);
    left2.prepend(card2);
    left3.prepend(card3);
  } else if (animationEvent.animationName === "move-left768") {
    // для 768px
    CAROUSEL.classList.remove("transition-left");
    center1.innerHTML = left2.innerHTML;
    center2.innerHTML = left3.innerHTML;
    const card1 = createCard();
    card1.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-freddie.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Freddie</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-scarlet.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Scarlett</h4>
    <button class="learn_more" type="submit">Learn more</button>`;
    left2.innerHTML = "";
    left3.innerHTML = "";
    left2.prepend(card1);
    left3.prepend(card2);
  } else if (animationEvent.animationName === "move-right768") {
    CAROUSEL.classList.remove("transition-right");
    center1.innerHTML = center3.innerHTML;
    center2.innerHTML = right1.innerHTML;
    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-freddie.png"
    alt="pet Woody"
  />
  <h4 class="h4_card">Freddie</h4>
  <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
    class="card_pets"
    src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-katrine2.svg"
    alt="pet katrine"
  />
  <h4 class="h4_card" id="pet1">Katrine</h4>
  <button class="learn_more" type="submit">Learn more</button>`;
    center3.innerHTML = "";
    right1.innerHTML = "";
    center3.prepend(card1);
    right1.prepend(card2);
  } else if (animationEvent.animationName === "move-left320") {
    CAROUSEL.classList.remove("transition-left");
    center1.innerHTML = left3.innerHTML;

    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-jennifer.png"
    alt="pet Jennifer"
  />
  <h4 class="h4_card" id="pet2">Jennifer</h4>
  <button class="learn_more" type="submit">Learn more</button>`;

    left3.innerHTML = "";
    left3.prepend(card1);
  } else if (animationEvent.animationName === "move-right320") {
    CAROUSEL.classList.remove("transition-right");
    center1.innerHTML = center2.innerHTML;
    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-charly.png"
    alt="pet Woody"
  />
  <h4 class="h4_card" id="pet6">Charly</h4>
  <button class="learn_more" type="submit">Learn more</button>`;
    center2.innerHTML = "";
    center2.prepend(card1);
  } else {
    CAROUSEL.classList.remove("transition-right");
    center1.innerHTML = right1.innerHTML;
    center2.innerHTML = right2.innerHTML;
    center3.innerHTML = right3.innerHTML;

    const card1 = createCard();
    card1.innerHTML = `<div class="card">
    <img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-jennifer.png"
      alt="pet Jennifer"
    />
    <h4 class="h4_card">Jennifer</h4>
    <button class="learn_more" type="submit">Learn more</button>
  </div>`;

    const card2 = createCard();
    card2.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-woody.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Woody</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card3 = createCard();
    card3.innerHTML = `<img
      class="card_pets"
      src="/egorca6-JSFE2023Q1/shelter/assets/images/pets-sophia.png"
      alt="pet Woody"
    />
    <h4 class="h4_card">Sophia</h4>
    <button class="learn_more" type="submit">Learn more</button>`;
    right1.innerHTML = "";
    right2.innerHTML = "";
    right3.innerHTML = "";
    right1.appendChild(card1);
    right2.appendChild(card2);
    right3.appendChild(card3);
  }

  ARROW_LEFT.addEventListener("click", moveLeft);
  ARROW_RIGTH.addEventListener("click", moveRigth);
});

// Слайдер Конец
