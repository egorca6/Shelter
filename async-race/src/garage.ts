import { createEl, createImageEl, createInputEl } from './utils';
import carImage from './assets/car1.png';
import flagImage from './assets/flag.png';
import { SelectCarFromHtml, removeCarFromHtml, testUpdate } from './deleteSelect';
import { PostNewCar, getPageCars, updateGarageData } from './api';
import { dataType } from './type';
import { NextClick, PrevClick, updateUI } from './prevNextClick';
import { CarStop, RaceCars, StopCars, raceOneCar } from './animation';
import { getRandomCars } from './generateRandomCars';
import { LevelOne } from './constants';

function renderCar(data: dataType[]) {
    const generateCarsSection = document.querySelector('.generate-cars-section');
    data.forEach((car: dataType) => {
        const car1Wrapper = createEl('div', 'car-wrapper');
        car1Wrapper.setAttribute('dataID', `${car.id}`);
        generateCarsSection?.append(car1Wrapper);
        const car1WrapperSelect = createEl('div', 'car1WrapperSelect');
        car1Wrapper.append(car1WrapperSelect);
        const car1SelectButton = createEl('button', 'default-button', 'Select', SelectCarFromHtml);
        car1SelectButton.classList.add('select');
        car1WrapperSelect.append(car1SelectButton);
        const car1RemoveButton = createEl('button', 'default-button', 'Remove', removeCarFromHtml);
        car1WrapperSelect.append(car1RemoveButton);
        const carText = createEl('span', 'carName', `${car.name}`);
        car1WrapperSelect.append(carText);
        const car1WrapperImg = createEl('div', 'car1WrapperImage');
        car1Wrapper.append(car1WrapperImg);
        const car1WrapperImg1 = createEl('div', 'car1WrapperImg1');
        car1WrapperImg.append(car1WrapperImg1);
        const aButton = createEl('button', 'a-buttons', 'A', raceOneCar);
        car1WrapperImg1.append(aButton);
        const bButton = createEl('button', 'b-buttons', 'B', CarStop);
        car1WrapperImg1.append(bButton);
        const wrapperImg = createEl('div', 'wrapperImg1');
        car1WrapperImg1.append(wrapperImg);

        const car1Image = createImageEl(
            `${carImage}`,
            'car1Image',
            `filter: opacity(0.5) drop-shadow(0 0 0 ${car.color});`
        );
        wrapperImg.append(car1Image);

        const flag = createImageEl(`${flagImage}`, 'flag');
        car1WrapperImg.append(flag);

        const road = createEl('div', 'road');
        car1Wrapper.append(road);
    });
}

export async function updateGarage() {
    const currentPage = Number(sessionStorage.getItem('pageNumber')) || LevelOne;
    const data: dataType[] | null = await getPageCars(currentPage);
    const generateCarsSection = document.querySelector('.generate-cars-section');
    if (generateCarsSection) {
        generateCarsSection.innerHTML = '';
    }
    if (!data) {
        return null;
    }
    renderCar(data);
}

export async function buildGarage() {
    const app = document.querySelector<HTMLElement>('.app-wrapper');
    const winnersView = document.querySelector<HTMLElement>('.winnersView');
    const currentPage = Number(sessionStorage.getItem('pageNumber')) || LevelOne;

    if (app && winnersView) {
        app.innerHTML = '';
        winnersView.innerHTML = '';
    }
    const inputWrapper1 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper1);

    const inputCreateName = createInputEl('text', 'input-create', 'Input');
    inputWrapper1.append(inputCreateName);

    const inputCreateColor = createInputEl('color', 'color-picker1', '', '#ffffff');
    inputWrapper1.append(inputCreateColor);

    const createButton = createEl('button', 'default-button', 'Create', createCar);
    createButton.classList.add('Create');
    inputWrapper1.append(createButton);

    const inputWrapper2 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper2);

    const inputUpdateName = createInputEl('text', 'input-update', 'Input');
    inputWrapper2.append(inputUpdateName);

    const inputUpdateColor = createInputEl('color', 'color-update', '', '#ffffff');
    inputWrapper2.append(inputUpdateColor);

    const updateButton = createEl('button', 'default-button', 'Update', testUpdate);
    updateButton.classList.add('update');
    inputWrapper2.append(updateButton);

    const buttonWrapper = createEl('div', 'button-wrapper');
    app?.append(buttonWrapper);

    const raceButton = createEl('button', 'race', 'Race', RaceCars);
    buttonWrapper.append(raceButton);

    const resetButton = createEl('button', 'reset', 'Reset', StopCars);
    buttonWrapper.append(resetButton);

    const generateCarsButton = createEl('button', 'generate-cars', 'Generate cars', getRandomCars);
    buttonWrapper.append(generateCarsButton);

    const fullGarage = createEl('div', 'full-garage');
    app?.append(fullGarage);
    const prevButton = createEl('button', 'prev', 'Prev', PrevClick);
    const nextButton = createEl('button', 'next', 'Next', NextClick);
    const nextPrevwrapper = createEl('div', 'nextPrevwrapper');
    app?.append(nextPrevwrapper);
    nextPrevwrapper?.append(prevButton);
    nextPrevwrapper?.append(nextButton);

    const page = createEl('div', 'page', 'Page #1');
    app?.append(page);

    updateGarageData();
    const generateCarsSection = createEl('div', 'generate-cars-section');
    app?.append(generateCarsSection);
    updateGarage();
    updateUI(currentPage);
}

async function createCar() {
    const inputTextCreate: HTMLInputElement | null = document.querySelector('.input-create');
    const inputColorCreate = document.querySelector('.color-picker1');
    if (inputTextCreate instanceof HTMLInputElement && inputColorCreate instanceof HTMLInputElement) {
        const inputValue = inputTextCreate.value;
        const colorValue = inputColorCreate.value;
        await PostNewCar(inputValue, colorValue);
    }
    updateGarage();
    updateGarageData();
}
