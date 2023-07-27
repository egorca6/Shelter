import { getGarageCarCount, getPageCars } from './api';
import { carsPerPage } from './constants';
import { dataType } from './type';

export const updateUI = async (page: number) => {
    const carsText = document.querySelectorAll('.carName');
    const car1Wrapper = document.querySelectorAll('.car-wrapper');
    const car1Image = document.querySelectorAll<HTMLImageElement>('.car1Image');
    const pageNumber = document.querySelector('.page');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    if (pageNumber) {
        pageNumber.textContent = `Page #${page}`;
    }

    const data: dataType[] | null = await getPageCars(page);
    if (!data) {
        return null;
    }

    data.forEach((car: dataType, index: number) => {
        if (index < car1Wrapper.length) {
            car1Wrapper[index].setAttribute('dataID', `${car.id}`);
            carsText[index].textContent = car.name;
            car1Image[index].style.filter = `opacity(0.5) drop-shadow(0 0 0 ${car.color})`;
        }
    });

    const count: number | null = await getGarageCarCount();
    if (!count) {
        return null;
    }
    if (nextButton instanceof HTMLButtonElement && prevButton instanceof HTMLButtonElement) {
        nextButton.disabled = page === Math.ceil(count / carsPerPage);
        prevButton.disabled = page === 1;
    }
};

export async function PrevClick() {
    let currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;
    if (currentPage > 1) {
        currentPage -= 1;
        sessionStorage.setItem('pageNumber', String(currentPage));
        await updateUI(currentPage);
    }
}

export async function NextClick() {
    let currentPage = Number(sessionStorage.getItem('pageNumber')) || 1;
    currentPage += 1;
    sessionStorage.setItem('pageNumber', String(currentPage));
    await updateUI(currentPage);
}
