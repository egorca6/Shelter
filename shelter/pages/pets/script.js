let petsInfo = [
  {
    name: "Jennifer",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-katrine2.svg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

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

let pets2 = pets.map((e) => e);
Random(pets2);
let pets3 = pets.map((e) => e);
Random(pets3);
let pets4 = pets.map((e) => e);
Random(pets4);
let pets5 = pets.map((e) => e);
Random(pets5);
let pets6 = pets.map((e) => e);
Random(pets6);

const ALL_PETS = pets
  .concat(pets2)
  .concat(pets3)
  .concat(pets4)
  .concat(pets5)
  .concat(pets6);

console.log(ALL_PETS);
let CARD1_IMG = document.querySelector("#pet1_img");
let CARD1_NAME = document.querySelector("#pet1_name");
let CARD2_IMG = document.querySelector("#pet2_img");
let CARD2_NAME = document.querySelector("#pet2_name");
let CARD3_IMG = document.querySelector("#pet3_img");
let CARD3_NAME = document.querySelector("#pet3_name");
let CARD4_IMG = document.querySelector("#pet4_img");
let CARD4_NAME = document.querySelector("#pet4_name");
let CARD5_IMG = document.querySelector("#pet5_img");
let CARD5_NAME = document.querySelector("#pet5_name");
let CARD6_IMG = document.querySelector("#pet6_img");
let CARD6_NAME = document.querySelector("#pet6_name");
let CARD7_IMG = document.querySelector("#pet7_img");
let CARD7_NAME = document.querySelector("#pet7_name");
let CARD8_IMG = document.querySelector("#pet8_img");
let CARD8_NAME = document.querySelector("#pet8_name");

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
    maxPages = 48 / maxCards;
  } else if (width >= 676) {
    maxCards = 6;
    maxPages = 48 / maxCards;
  } else if (width >= 320) {
    maxCards = 3;
    maxPages = 48 / maxCards;
  }
}
setMaxCards();
window.addEventListener("resize", setMaxCards);

console.log("maxCards = " + maxCards);
console.log("maxPages = " + maxPages);

let count = 1;
let startIndex = 8;
// count = CURRENT_PAGE.textContent;
console.log("Страница  " + CURRENT_PAGE.textContent);
console.log("count = " + count);
// интересно
// list = document.querySelector(".slider");
// listItems = list.querySelectorAll(".card");

let renderCards = () => {
  if (maxCards == 8) {
    CARD1_IMG.src = ALL_PETS[startIndex].image;
    CARD1_NAME.textContent = ALL_PETS[startIndex].name;
    CARD2_IMG.src = ALL_PETS[startIndex + 1].image;
    CARD2_NAME.textContent = ALL_PETS[startIndex + 1].name;
    CARD3_IMG.src = ALL_PETS[startIndex + 2].image;
    CARD3_NAME.textContent = ALL_PETS[startIndex + 2].name;
    CARD4_IMG.src = ALL_PETS[startIndex + 3].image;
    CARD4_NAME.textContent = ALL_PETS[startIndex + 3].name;
    CARD5_IMG.src = ALL_PETS[startIndex + 4].image;
    CARD5_NAME.textContent = ALL_PETS[startIndex + 4].name;
    CARD6_IMG.src = ALL_PETS[startIndex + 5].image;
    CARD6_NAME.textContent = ALL_PETS[startIndex + 5].name;
    CARD7_IMG.src = ALL_PETS[startIndex + 6].image;
    CARD7_NAME.textContent = ALL_PETS[startIndex + 6].name;
    CARD8_IMG.src = ALL_PETS[startIndex + 7].image;
    CARD8_NAME.textContent = ALL_PETS[startIndex + 7].name;
  } else if (maxCards == 6) {
    CARD1_IMG.src = ALL_PETS[startIndex].image;
    CARD1_NAME.textContent = ALL_PETS[startIndex].name;
    CARD2_IMG.src = ALL_PETS[startIndex + 1].image;
    CARD2_NAME.textContent = ALL_PETS[startIndex + 1].name;
    CARD3_IMG.src = ALL_PETS[startIndex + 2].image;
    CARD3_NAME.textContent = ALL_PETS[startIndex + 2].name;
    CARD4_IMG.src = ALL_PETS[startIndex + 3].image;
    CARD4_NAME.textContent = ALL_PETS[startIndex + 3].name;
    CARD5_IMG.src = ALL_PETS[startIndex + 4].image;
    CARD5_NAME.textContent = ALL_PETS[startIndex + 4].name;
    CARD6_IMG.src = ALL_PETS[startIndex + 5].image;
    CARD6_NAME.textContent = ALL_PETS[startIndex + 5].name;
  } else if (maxCards == 3) {
    CARD1_IMG.src = ALL_PETS[startIndex].image;
    CARD1_NAME.textContent = ALL_PETS[startIndex].name;
    CARD2_IMG.src = ALL_PETS[startIndex + 1].image;
    CARD2_NAME.textContent = ALL_PETS[startIndex + 1].name;
    CARD3_IMG.src = ALL_PETS[startIndex + 2].image;
    CARD3_NAME.textContent = ALL_PETS[startIndex + 2].name;
  }
};

