import { deleteCarOnServer, getGarage, updateGarageData } from './api';

export async function SelectCarFromHtml() {
    const data = await getGarage();

    console.log('Selected car ID:', data);
    // const selectedCarID = data[id].id;
    // console.log('Selected car ID:', selectedCarID);
    const appWrapper = document.querySelector('.app-wrapper');

    // appWrapper?.addEventListener('click', callback(selectedCarID) as EventListener);
    // appWrapper?.removeEventListener('click', callback(selectedCarID) as EventListener);
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

    // return selectedCarID;
}

// function callback(selectedCarID: number) {
//     return function (event: MouseEvent) {
//         const target = event.target as HTMLElement;
//         if (target.classList.contains('update')) {
//             const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update');
//             const inputColorUpdate = document.querySelector('.color-update');

//             if (inputUpdate instanceof HTMLInputElement && inputColorUpdate instanceof HTMLInputElement) {
//                 const inputValue = inputUpdate.value;
//                 const colorValue = inputColorUpdate.value;
//                 updateCar(selectedCarID - 1, inputValue, colorValue);
//             }
//         }
//     };
// }
export async function removeCarFromHtml(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    if (carWrapper && carWrapper.parentNode) {
        carWrapper.parentNode.removeChild(carWrapper);
        deleteCarOnServer(id);
        await updateGarageData();
    }
}

export async function testUpdate(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    console.log(id);
}

// const data = await getGarage();
// const selectedCarID = data[id].id;
// const car1Wrapper = document.querySelectorAll('.car-wrapper');
// // const appWrapper = document.querySelector('.app-wrapper');
// console.log('обвертка/ selectedCarID= ', car1Wrapper[selectedCarID], selectedCarID);
// // appWrapper?.addEventListener('click', async (event) => {
// //     const target = event.target as HTMLElement;
// //     if (target.classList.contains('update')) {
// //         console.log('обвертка/ selectedCarID= ', selectedCarID);

// //         // updateCar(selectedCarID - 1, 'SON', 'black');
// //     }
// // });
// // updateCar(selectedCarID - 1, 'SON', 'black');
// return selectedCarID;
