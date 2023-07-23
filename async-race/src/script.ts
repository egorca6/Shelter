import { testUpdate } from './deleteSelect';
import { createClick, garageView } from './garage';
import { getRandomCars } from './generateRandomCars';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();
winnerView();
garageView();
createClick();
getRandomCars();

// testPatch();

// тесты с update
const update = document.querySelector('.update');
update?.addEventListener('click', testUpdate);

const resetTest = document.querySelector('.reset');
resetTest?.addEventListener('click', () => {
    const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
    if (inputUpdate instanceof HTMLInputElement) {
        inputUpdate.value = 'inputUpdate.value';
    }
});
