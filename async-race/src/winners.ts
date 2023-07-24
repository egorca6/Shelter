import { createEl } from './utils';

export function winnerView() {
    const app = document.querySelector<HTMLElement>('.app-wrapper');
    const winnersView = document.querySelector<HTMLElement>('.winnersView');
    // const winners = document.querySelector('.winners');
    if (app && winnersView) {
        app.innerHTML = '';
        winnersView.innerHTML = '';
        winnersView.style.display = 'block';
    }

    const h1 = createEl('h1', '', 'Winners (1)');
    const p = createEl('p', '', 'Page #1');

    const table = createEl('table');
    const thead = createEl('thead');
    const headerRow = createEl('tr');
    const headers = ['Number', 'Car', 'Name', 'Wins', 'Best time(Seconds)'];
    const headerElements = [];

    for (const header of headers) {
        const th = createEl('th', '', header);
        headerElements.push(th);
    }

    for (const th of headerElements) {
        headerRow.append(th);
    }

    const tbody = createEl('tbody');
    const dataRows = [['1', '', 'Tesla', '1', '10']];

    for (const data of dataRows) {
        const row = createEl('tr');
        for (const item of data) {
            const td = createEl('td', '', item);
            row.append(td);
        }
        tbody.append(row);
    }

    const buttonsDiv = createEl('div', 'buttons');
    const prevButton = createEl('button', 'prev', 'Prev');
    const nextButton = createEl('button', 'next', 'Next');

    table.append(thead);
    thead.append(headerRow);
    table.append(tbody);
    buttonsDiv.append(prevButton);
    buttonsDiv.append(nextButton);
    winnersView?.append(h1);
    winnersView?.append(p);
    winnersView?.append(table);
    winnersView?.append(buttonsDiv);
}
