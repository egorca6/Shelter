console.log("[+] Реализация burger menu на обеих страницах: 26 (26)");
console.log("[+-]Реализация слайдера-карусели на странице 32 (36)");
console.log("[+]Реализация пагинации на странице  36 (36)");
console.log("[+]Реализация попап на обеих страницах 14 (14)");
console.log("Score 106 (110)");
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
const pets = [
  {
    name: "Katrine",
    image: "/egorca6-JSFE2023Q1/shelter/assets/images/pets-katrine2.svg",
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

function Random() {
  let randon_arr;
  for (let i = 0; i < pets.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    randon_arr = [pets[i], pets[j]] = [pets[j], pets[i]];
  }
  return randon_arr;
}

// новое
Random();
console.log(pets);
center1.innerHTML = `<img
class="card_pets"
src="${pets[0].image}" 
alt="pet Woody"
/>
<h4 class="h4_card">${pets[0].name}</h4>
<button class="learn_more" type="submit">Learn more</button>`;
center2.innerHTML = `<img
class="card_pets"
src="${pets[1].image}" 
alt="pet Woody"
/>
<h4 class="h4_card">${pets[1].name}</h4>
<button class="learn_more" type="submit">Learn more</button>`;
center3.innerHTML = `<img
class="card_pets"
src="${pets[2].image}" 
alt="pet Woody"
/>
<h4 class="h4_card">${pets[2].name}</h4>
<button class="learn_more" type="submit">Learn more</button>`;

ARROW_LEFT.addEventListener("click", moveLeft);
ARROW_RIGTH.addEventListener("click", moveRigth);
let card1 = createCard();
let card2 = createCard();
let card3 = createCard();
let count = 0;
let renderCards = () => {
  card1.innerHTML = `<div class="card">
  <img
    class="card_pets"
    src="${pets[0].image}"
    alt="pet Jennifer"
  />
  <h4 class="h4_card">${pets[0].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>
</div>`;

  card2.innerHTML = `<img
    class="card_pets"
    src="${pets[1].image}"
    alt="pet Woody"
  />
  <h4 class="h4_card">${pets[1].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;

  card3.innerHTML = `<img
    class="card_pets"
    src="${pets[2].image}"
    alt="pet Woody"
  />
  <h4 class="h4_card">${pets[2].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;
};

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");

    center1.innerHTML = left1.innerHTML;
    center2.innerHTML = left2.innerHTML;
    center3.innerHTML = left3.innerHTML;
    Random();

    const card1 = createCard();
    card1.innerHTML = `<img
      class="card_pets"
      src="${pets[7].image}" 
      alt="pet Woody"
    />
    <h4 class="h4_card">${pets[7].name}</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
      class="card_pets"
      src="${pets[6].image}"
      alt="pet Woody"
    />
    <h4 class="h4_card">${pets[6].name}</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card3 = createCard();
    card3.innerHTML = `<img
      class="card_pets"
      src="${pets[5].image}"
      alt="pet Woody"
    />
    <h4 class="h4_card">${pets[5].name}</h4>
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
    Random();

    const card1 = createCard();
    card1.innerHTML = `<img
      class="card_pets"
      src="${pets[7].image}"
      alt="pet Woody"
    />
    <h4 class="h4_card">${pets[7].name}</h4>
    <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
      class="card_pets"
      src="${pets[6].image}"
      alt="pet Woody"
    />
    <h4 class="h4_card">${pets[6].name}</h4>
    <button class="learn_more" type="submit">Learn more</button>`;
    left2.innerHTML = "";
    left3.innerHTML = "";
    left2.prepend(card1);
    left3.prepend(card2);
  } else if (animationEvent.animationName === "move-right768") {
    CAROUSEL.classList.remove("transition-right");
    center1.innerHTML = center3.innerHTML;
    center2.innerHTML = right1.innerHTML;
    Random();
    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="${pets[2].image}"
    alt="pet Woody"
  />
  <h4 class="h4_card">${pets[2].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;

    const card2 = createCard();
    card2.innerHTML = `<img
    class="card_pets"
    src="${pets[3].image}"
    alt="pet katrine"
  />
  <h4 class="h4_card" id="pet1">${pets[3].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;
    center3.innerHTML = "";
    right1.innerHTML = "";
    center3.prepend(card1);
    right1.prepend(card2);
  } else if (animationEvent.animationName === "move-left320") {
    CAROUSEL.classList.remove("transition-left");
    center1.innerHTML = left3.innerHTML;
    Random();
    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="${pets[6].image}"
    alt="pet Jennifer"
  />
  <h4 class="h4_card" id="pet2">${pets[6].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;

    left3.innerHTML = "";
    left3.prepend(card1);
  } else if (animationEvent.animationName === "move-right320") {
    CAROUSEL.classList.remove("transition-right");
    center1.innerHTML = center2.innerHTML;
    Random();
    const card1 = createCard();
    card1.innerHTML = `<img
    class="card_pets"
    src="${pets[6].image}"
    alt="pet Woody"
  />
  <h4 class="h4_card" id="pet6">${pets[6].name}</h4>
  <button class="learn_more" type="submit">Learn more</button>`;
    center2.innerHTML = "";
    center2.prepend(card1);
  } else {
    CAROUSEL.classList.remove("transition-right");
    count++;

    center1.innerHTML = right1.innerHTML;
    center2.innerHTML = right2.innerHTML;
    center3.innerHTML = right3.innerHTML;
    Random();
    renderCards();
    console.log(pets);
    console.log(count);
    right1.innerHTML = "";
    right2.innerHTML = "";
    right3.innerHTML = "";
    right1.appendChild(card1);
    right2.appendChild(card2);
    right3.appendChild(card3);
    console.log(
      center1.innerHTML == right1.innerHTML ||
        center1.innerHTML == right2.innerHTML ||
        center1.innerHTML == right3.innerHTML
    );
  }

  ARROW_LEFT.addEventListener("click", moveLeft);
  ARROW_RIGTH.addEventListener("click", moveRigth);
});

// Слайдер Конец

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
