import { PostNewCar, updateGarageData } from './api';
import { carBrands, carColors, carModels } from './constants';
import { updateGarage } from './garage';
import { Car } from './type';

function generateRandomCars(count: number): Car[] {
    const randomCars: Car[] = [];

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
export function getRandomCars() {
    const numberOfCarsToGenerate = 100;
    const randomCars = generateRandomCars(numberOfCarsToGenerate);
    const generateCarsButton = document.querySelector('.generate-cars');
    generateCarsButton?.addEventListener('click', () => {
        randomCars.forEach((car) => {
            PostNewCar(car.name, car.color);
            updateGarage();
            updateGarageData();
        });
    });
}
