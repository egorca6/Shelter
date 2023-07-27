import { delWinnerCarOnServer, deleteCarOnServer, getCar, putCar, updateGarageData } from './api';
import { updateGarage } from './garage';

export async function SelectCarFromHtml(event: Event) {
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    if (!carWrapper) {
        return;
    }
    const id = Number(carWrapper.getAttribute('dataid'));
    sessionStorage.setItem('selectedCarID', String(id));
    const select = await getCar(id);
    const colorInputUpdate: HTMLInputElement | null = document.querySelector('.color-update');
    const TextinputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
    if (TextinputUpdate && colorInputUpdate && select) {
        TextinputUpdate.value = select.name;
        colorInputUpdate.value = select.color;
    }
    return id;
}

export async function removeCarFromHtml(event: Event) {
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    const id = Number(carWrapper?.getAttribute('dataid'));
    if (carWrapper && carWrapper.parentNode) {
        carWrapper.parentNode.removeChild(carWrapper);
        deleteCarOnServer(id);
        delWinnerCarOnServer(id);
        await updateGarageData();
        await updateGarage();
    }
}

export async function testUpdate() {
    const id = Number(sessionStorage.getItem('selectedCarID'));
    const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
    const inputColorUpdate: HTMLInputElement | null = document.querySelector('.color-update');

    if (inputUpdate && inputColorUpdate) {
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
