import { getCar, getWinners } from './api';
import { winsOnPage } from './type';
import { createEl } from './utils';
import carImage from './assets/car1.png';

export async function winnerView() {
    const app = document.querySelector<HTMLElement>('.app-wrapper');
    const winnersView = document.querySelector<HTMLElement>('.winnersView');
    if (app && winnersView) {
        app.innerHTML = '';
        winnersView.innerHTML = '';
        winnersView.style.display = 'block';
    }
    const myWinners: winsOnPage[] = await getWinners();

    const h1 = createEl('h1', '', 'Winners (1)');
    const p = createEl('p', '', 'Page #1');
    const wrapperHeaders = createEl('div', 'wrapperHeaders');
    const wrapperCarInfo = createEl('div', 'wrapperCarInfo');
    const divNumber = createEl('div', '', ' Number');
    const divCar = createEl('div', '', 'Car');
    const divName = createEl('div', '', 'Name');
    const divWins = createEl('div', '', 'Wins');
    const divBest = createEl('div', '', 'Best time(seconds) ');
    const buttonsDiv = createEl('div', 'buttons');
    const prevButton = createEl('button', 'prev', 'Prev');
    const nextButton = createEl('button', 'next', 'Next');

    winnersView?.append(h1);
    winnersView?.append(p);
    winnersView?.append(wrapperHeaders);
    winnersView?.append(wrapperCarInfo);
    wrapperHeaders.append(divNumber);
    wrapperHeaders.append(divCar);
    wrapperHeaders.append(divName);
    wrapperHeaders.append(divBest);
    wrapperHeaders.append(divWins);
    buttonsDiv.append(prevButton);
    buttonsDiv.append(nextButton);
    winnersView?.append(buttonsDiv);

    myWinners.forEach(async (car: winsOnPage, index) => {
        const carID = myWinners[index].id;
        const carNameID = await getCar(carID);
        const carText = carNameID.name;
        const carColor = carNameID.color;
        const carNumber = createEl('div', '', `${index + 1}`);
        wrapperCarInfo.append(carNumber);

        const car1Image = createEl('img', 'car1Image') as HTMLImageElement;
        car1Image.src = `${carImage}`;
        car1Image.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${carColor})`;
        wrapperCarInfo.append(car1Image);

        const carName = createEl('div', '', `${carText}`);
        wrapperCarInfo.append(carName);

        const carWins = createEl('div', '', `${myWinners[index].wins}`);
        wrapperCarInfo.append(carWins);

        const carBestTime = createEl('div', 'carBestTime', `${myWinners[index].time}`);
        wrapperCarInfo.append(carBestTime);
    });
}
