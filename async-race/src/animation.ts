import { StartCar, StoptCar, SwitchesEngine, createWinner } from './api';
import { percent100, percent65, percent70, percent78 } from './constants';

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
function calculatePercentage() {
    let vw78 = (percent78 * window.innerWidth) / percent100;
    if (window.innerWidth < 800) {
        vw78 = (percent70 * window.innerWidth) / percent100;
    }
    if (window.innerWidth < 600) {
        vw78 = (percent65 * window.innerWidth) / percent100;
    }
    return vw78;
}

export async function raceOneCar(event: Event) {
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    const id = Number(carWrapper?.getAttribute('dataid'));
    const patchCar1 = await StartCar(id);
    const carImage = event.target instanceof Element ? event.target.closest('.car1WrapperImg1') : null;
    const startButton = carImage?.querySelector('.a-buttons');
    const stopButton = carImage?.querySelector('.b-buttons');
    const currentCar = carImage?.querySelector('.wrapperImg1');
    if (!patchCar1) {
        return;
    }
    const duration = patchCar1.distance / patchCar1.velocity;
    startButton instanceof HTMLButtonElement ? (startButton.disabled = true) : null;
    stopButton instanceof HTMLButtonElement ? (stopButton.disabled = false) : null;

    if (!currentCar || !(currentCar instanceof HTMLDivElement)) {
        return;
    }

    createAnimationTest(calculatePercentage(), duration, currentCar);
    try {
        await SwitchesEngine(id);
    } catch (error) {
        PauseAnimation();
    }
}

export async function CarStop(event: Event) {
    const carImage = event.target instanceof Element ? event.target.closest('.car1WrapperImg1') : null;
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    const currentCar = carImage?.querySelector('.wrapperImg1');
    const startButton = carImage?.querySelector('.a-buttons');
    const stopButton = carImage?.querySelector('.b-buttons');
    const id = Number(carWrapper?.getAttribute('dataid'));
    startButton instanceof HTMLButtonElement ? (startButton.disabled = false) : null;
    stopButton instanceof HTMLButtonElement ? (stopButton.disabled = true) : null;
    await StoptCar(id);
    if (!currentCar || !(currentCar instanceof HTMLDivElement)) {
        return;
    }
    stopAnimationTest(currentCar);
}
function showStyledAlert(message: string) {
    const alertContainer = document.createElement('div');
    alertContainer.textContent = message;
    alertContainer.classList.add('styled-alert');

    document.body.appendChild(alertContainer);
    setTimeout(() => {
        document.body.removeChild(alertContainer);
    }, 3000);
}

export async function RaceCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    let resolved = false;
    carsWrapper.forEach(async (wrapper) => {
        const id = Number(wrapper.getAttribute('dataid'));
        const currentCar = wrapper.querySelector('.wrapperImg1');
        const carName = wrapper.querySelector('.carName');
        const patchCar1 = await StartCar(id);
        if (!patchCar1) {
            return;
        }
        const duration = patchCar1.distance / patchCar1.velocity;
        if (!currentCar || !(currentCar instanceof HTMLDivElement)) {
            return;
        }
        createAnimationTest(calculatePercentage(), duration, currentCar);
        try {
            const statusEngine = await SwitchesEngine(id);
            if (!resolved) {
                resolved = true;
                console.log('First successful patchCar1:', statusEngine, carName?.textContent, duration);
                const message = `Win ${carName?.textContent} за ${(duration / 1000).toFixed(2)}s`;
                showStyledAlert(message);
                await createWinner({
                    id: id,
                    wins: 1,
                    time: +(duration / 1000).toFixed(2),
                });
            }
        } catch (error) {
            PauseAnimation();
        }
    });
}

export function StopCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    carsWrapper.forEach(async (wrapper) => {
        const id = Number(wrapper.getAttribute('dataid'));
        await StoptCar(id);
        const currentCar: HTMLDivElement | null = wrapper.querySelector('.wrapperImg1');
        if (currentCar) {
            currentCar.style.transform = `translateX(0px)`;
        }
    });
}
