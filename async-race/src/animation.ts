import { StartCar, StoptCar, SwitchesEngine, createWinner } from './api';
import {
    delay,
    framesPerSecond,
    millisecondsInSecond,
    percent100,
    percent65,
    percent70,
    percent78,
    width600px,
    width800px,
} from './constants';
import { createEl } from './utils';

let animationId: number | null = null;

function createAnimationTest(endX: number, duration: number, car: HTMLDivElement) {
    let currentX = car.offsetLeft;
    const framesCount = (duration / millisecondsInSecond) * framesPerSecond;
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

export function PauseAnimation() {
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
    let PercentOfWindowWidth78 = (percent78 * window.innerWidth) / percent100;
    if (window.innerWidth < width800px) {
        PercentOfWindowWidth78 = (percent70 * window.innerWidth) / percent100;
    }
    if (window.innerWidth < width600px) {
        PercentOfWindowWidth78 = (percent65 * window.innerWidth) / percent100;
    }
    return PercentOfWindowWidth78;
}

export async function raceOneCar(event: Event) {
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    const id = Number(carWrapper?.getAttribute('dataid'));
    const patchCar1 = await StartCar(id);
    const carImage = carWrapper?.querySelector('.car1WrapperImg1');
    const startButton: HTMLButtonElement | null | undefined = carImage?.querySelector('.a-buttons');
    const stopButton: HTMLButtonElement | null | undefined = carImage?.querySelector('.b-buttons');
    const currentCar = carImage?.querySelector('.wrapperImg1');
    if (!patchCar1) {
        return;
    }
    const duration = patchCar1.distance / patchCar1.velocity;
    startButton ? (startButton.disabled = true) : null;
    stopButton ? (stopButton.disabled = false) : null;

    if (!currentCar || !(currentCar instanceof HTMLDivElement)) {
        return;
    }

    createAnimationTest(calculatePercentage(), duration, currentCar);
    await SwitchesEngine(id);
}

export async function CarStop(event: Event) {
    const carWrapper = event.target instanceof Element ? event.target.closest('.car-wrapper') : null;
    const carImage = carWrapper?.querySelector('.car1WrapperImg1');
    const currentCar: HTMLDivElement | null | undefined = carImage?.querySelector('.wrapperImg1');
    const startButton: HTMLButtonElement | null | undefined = carImage?.querySelector('.a-buttons');
    const stopButton: HTMLButtonElement | null | undefined = carImage?.querySelector('.b-buttons');
    const id = Number(carWrapper?.getAttribute('dataid'));
    startButton ? (startButton.disabled = false) : null;
    stopButton ? (stopButton.disabled = true) : null;
    await StoptCar(id);

    if (currentCar && currentCar !== null) {
        stopAnimationTest(currentCar);
    }
}
function showStyledAlert(message: string) {
    const alertContainer = createEl('div', 'styled-alert', message);

    document.body.appendChild(alertContainer);
    setTimeout(() => {
        document.body.removeChild(alertContainer);
    }, delay);
}

export async function RaceCars() {
    const carsWrapper = document.querySelectorAll('.car-wrapper');
    let resolved = false;
    carsWrapper.forEach(async (wrapper) => {
        const id = Number(wrapper.getAttribute('dataid'));
        const currentCar: HTMLDivElement | null = wrapper.querySelector('.wrapperImg1');
        const carName = wrapper.querySelector('.carName');
        const patchCar1 = await StartCar(id);

        if (!patchCar1) {
            return;
        }
        const duration = patchCar1.distance / patchCar1.velocity;

        if (currentCar !== null) {
            createAnimationTest(calculatePercentage(), duration, currentCar);
        }
        try {
            const statusEngine = await SwitchesEngine(id);
            if (!resolved) {
                resolved = true;
                const time = (duration / millisecondsInSecond).toFixed(2);
                console.log('First successful patchCar1:', statusEngine, carName?.textContent, duration);
                const message = `Win ${carName?.textContent} за ${time}s`;
                showStyledAlert(message);
                await createWinner({
                    id: id,
                    wins: 1,
                    time: +time,
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
