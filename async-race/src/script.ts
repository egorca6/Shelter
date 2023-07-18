import { getTest, getTest2 } from './constants';
import { garageView } from './garage';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();
getTest();
getTest2();
winnerView();
garageView();
getTest();
// getGarageCarCount();
// const winners = document.querySelector('.winners');
// console.log(winners);
