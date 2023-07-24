import { deleteCarOnServer, putCar, updateGarageData } from './api';
import { updateGarage } from './garage';

export async function SelectCarFromHtml(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    sessionStorage.setItem('selectedCarID', String(id));
    return id;
}

export async function removeCarFromHtml(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    if (carWrapper && carWrapper.parentNode) {
        carWrapper.parentNode.removeChild(carWrapper);
        deleteCarOnServer(id);
        await updateGarageData();
        await updateGarage();
    }
}

export async function testUpdate() {
    const id = Number(sessionStorage.getItem('selectedCarID'));
    const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
    const inputColorUpdate: HTMLInputElement | null = document.querySelector('.color-update');

    if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
        const inputValue = inputUpdate.value;
        const colorValue = inputColorUpdate.value;
        const updatedCarData = {
            name: inputValue,
            color: colorValue,
        };
        await putCar(id, updatedCarData);
        updateGarage();
    }
}
