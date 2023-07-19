import { createCar, garageView } from './garage';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();
winnerView();
garageView();
const createClick = document.querySelector('.Create');
createClick?.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof Element && target?.classList.contains('Create')) {
        createCar();
    }
});

const updateClick = document.querySelector('.update');
updateClick?.addEventListener('click', () => {
    console.log('ghbdtn!');
});
// getGarageCarCount();
// const winners = document.querySelector('.winners');
// console.log(winners);
