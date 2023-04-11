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
// Пагинация  Начало

const pets = [
  {
    name: "Katrine",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-katrine.png",
  },
  {
    name: "Jennifer",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-jennifer.png",
  },
  {
    name: "Woody",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-woody.png",
  },
  {
    name: "Sophia",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-sophia.png",
  },
  {
    name: "Timmy",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-timmy.png",
  },
  {
    name: "Charly",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-charly.png",
  },
  {
    name: "Scarlett",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-scarlet.png",
  },
  {
    name: "Freddie",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-freddie.png",
  },
];
function Random(arr) {
  let random_arr;
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    random_arr = [pets[i], pets[j]] = [pets[j], pets[i]];
  }
  return random_arr;
}

Random(pets);

let pets2 = pets.map((e) => e);
Random(pets2);
let pets3 = pets2.map((e) => e);
Random(pets3);
let pets4 = pets3.map((e) => e);
Random(pets4);
let pets5 = pets4.map((e) => e);
Random(pets5);
let pets6 = pets5.map((e) => e);
Random(pets6);

const ALL_PETS = pets
  .concat(pets2)
  .concat(pets3)
  .concat(pets4)
  .concat(pets5)
  .concat(pets6);

const CARD1_IMG = document.querySelector("#pet1_img");
const CARD1_NAME = document.querySelector("#pet1_name");
const CARD2_IMG = document.querySelector("#pet2_img");
const CARD2_NAME = document.querySelector("#pet2_name");
const CARD3_IMG = document.querySelector("#pet3_img");
const CARD3_NAME = document.querySelector("#pet3_name");
const CARD4_IMG = document.querySelector("#pet4_img");
const CARD4_NAME = document.querySelector("#pet4_name");
const CARD5_IMG = document.querySelector("#pet5_img");
const CARD5_NAME = document.querySelector("#pet5_name");
const CARD6_IMG = document.querySelector("#pet6_img");
const CARD6_NAME = document.querySelector("#pet6_name");
const CARD7_IMG = document.querySelector("#pet7_img");
const CARD7_NAME = document.querySelector("#pet7_name");
const CARD8_IMG = document.querySelector("#pet8_img");
const CARD8_NAME = document.querySelector("#pet8_name");
const ARROW_LEFT_ALL = document.querySelector(
  "body > div > main > section > div > div.navigetion > button:nth-child(1)"
);
const ARROW_LEFT = document.querySelector(
  "body > div > main > section > div > div.navigetion > button:nth-child(2)"
);

const ARROW_RIGHT = document.querySelector("#button_right");
const ARROW_RIGHT_ALL = document.querySelector(
  "body > div > main > section > div > div.navigetion > button:nth-child(5)"
);

const CURRENT_PAGE = document.querySelector(
  "body > div > main > section > div > div.navigetion > button:nth-child(3)"
);
CARD1_IMG.src = ALL_PETS[0].image;
CARD1_NAME.textContent = ALL_PETS[0].name;
CARD2_IMG.src = ALL_PETS[1].image;
CARD2_NAME.textContent = ALL_PETS[1].name;
CARD3_IMG.src = ALL_PETS[2].image;
CARD3_NAME.textContent = ALL_PETS[2].name;
CARD4_IMG.src = ALL_PETS[3].image;
CARD4_NAME.textContent = ALL_PETS[3].name;
CARD5_IMG.src = ALL_PETS[4].image;
CARD5_NAME.textContent = ALL_PETS[4].name;
CARD6_IMG.src = ALL_PETS[5].image;
CARD6_NAME.textContent = ALL_PETS[5].name;
CARD7_IMG.src = ALL_PETS[6].image;
CARD7_NAME.textContent = ALL_PETS[6].name;
CARD8_IMG.src = ALL_PETS[7].image;
CARD8_NAME.textContent = ALL_PETS[7].name;

let maxCards;

function setMaxCards() {
  const width = window.innerWidth;
  if (width >= 1280) {
    maxCards = 8;
  } else if (width >= 676) {
    maxCards = 6;
  } else if (width >= 320) {
    maxCards = 3;
  }
}
setMaxCards();
window.addEventListener("resize", setMaxCards);
let maxPages = 48 / maxCards;
console.log("maxCards = " + maxCards);
console.log("maxPages = " + maxPages);

