import { getID } from './constants';
import { buildGarage } from './garage';

const baseUrl = 'http://127.0.0.1:3000';
const delCar = async (id: number) => {
    const response = await fetch(`${baseUrl}/garage/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};

export const deleteCar = async (id: number) => {
    const car = await delCar(id);
    return car;
};
export async function SelectCarFromHtml(id: number) {
    const selectedCarID = await getID(id);
    console.log('Selected car ID:', selectedCarID);
    return selectedCarID;
}

export async function removeCarFromHtml(id: number) {
    const car1Wrapper = document.querySelectorAll('.car-wrapper');

    SelectCarFromHtml(id);
    const selectedCarID = await getID(id);
    console.log('обвертка/ selectedCarID= ', car1Wrapper[id], selectedCarID);

    // car1Wrapper[id].remove();
    deleteCar(selectedCarID);
    buildGarage();
}
