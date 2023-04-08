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