let count = 1;
// count = CURRENT_PAGE.textContent;
console.log("Страница  " + CURRENT_PAGE.textContent);
console.log("count = " + count);

listItems = document.querySelectorAll(".card");

let moveRigth = () => {
  ARROW_LEFT.className = "button_arrow";
  ARROW_LEFT_ALL.className = "button_arrow";

  ++count;
  CURRENT_PAGE.textContent = count;
  let startIndex = (count - 1) * maxCards;
  console.log("startIndex " + startIndex);
  console.log("count =  " + count);

  listItems.forEach((e, i) => {
    e.querySelector("img").src = arr[i].img;
    e.querySelector(".slider__title").textContent = arr[i].name;
  });
  // document.querySelector("#pet1_img").src = ALL_PETS[startIndex].image;
  // CARD1_NAME.textContent = ALL_PETS[startIndex].name;
  // CARD2_IMG.src = ALL_PETS[startIndex + 1].image;
  // CARD2_NAME.textContent = ALL_PETS[startIndex + 1].name;
  // CARD3_IMG.src = ALL_PETS[startIndex + 2].image;
  // CARD3_NAME.textContent = ALL_PETS[startIndex + 2].name;
  // CARD4_IMG.src = ALL_PETS[startIndex + 3].image;
  // CARD4_NAME.textContent = ALL_PETS[startIndex + 3].name;
  // CARD5_IMG.src = ALL_PETS[startIndex + 4].image;
  // CARD5_NAME.textContent = ALL_PETS[startIndex + 4].name;
  // CARD6_IMG.src = ALL_PETS[startIndex + 5].image;
  // CARD6_NAME.textContent = ALL_PETS[startIndex + 5].name;
  // CARD7_IMG.src = ALL_PETS[startIndex + 6].image;
  // CARD7_NAME.textContent = ALL_PETS[startIndex + 6].name;
  // CARD8_IMG.src = ALL_PETS[startIndex + 7].image;
  // CARD8_NAME.textContent = ALL_PETS[startIndex + 7].name;
  console.log(CARD1_IMG);
  if (count > maxPages - 1) {
    ARROW_RIGHT.className = "button_arrow_left";
    ARROW_RIGHT_ALL.className = "button_arrow_left";
    ARROW_RIGHT.removeEventListener("click", moveRigth);
  } else {
    ARROW_RIGHT.addEventListener("click", moveRigth);
    ARROW_LEFT.addEventListener("click", moveLeft);
  }
};

const moveLeft = () => {
  ARROW_RIGHT.className = "button_arrow";
  ARROW_RIGHT_ALL.className = "button_arrow";
  count = --CURRENT_PAGE.textContent;

  let startIndex = (count - 1) * maxCards;
  CARD1_IMG.src = `${ALL_PETS[startIndex].image}`;
  CARD1_NAME.textContent = `${ALL_PETS[startIndex].name}`;
  CARD2_IMG.src = `${ALL_PETS[startIndex + 1].image}`;
  CARD2_NAME.textContent = `${ALL_PETS[startIndex + 1].name}`;
  CARD3_IMG.src = `${ALL_PETS[startIndex + 2].image}`;
  CARD3_NAME.textContent = `${ALL_PETS[startIndex + 2].name}`;
  CARD4_IMG.src = `${ALL_PETS[startIndex + 3].image}`;
  CARD4_NAME.textContent = `${ALL_PETS[startIndex + 3].name}`;
  CARD5_IMG.src = `${ALL_PETS[startIndex + 4].image}`;
  CARD5_NAME.textContent = `${ALL_PETS[startIndex + 4].name}`;
  CARD6_IMG.src = `${ALL_PETS[startIndex + 5].image}`;
  CARD6_NAME.textContent = `${ALL_PETS[startIndex + 5].name}`;
  CARD7_IMG.src = `${ALL_PETS[startIndex + 6].image}`;
  CARD7_NAME.textContent = `${ALL_PETS[startIndex + 6].name}`;
  CARD8_IMG.src = `${ALL_PETS[startIndex + 7].image}`;
  CARD8_NAME.textContent = `${ALL_PETS[startIndex + 7].name}`;
  while (count < 2) {
    ARROW_LEFT.className = "button_arrow_left";
    ARROW_LEFT_ALL.className = "button_arrow_left";
    ARROW_LEFT.removeEventListener("click", moveLeft);
    ARROW_RIGHT.addEventListener("click", moveRigth);
    break;
  }
};

