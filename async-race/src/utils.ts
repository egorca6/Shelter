import { carBrands, carColors, carModels } from './constants';
import { CarParam } from './type';

export function createEl<K extends keyof HTMLElementTagNameMap>(
    elementName: K,
    className?: string,
    content?: string,
    callback?: (event: Event) => void
): HTMLElementTagNameMap[K] {
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

export function createImageEl(src: string, className?: string, style?: string): HTMLImageElement {
    const imageElement = document.createElement('img');
    imageElement.src = src;

    if (className) {
        imageElement.classList.add(className);
    }

    if (style) {
        imageElement.style.cssText = style;
    }

    return imageElement;
}

export function createInputEl(
    type: string,
    className?: string,
    placeholder?: string,
    value?: string
): HTMLInputElement {
    const inputElement = document.createElement('input');
    inputElement.type = type;

    if (className) {
        inputElement.classList.add(className);
    }

    if (placeholder) {
        inputElement.placeholder = placeholder;
    }

    if (value) {
        inputElement.value = value;
    }

    return inputElement;
}

export function generateRandomCars(count: number): CarParam[] {
    const randomCars: CarParam[] = [];

    for (let i = 0; i < count; i++) {
        const brandIndex = Math.floor(Math.random() * carBrands.length);
        const modelIndex = Math.floor(Math.random() * carModels.length);
        const colorIndex = Math.floor(Math.random() * carColors.length);

        const brand = carBrands[brandIndex];
        const model = carModels[modelIndex];
        const color = carColors[colorIndex];

        const carName = `${brand} ${model}`;

        randomCars.push({
            name: carName,
            color: color,
        });
    }

    return randomCars;
}
