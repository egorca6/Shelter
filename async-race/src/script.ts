import { getGarage } from './constants';

import { createClick, garageView } from './garage';
import { getRandomCars } from './generateRandomCars';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();

winnerView();
garageView();

createClick();
getGarage();
// updateCar(5, 'logan', '#fede00');
// updateClick(5);

// element.addEventListener('click', () => callback(id));

getRandomCars();