const moveRigthAll = () => {
  ARROW_LEFT.className = "button_arrow";
  ARROW_LEFT_ALL.className = "button_arrow";
  CURRENT_PAGE.textContent = maxPages;
  let count = CURRENT_PAGE.textContent;
  let startIndex = (count - 1) * maxCards;

  CARD1_IMG.src = `${ALL_PETS[startIndex].image}`;
  CARD1_NAME.textContent = `${ALL_PETS[startIndex].name}`;
  CARD2_IMG.src = `${ALL_PETS[startIndex + 1].image}`;
  CARD2_NAME.textContent = `${ALL_PETS[startIndex + 1].name}`;
  CARD3_IMG.src = `${ALL_PETS[startIndex + 2].image}`;
  CARD3_NAME.textContent = `${ALL_PETS[startIndex + 2].name}`;
  CARD4_IMG.src = `${ALL_PETS[startIndex + 3].image}`;
  CARD4_NAME.textContent = `${ALL_PETS[startIndex + 3].name}`;
  CARD5_IMG.src = `${ALL_PETS[startIndex + 4].image}`;
  CARD5_NAME.textContent = `${ALL_PETS[startIndex + 4].name}`;
  CARD6_IMG.src = `${ALL_PETS[startIndex + 5].image}`;
  CARD6_NAME.textContent = `${ALL_PETS[startIndex + 5].name}`;
  CARD7_IMG.src = `${ALL_PETS[startIndex - 2].image}`;
  CARD7_NAME.textContent = `${ALL_PETS[startIndex - 2].name}`;
  CARD8_IMG.src = `${ALL_PETS[startIndex - 3].image}`;
  CARD8_NAME.textContent = `${ALL_PETS[startIndex - 3].name}`;

  ARROW_RIGHT.className = "button_arrow_left";
  ARROW_RIGHT_ALL.className = "button_arrow_left";
  ARROW_RIGHT.removeEventListener("click", moveRigthAll);
  ARROW_LEFT.addEventListener("click", moveLeft);
};

const moveLeftAll = () => {
  ARROW_RIGHT.className = "button_arrow";
  ARROW_RIGHT_ALL.className = "button_arrow";
  CURRENT_PAGE.textContent = 1;
  let count = CURRENT_PAGE.textContent;
  let startIndex = (count - 1) * maxCards;

  CARD1_IMG.src = `${ALL_PETS[startIndex].image}`;
  CARD1_NAME.textContent = `${ALL_PETS[startIndex].name}`;
  CARD2_IMG.src = `${ALL_PETS[startIndex + 1].image}`;
  CARD2_NAME.textContent = `${ALL_PETS[startIndex + 1].name}`;
  CARD3_IMG.src = `${ALL_PETS[startIndex + 2].image}`;
  CARD3_NAME.textContent = `${ALL_PETS[startIndex + 2].name}`;
  CARD4_IMG.src = `${ALL_PETS[startIndex + 3].image}`;
  CARD4_NAME.textContent = `${ALL_PETS[startIndex + 3].name}`;
  CARD5_IMG.src = `${ALL_PETS[startIndex + 4].image}`;
  CARD5_NAME.textContent = `${ALL_PETS[startIndex + 4].name}`;
  CARD6_IMG.src = `${ALL_PETS[startIndex + 5].image}`;
  CARD6_NAME.textContent = `${ALL_PETS[startIndex + 5].name}`;
  CARD7_IMG.src = `${ALL_PETS[startIndex + 6].image}`;
  CARD7_NAME.textContent = `${ALL_PETS[startIndex + 6].name}`;
  CARD8_IMG.src = `${ALL_PETS[startIndex + 7].image}`;
  CARD8_NAME.textContent = `${ALL_PETS[startIndex + 7].name}`;
  ARROW_LEFT.className = "button_arrow_left";
  ARROW_LEFT_ALL.className = "button_arrow_left";

  ARROW_RIGHT.addEventListener("click", moveRigth);
  ARROW_LEFT.removeEventListener("click", moveLeftAll);
};

ARROW_RIGHT.addEventListener("click", moveRigth);
ARROW_RIGHT_ALL.addEventListener("click", moveRigthAll);
ARROW_LEFT.addEventListener("click", moveLeft);
ARROW_LEFT_ALL.addEventListener("click", moveLeftAll);
// Пагинация  Конец
