import { testUpdate } from './deleteSelect';
import { createClick, garageView } from './garage';
import { getRandomCars } from './generateRandomCars';
import { NextPrevClick } from './prevNextClick';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();

winnerView();
garageView();

createClick();
// getGarage();
// updateCar(5, 'logan', '#fede00');
// updateClick(5);
// element.addEventListener('click', () => callback(id));
getRandomCars();
NextPrevClick();
// тесты с update
const update = document.querySelector('.update');
update?.addEventListener('click', testUpdate);
// update?.addEventListener('click', async () => {
//     console.log('update yyyy');
//     const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
//     const inputColorUpdate: HTMLInputElement | null = document.querySelector('.color-update');
//     console.log(inputUpdate?.value, inputColorUpdate?.value);
//     const carsText = document.querySelectorAll('.carName');
//     for (let i = 0; i < 7; i++) {
//         const test1 = await updateCar(i, `${carsText[i].textContent}`, 'red');
//         const test2 = await SelectCarFromHtml();
//         console.log('SelectCarFromHtml = ', test2);
//         // testUpdate(i);
//         console.log('testUpdate = ', testUpdate(i));
//     }
// });
