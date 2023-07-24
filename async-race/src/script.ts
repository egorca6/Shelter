import { myScoreTask } from './constants';
import { getRandomCars } from './generateRandomCars';
import './style.css';
import { buildHtml } from './utils';

buildHtml();
getRandomCars();
console.log(myScoreTask);
