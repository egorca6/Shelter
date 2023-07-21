import { getID } from './constants';
import { buildGarage } from './garage';
import { CarParam } from './type';

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
    const appWrapper = document.querySelector('.app-wrapper');

    appWrapper?.addEventListener('click', callback(selectedCarID) as EventListener);
    appWrapper?.removeEventListener('click', callback(selectedCarID) as EventListener);
    // appWrapper?.addEventListener('click', (event) => {
    //     const target = event.target as HTMLElement;
    //     if (target.classList.contains('update')) {
    //         const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
    //         const inputColorUpdate = document.querySelector('.color-update');

    //         if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
    //             const inputValue = inputUpdate.value;
    //             const colorValue = inputColorUpdate.value;
    //             updateCar(selectedCarID - 1, inputValue, colorValue);
    //         }
    //     }
    // });
    return selectedCarID;
}

function callback(selectedCarID: number) {
    return function (event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('update')) {
            const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
            const inputColorUpdate = document.querySelector('.color-update');

            if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
                const inputValue = inputUpdate.value;
                const colorValue = inputColorUpdate.value;
                updateCar(selectedCarID - 1, inputValue, colorValue);
            }
        }
    };
}
// const appWrapper = document.querySelector('.app-wrapper');

// updateCar(selectedCarID - 1, 'SON', 'black');
// const appWrapper = document.querySelector('.app-wrapper');
// appWrapper?.addEventListener('click', async (event) => {
//     const target = event.target as HTMLElement;
//     if (target.classList.contains('update')) {
//         const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
//         const inputColorUpdate = document.querySelector('.color-update');

//         if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
//             const inputValue = inputUpdate.value;
//             const colorValue = inputColorUpdate.value;
//             updateCar(selectedCarID - 1, inputValue, colorValue);
//         }
//     }
// });
export async function removeCarFromHtml(id: number) {
    const car1Wrapper = document.querySelectorAll('.car-wrapper');
    // SelectCarFromHtml(id);
    const selectedCarID = await getID(id);
    console.log('обвертка/ selectedCarID= ', car1Wrapper[selectedCarID], selectedCarID);

    // car1Wrapper[id].remove();
    deleteCar(selectedCarID);
    buildGarage();
}

const putCar = async (id: number, body: CarParam) => {
    const response = await fetch(`${baseUrl}/garage/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const updateCar = async (i: number, newName: string, newColor: string) => {
    const selectedCarID = await getID(i);

    const updatedCarData = {
        name: newName,
        color: newColor,
    };
    const updatedCar = await putCar(selectedCarID, updatedCarData);
    // console.log('updateCar hi ');

    const carNameElement = document.querySelector(
        `.car-wrapper:nth-child(${i + 1}) .car1WrapperSelect span`
    ) as HTMLElement;
    const carImageElement = document.querySelector(`.car-wrapper:nth-child(${i + 1}) .car1Image`) as HTMLElement;

    if (carNameElement && carImageElement) {
        carNameElement.textContent = updatedCar.name;
        carImageElement.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${updatedCar.color})`;
    }
};

export async function test(id: number) {
    const selectedCarID = await getID(id);

    const appWrapper = document.querySelector('.app-wrapper');
    appWrapper?.addEventListener('click', async (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('update')) {
            console.log('обвертка/ selectedCarID= ', selectedCarID);

            // updateCar(selectedCarID - 1, 'SON', 'black');
        }
    });
    // updateCar(selectedCarID - 1, 'SON', 'black');
    return selectedCarID;
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
