import { createEl } from './utils';
import carImage from './assets/car1.png';
import flagImage from './assets/flag.png';
import { SelectCarFromHtml, removeCarFromHtml, testUpdate } from './deleteSelect';
import { PostNewCar, getPageCars, updateGarageData } from './api';
import { dataType } from './type';
import { NextClick, PrevClick, updateUI } from './prevNextClick';
import { CarStop, RaceCars, StopCars, raceOneCar } from './animation';
import { getRandomCars } from './generateRandomCars';

export async function updateGarage() {
    const currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;
    const data: dataType[] | null = await getPageCars(currentPage);
    const generateCarsSection = document.querySelector('.generate-cars-section');
    if (generateCarsSection) {
        generateCarsSection.innerHTML = '';
    }
    if (!data) {
        return null;
    }
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

        const car1Image = document.createElement('img');
        car1Image.classList.add('car1Image');
        car1Image.src = `${carImage}`;
        car1Image.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${car.color})`;
        wrapperImg.append(car1Image);

        const flag = document.createElement('img');
        flag.classList.add('flag');
        flag.src = `${flagImage}`;
        car1WrapperImg.append(flag);

        const road = createEl('div', 'road');
        car1Wrapper.append(road);
    });
}

export async function buildGarage() {
    const app = document.querySelector<HTMLElement>('.app-wrapper');
    const winnersView = document.querySelector<HTMLElement>('.winnersView');
    const currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;

    if (app && winnersView) {
        app.innerHTML = '';
        app.style.display = 'flex';
        winnersView.innerHTML = '';
    }
    const inputWrapper1 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper1);

    const input1 = document.createElement('input');
    input1.classList.add('input-create');
    input1.type = 'text';
    input1.placeholder = 'Input';
    inputWrapper1.append(input1);

    const colorPicker1 = document.createElement('input');
    colorPicker1.classList.add('color-picker1');
    colorPicker1.type = 'color';
    colorPicker1.value = '#ffffff';
    inputWrapper1.append(colorPicker1);

    const createButton = createEl('button', 'default-button', 'Create');
    createButton.classList.add('Create');
    inputWrapper1.append(createButton);

    const inputWrapper2 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper2);

    const input2 = document.createElement('input');
    input2.classList.add('input-update');
    input2.type = 'text';
    input2.placeholder = 'Input';
    inputWrapper2.append(input2);

    const colorPicker2 = document.createElement('input');
    colorPicker2.classList.add('color-update');
    colorPicker2.type = 'color';
    colorPicker2.value = '#ffffff';
    inputWrapper2.append(colorPicker2);

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
    createClick();
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

export function createClick() {
    const appWrapper = document.querySelector('.app-wrapper');
    appWrapper?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('Create')) {
            createCar();
        }
    });
}
