import { buildGarage } from './garage';
import { winnerView } from './winners';

export function createEl(
    elementName: string,
    className?: string,
    content?: string,
    callback?: (event: MouseEvent) => void
): HTMLElement {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    if (content) {
        element.textContent = content;
    }
    if (callback) {
        element.addEventListener('click', callback);
    }
    return element;
}
export function buildHtml() {
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
