import { StartCar, SwitchesEngine } from './api';

export async function raceOneCar(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    const patchCar1 = await StartCar(id);

    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    const currentCar = carImage.querySelector('.wrapperImg1');

    startButton.disabled = true;
    stopButton.disabled = false;
    currentCar?.classList.add('go');
    if (currentCar instanceof HTMLDivElement) {
        currentCar.style.animationDuration = patchCar1.distance / patchCar1.velocity / 1000 + 's';
    }
    try {
        const statusEngine = await SwitchesEngine(id);
        console.log('Движок =', id, statusEngine, patchCar1.velocity);
    } catch (error) {
        console.error('Ошибка = ', error);
        if (currentCar instanceof HTMLDivElement) {
            // pauseAnimation();
            // currentCar?.classList.remove('go');
            // currentCar.style.animationDuration = '0s';
            // animation.pause();
        }
    }
}

export async function CarStop(event: Event) {
    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const currentCar = carImage.querySelector('.wrapperImg1');
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    startButton.disabled = false;
    stopButton.disabled = true;
    currentCar?.classList.remove('go');
}

export function RaceCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    carsWrapper.forEach(async (wrapper) => {
        const id = Number(wrapper.getAttribute('dataid'));
        const currentCar = wrapper.querySelector('.wrapperImg1');
        const carName = wrapper.querySelector('.carName');
        const patchCar1 = await StartCar(id);
        currentCar?.classList.add('go');
        const time = patchCar1.distance / patchCar1.velocity / 1000;
        if (currentCar instanceof HTMLDivElement) {
            currentCar.style.animationDuration = time + 's';
        }
        try {
            const statusEngine = await SwitchesEngine(id);
            // console.log('КТо быстрее =', carName?.textContent, time);
            console.log('statusEngine', statusEngine);
            // const minTime = Math.min(...times);
            // console.log('Мин время = ', minTime);
        } catch (error) {
            console.error('Ошибка = ', error);
            currentCar?.classList.remove('go');
        }
    });
}

export function StopCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    carsWrapper.forEach(async (wrapper) => {
        const currentCar = wrapper.querySelector('.wrapperImg1');
        currentCar?.classList.remove('go');
    });
}
