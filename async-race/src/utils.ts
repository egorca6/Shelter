import { buildGarage } from './garage';

export function createEl(
    elementName: string,
    className?: string,
    content?: string,
    callback?: (id: number) => void,
    id?: number
): HTMLElement {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    if (content) {
        element.textContent = content;
    }
    if (callback && id !== undefined) {
        element.addEventListener('click', () => callback(id));
    }
    return element;
}
export function buildHtml() {
    const main = createEl('main', 'main');
    const app = createEl('div', 'app-wrapper');
    const garage = createEl('button', 'garage', 'TO GARAGE');
    const winners = createEl('button', 'winners', 'TO WINNERS');
    document.body.append(main);
    main.append(garage);
    main.append(winners);
    main.append(app);
    buildGarage();
}
