import { StartCar, StoptCar, SwitchesEngine } from './api';

let animationId: number | null = null;

function createAnimationTest(endX: number, duration: number, car: HTMLDivElement) {
    let currentX = car.offsetLeft;
    const framesCount = (duration / 1000) * 60;
    const dx = (endX - car.offsetLeft) / framesCount;
    const tick = () => {
        currentX += dx;
        car.style.transform = `translateX(${currentX}px)`;

        if (currentX < endX) {
            animationId = requestAnimationFrame(tick);
        }
    };
    tick();
}
function PauseAnimation() {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}
function stopAnimationTest(car: HTMLDivElement) {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
        car.style.transform = `translateX(0px)`;
    }
}

export async function raceOneCar(event: Event) {
    const vw78 = (78 * window.innerWidth) / 100;
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    const patchCar1 = await StartCar(id);

    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    const currentCar = carImage.querySelector('.wrapperImg1') as HTMLDivElement;
    const duration = patchCar1.distance / patchCar1.velocity;
    console.log(duration, currentCar);

    startButton.disabled = true;
    stopButton.disabled = false;
    createAnimationTest(vw78, duration, currentCar);
    try {
        const statusEngine = await SwitchesEngine(id);
        console.log('Движок =', id, statusEngine, patchCar1.velocity);
    } catch (error) {
        console.error('Ошибка = ', error);
        PauseAnimation();
    }
}

export async function CarStop(event: Event) {
    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const currentCar = carImage.querySelector('.wrapperImg1') as HTMLDivElement;
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    startButton.disabled = false;
    stopButton.disabled = true;
    stopAnimationTest(currentCar);
    const patchCar1 = await StoptCar(id);
    console.log('stop', patchCar1);
}

export async function RaceCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    const vw78 = (78 * window.innerWidth) / 100;
    let resolved = false;
    carsWrapper.forEach(async (wrapper) => {
        const id = Number(wrapper.getAttribute('dataid'));
        const currentCar = wrapper.querySelector('.wrapperImg1') as HTMLDivElement;
        const carName = wrapper.querySelector('.carName');
        const patchCar1 = await StartCar(id);

        const duration = patchCar1.distance / patchCar1.velocity;
        createAnimationTest(vw78, duration, currentCar);
        try {
            const statusEngine = await SwitchesEngine(id);
            console.log('КТо быстрее =', id, carName?.textContent, duration);
            if (!resolved) {
                resolved = true;
                console.log('First successful patchCar1:', statusEngine, carName?.textContent, duration);
                alert(` win ${carName?.textContent} за ${(duration / 1000).toFixed(2)}s`);
            }
        } catch (error) {
            console.error('carName Не доехал', carName?.textContent);
            PauseAnimation();
        }
    });
}

export function StopCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    carsWrapper.forEach((wrapper) => {
        const currentCar = wrapper.querySelector('.wrapperImg1') as HTMLDivElement;
        currentCar.style.transform = `translateX(0px)`;
    });
}
