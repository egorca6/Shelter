import { DrawCar, getID, updateCarColor, updateCarName, updateGarageData } from './constants';
import { createEl } from './utils';
import carImage from './assets/car1.png';
import flagImage from './assets/flag.png';
import { SelectCarFromHtml, removeCarFromHtml, updateCar } from './deleteSelect';
//
export async function updateGarage() {
    for (let i = 0; i < 7; i++) {
        const carColor = await updateCarColor(i);
        const carName = await updateCarName(i);

        if (carColor) {
            const generateCarsSection = document.querySelector('.generate-cars-section');
            const car1Wrapper = createEl('div', 'car-wrapper');
            generateCarsSection?.append(car1Wrapper);

            const car1WrapperSelect = createEl('div', 'car1WrapperSelect');
            car1Wrapper.append(car1WrapperSelect);

            const car1SelectButton = createEl('button', 'default-button', 'Select', SelectCarFromHtml, i);
            car1SelectButton.classList.add('select');
            car1WrapperSelect.append(car1SelectButton);

            const car1RemoveButton = createEl('button', 'default-button', 'Remove', removeCarFromHtml, i);
            car1WrapperSelect.append(car1RemoveButton);

            const carText = createEl('span', '', `${carName}`);
            car1WrapperSelect.append(carText);

            const car1WrapperImg = createEl('div', 'car1WrapperImage');
            car1Wrapper.append(car1WrapperImg);

            const car1WrapperImg1 = createEl('div', 'car1WrapperImg1');
            car1WrapperImg.append(car1WrapperImg1);

            const aButton = createEl('button', 'AB-buttons', 'A');
            car1WrapperImg1.append(aButton);

            const bButton = createEl('button', 'AB-buttons', 'B');
            car1WrapperImg1.append(bButton);

            const car1Image = document.createElement('img');
            car1Image.classList.add('car1Image');
            car1Image.src = `${carImage}`;
            car1Image.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${carColor})`;
            car1WrapperImg1.append(car1Image);

            const flag = document.createElement('img');
            flag.classList.add('flag');
            flag.src = `${flagImage}`;
            car1WrapperImg.append(flag);

            const road = createEl('div', 'road');
            car1Wrapper.append(road);
        }
    }
}

export function buildGarage() {
    const app = document.querySelector('.app-wrapper');
    if (app) {
        app.innerHTML = '';
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

    const updateButton = createEl('button', 'default-button', 'Update');
    updateButton.classList.add('update');
    inputWrapper2.append(updateButton);

    const buttonWrapper = createEl('div', 'button-wrapper');
    app?.append(buttonWrapper);

    const raceButton = createEl('button', '', 'Race');
    buttonWrapper.append(raceButton);

    const resetButton = createEl('button', '', 'Reset');
    buttonWrapper.append(resetButton);

    const generateCarsButton = createEl('button', 'generate-cars', 'Generate cars');
    buttonWrapper.append(generateCarsButton);

    const fullGarage = createEl('div', 'full-garage');
    app?.append(fullGarage);

    const page = createEl('div', 'page', 'Page #1');
    app?.append(page);

    updateGarageData();
    const generateCarsSection = createEl('div', 'generate-cars-section');
    app?.append(generateCarsSection);
    updateGarage();
}

export function garageView() {
    const garage = document.querySelector('.garage');
    garage?.addEventListener('click', buildGarage);

    const appWrapper = document.querySelector('.app-wrapper');
    appWrapper?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('update')) {
            // console.log('ghbdtn!');
        }
    });
}

export function createCar() {
    const inputTextCreate: HTMLInputElement | null = document.querySelector('.input-create');
    const inputColorCreate = document.querySelector('.color-picker1');
    if (inputTextCreate instanceof HTMLInputElement && inputColorCreate instanceof HTMLInputElement) {
        const inputValue = inputTextCreate.value;
        const colorValue = inputColorCreate.value;
        DrawCar(inputValue, colorValue);
    }
    // console.log('hi');
    buildGarage();
}

export function createClick() {
    const appWrapper = document.querySelector('.app-wrapper');
    appWrapper?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('Create')) {
            // console.log('create');
            createCar();
            updateGarageData();
        }
    });
}

export async function updateClick(id: number) {
    const appWrapper = document.querySelector('.app-wrapper');
    appWrapper?.addEventListener('click', async (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('update')) {
            const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
            const inputColorUpdate = document.querySelector('.color-update');

            if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
                const inputValue = inputUpdate.value;
                const colorValue = inputColorUpdate.value;
                // console.log('value  = ', inputValue);
                // console.log('color  = ', colorValue);
                const carWrapper = target.closest('.car-wrapper');

                if (id) {
                    console.log('ID Существует');

                    SelectCarFromHtml(id);
                    const selectedCarID = await getID(id);
                    console.log('selectedCarID = ', selectedCarID);
                    // const selectedCarID = await SelectCarFromHtml(carIndex);
                    updateCar(id, inputValue, colorValue);
                }
            }
            console.log('update');
        }
    });
}
// export async function removeCarFromHtml(id: number) {
//     const car1Wrapper = document.querySelectorAll('.car-wrapper');
//     // SelectCarFromHtml(id);
//     const selectedCarID = await getID(id);
//     console.log('обвертка/ selectedCarID= ', car1Wrapper[selectedCarID], selectedCarID);

//     // car1Wrapper[id].remove();
//     deleteCar(selectedCarID);
//     buildGarage();
// }
