import { PostNewCar, updateGarageData } from './api';
import { numberOfCarsToGenerate } from './constants';
import { updateGarage } from './garage';
import { updateUI } from './prevNextClick';
import { generateRandomCars } from './utils';

export function getRandomCars() {
    const randomCars = generateRandomCars(numberOfCarsToGenerate);
    const currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;

    randomCars.forEach((car) => {
        PostNewCar(car.name, car.color);
        updateGarageData();
    });
    updateGarage();
    updateUI(currentPage);
}
