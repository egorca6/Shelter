import { getGarageCarCount } from './constants';
import { createEl } from './utils';
// // import carImage from './img/car1.png';
// import carImage from './assets/car1.png';

export function buildGarage() {
    const app = document.querySelector('.app-wrapper');
    if (app) {
        app.innerHTML = '';
    }
    const inputWrapper1 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper1);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Input';
    inputWrapper1.append(input1);

    const colorPicker1 = document.createElement('input');
    colorPicker1.type = 'color';
    colorPicker1.value = '#ffffff';
    inputWrapper1.append(colorPicker1);

    const createButton = createEl('button', 'default-button', 'Create');
    inputWrapper1.append(createButton);

    const inputWrapper2 = createEl('div', 'input-wrapper');
    app?.append(inputWrapper2);

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'Input';
    inputWrapper2.append(input2);

    const colorPicker2 = document.createElement('input');
    colorPicker2.type = 'color';
    colorPicker2.value = '#ffffff';
    inputWrapper2.append(colorPicker2);

    const updateButton = createEl('button', 'default-button', 'Update');
    inputWrapper2.append(updateButton);

    const buttonWrapper = createEl('div', 'button-wrapper');
    app?.append(buttonWrapper);

    const raceButton = createEl('button', '', 'Race');
    buttonWrapper.append(raceButton);

    const resetButton = createEl('button', '', 'Reset');
    buttonWrapper.append(resetButton);

    const generateCarsButton = createEl('button', '', 'Generate cars');
    buttonWrapper.append(generateCarsButton);

    const fullGarage = createEl('div', 'full-garage');
    app?.append(fullGarage);

    const page = createEl('div', 'page', 'Page #1');
    app?.append(page);

    const updateGarageData = async () => {
        const count = await getGarageCarCount();
        fullGarage.textContent = `Garage (${count})`;
    };
    updateGarageData();

    const generateCarsSection = createEl('div', 'generate-cars-section');
    app?.append(generateCarsSection);
    // машина 1
    const car1Wrapper = createEl('div', 'car-wrapper');
    generateCarsSection.append(car1Wrapper);

    const car1WrapperSelect = createEl('div', 'car1WrapperSelect');
    car1Wrapper.append(car1WrapperSelect);

    const car1SelectButton = createEl('button', 'default-button', 'Select');
    car1WrapperSelect.append(car1SelectButton);

    const car1RemoveButton = createEl('button', 'default-button', 'Remove');
    car1WrapperSelect.append(car1RemoveButton);

    const carText = createEl('span', '', 'Tesla');
    car1WrapperSelect.append(carText);

    const car1Wrapperimg = createEl('div', 'car1WrapperImage');
    car1Wrapper.append(car1Wrapperimg);

    const aButton = createEl('button', 'AB-buttons', 'A');
    car1Wrapperimg.append(aButton);

    const bButton = createEl('button', 'AB-buttons', 'B');
    car1Wrapperimg.append(bButton);

    // const car1Image = createEl('div', 'car1Image');
    // // car1Image.src = './img/car1.png';
    // car1Wrapperimg.append(car1Image);

    const car1Image = document.createElement('img');
    car1Image.classList.add('car1Image');
    car1Image.src = './img/car1.png';
    car1Wrapperimg.append(car1Image);

    const flag = document.createElement('img');
    flag.classList.add('flag');
    flag.src = './img/flag.png';
    car1Wrapperimg.append(flag);
    // машина 1 end
}

export function garageView() {
    const garage = document.querySelector('.garage');
    garage?.addEventListener('click', buildGarage);
}
