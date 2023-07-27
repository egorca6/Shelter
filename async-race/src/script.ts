import { myScoreTask } from './constants';
import { buildGarage } from './garage';
import './style.css';
import { createEl } from './utils';
import { winnerView } from './winners';

function buildHtml() {
    const main = createEl('main', 'main');
    const app = createEl('div', 'app-wrapper');
    const garage = createEl('button', 'garage', 'TO GARAGE', buildGarage);
    const winners = createEl('button', 'winners', 'TO WINNERS', winnerView);
    const winnersView = createEl('div', 'winnersView');
    document.body.append(main);
    main.append(garage);
    main.append(winners);
    main.append(winnersView);
    main.append(app);
    buildGarage();
}

buildHtml();
console.log(myScoreTask);
