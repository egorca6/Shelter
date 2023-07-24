import { getGarageCarCount, getPageCars } from './api';
import { carsPerPage } from './constants';
import { dataType } from './type';

export const updateUI = async (page: number) => {
    const carsText = document.querySelectorAll('.carName');
    const car1Wrapper = document.querySelectorAll('.car-wrapper');
    const car1Image = document.querySelectorAll('.car1Image') as NodeListOf<HTMLImageElement>;
    const pageNumber = document.querySelector('.page');
    const nextButton = document.querySelector('.next') as HTMLButtonElement;
    const prevButton = document.querySelector('.prev') as HTMLButtonElement;
    if (pageNumber) {
        pageNumber.textContent = `Page #${page}`;
    }

    const data: dataType[] = await getPageCars(page);

    data.forEach((car: dataType, index: number) => {
        if (index < car1Wrapper.length) {
            car1Wrapper[index].setAttribute('dataID', `${car.id}`);
            carsText[index].textContent = car.name;
            car1Image[index].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${car.color})`;
        }
    });

    const count = await getGarageCarCount();
    nextButton.disabled = page === Math.ceil(count / carsPerPage);

    prevButton.disabled = page === 1;
};

export function NextPrevClick() {
    let currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;
    updateUI(currentPage);
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next?.addEventListener('click', async () => {
        currentPage += 1;
        sessionStorage.setItem('pageNumber', String(currentPage));
        await updateUI(currentPage);
    });

    prev?.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage -= 1;
            sessionStorage.setItem('pageNumber', String(currentPage));
            await updateUI(currentPage);
        }
    });
}
