import { DrawPageCars, getGarageCarCount, getPageCars } from './api';
import { carsPerPage, currentPage } from './constants';
import { dataType } from './type';

// export function NextPrevClick() {
//     let page = currentPage;
//     const next = document.querySelector('.next');
//     const prev = document.querySelector('.prev');
//     next?.addEventListener('click', async () => {
//         console.log('next yyyy');
//         const carsText = document.querySelectorAll('.carName');
//         const car1Image = document.querySelectorAll('.car1Image') as NodeListOf<HTMLImageElement>;
//         const pageNumber = document.querySelector('.page');
//         if (pageNumber) {
//             pageNumber.textContent = `Page #${page + 1}`;
//         }
//         for (let i = 0; i < 7; i++) {
//             const test1 = await DrawPageCars(page + 1);
//             carsText[i].textContent = test1[i].name;
//             if (car1Image[i] instanceof HTMLImageElement) {
//                 car1Image[i].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${test1[i].color})`;
//             }
//         }
//         page += 1;
//     });
//     prev?.addEventListener('click', async () => {
//         console.log('next yyyy');
//         const carsText = document.querySelectorAll('.carName');
//         const car1Image = document.querySelectorAll('.car1Image') as NodeListOf<HTMLImageElement>;
//         const pageNumber = document.querySelector('.page');
//         if (pageNumber) {
//             pageNumber.textContent = `Page #${page - 1}`;
//         }
//         for (let i = 0; i < 7; i++) {
//             const test1 = await DrawPageCars(page - 1);
//             carsText[i].textContent = test1[i].name;
//             if (car1Image[i] instanceof HTMLImageElement) {
//                 car1Image[i].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${test1[i].color})`;
//             }
//         }
//         page -= 1;
//     });
// }

export const updateUI = async (page: number) => {
    const carsText = document.querySelectorAll('.carName');
    const car1Wrapper = document.querySelectorAll('.car-wrapper');
    const car1Image = document.querySelectorAll('.car1Image') as NodeListOf<HTMLImageElement>;
    const pageNumber = document.querySelector('.page');
    const carWrapper = document.querySelectorAll('car-wrapper');
    const nextButton = document.querySelector('.next') as HTMLButtonElement;
    const prevButton = document.querySelector('.prev') as HTMLButtonElement;
    if (pageNumber) {
        pageNumber.textContent = `Page #${page}`;
    }

    const data: dataType[] = await getPageCars(page);

    data.forEach((car: dataType, index: number) => {
        car1Wrapper[index].setAttribute('dataID', `${car.id}`);
        carsText[index].textContent = car.name;
        car1Image[index].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${car.color})`;
    });
    // for (let i = 0; i < 7; i++) {
    //     if (car1Image[i] instanceof HTMLImageElement) {
    //         carsText[i].textContent = data[i]?.name;
    //         car1Image[i].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${data[i]?.color})`;
    //         car1Wrapper[i].setAttribute('dataID', `${data[i]?.id}`);
    //         console.log(carWrapper[i]);
    //     }
    // }

    const count = await getGarageCarCount();
    nextButton.disabled = page === Math.ceil(count / carsPerPage);

    prevButton.disabled = page === 1;
};

export function NextPrevClick() {
    let currentPage = 1;

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next?.addEventListener('click', async () => {
        currentPage += 1;
        await updateUI(currentPage);
    });

    prev?.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage -= 1;
            await updateUI(currentPage);
        }
    });
}