let moveRigth = () => {
  ARROW_LEFT.className = "button_arrow";
  ARROW_LEFT_ALL.className = "button_arrow";

  ++count;
  startIndex = (count - 1) * maxCards;
  CURRENT_PAGE.textContent = count;

  console.log("startIndex " + startIndex);
  console.log("count =  " + count);
  console.log("Страница =" + CURRENT_PAGE.textContent);
  renderCards();
  //  сюда функцию !
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
  if (count > 1) {
    ARROW_RIGHT.className = "button_arrow";
    ARROW_RIGHT_ALL.className = "button_arrow";
    count = --CURRENT_PAGE.textContent;
    ARROW_RIGHT.addEventListener("click", moveRigth);
  } else {
    ARROW_LEFT.className = "button_arrow_left";
    ARROW_LEFT_ALL.className = "button_arrow_left";
    ARROW_LEFT.removeEventListener("click", moveLeft);
    ARROW_RIGHT.addEventListener("click", moveRigth);
  }

  startIndex = (count - 1) * maxCards;
  console.log("startIndex " + startIndex);
  console.log("count =  " + count);
  renderCards();
};

const moveRigthAll = () => {
  ARROW_LEFT.className = "button_arrow";
  ARROW_LEFT_ALL.className = "button_arrow";
  CURRENT_PAGE.textContent = maxPages;
  count = maxPages;
  startIndex = (count - 1) * maxCards;
  console.log("startIndex ALL RIGHT = " + startIndex);
  console.log("count ALL RIGHT=  " + count);
  renderCards();

  ARROW_RIGHT.className = "button_arrow_left";
  ARROW_RIGHT_ALL.className = "button_arrow_left";
  ARROW_RIGHT.removeEventListener("click", moveRigthAll);
  ARROW_RIGHT.removeEventListener("click", moveRigth);
  ARROW_LEFT.addEventListener("click", moveLeft);
};

const moveLeftAll = () => {
  ARROW_RIGHT.className = "button_arrow";
  ARROW_RIGHT_ALL.className = "button_arrow";
  CURRENT_PAGE.textContent = 1;
  count = CURRENT_PAGE.textContent;
  startIndex = (count - 1) * maxCards;
  console.log("Count=  " + count);

  renderCards();
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
// ПОпап
// Попап начало
let cards = document.querySelectorAll(".card");

let pop = document.querySelector(".pop ");
let pop_wrapper = document.querySelector(".pop_wrapper");
let button_pop = document.querySelector(".pop_button");
let name_pet = document.querySelectorAll(".h4_card");

let black = document.querySelector(
  "body > div > main > section.pets > div.blackout"
);

const get_modal = (item) => {
  let result = {};
  petsInfo.map((pet, i, arr) => {
    if (item.querySelector(".h4_card").innerText == pet.name) {
      console.log(arr[i]);
      result = arr[i];
    }
  });
  pop.querySelector(".pop_img").src = result.img;
  pop.querySelector(".pop_title").textContent = result.name;
  pop.querySelector(
    ".pop_subtitle"
  ).textContent = `${result.type} - ${result.breed}`;
  pop.querySelector(".pop_text").textContent = result.description;
  pop.querySelector(".pop_age").textContent = result.age;
  pop.querySelector(".inoculations").textContent = result.inoculations;
  pop.querySelector(".diseases").textContent = result.diseases;
  pop.querySelector(".parasites").textContent = result.parasites;
};

cards.forEach((item) => {
  item.addEventListener("click", (event) => {
    pop.classList.add("active");
    black.classList.toggle("on");
    document.body.style.overflow = "hidden";
    console.log("Имя пета = " + item.querySelector(".h4_card").innerText);
    console.log(item.querySelector(".h4_card").innerText == petsInfo[0].name);
    get_modal(item);
  });
});

button_pop.addEventListener("click", () => {
  pop.classList.remove("active");
  black.classList.remove("on");
  document.body.style.overflow = "";
});
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("pop") &&
    event.target.classList.contains("active")
  ) {
    pop.classList.remove("active");
    black.classList.remove("on");
    document.body.style.overflow = "";
  }
});
