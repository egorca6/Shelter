import { StartCar, StoptCar, SwitchesEngine, createWinner } from './api';

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
    let vw78 = (78 * window.innerWidth) / 100;
    if (window.innerWidth < 800) {
        vw78 = (70 * window.innerWidth) / 100;
    }
    if (window.innerWidth < 600) {
        vw78 = (65 * window.innerWidth) / 100;
    }
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    const patchCar1 = await StartCar(id);

    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    const currentCar = carImage.querySelector('.wrapperImg1') as HTMLDivElement;
    const duration = patchCar1.distance / patchCar1.velocity;

    startButton.disabled = true;
    stopButton.disabled = false;
    createAnimationTest(vw78, duration, currentCar);
    try {
        const statusEngine = await SwitchesEngine(id);
        console.log('Движок =', id, statusEngine, patchCar1.velocity);
    } catch (error) {
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
    await StoptCar(id);
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
    let vw78 = (78 * window.innerWidth) / 100;
    if (window.innerWidth < 800) {
        vw78 = (70 * window.innerWidth) / 100;
    }
    if (window.innerWidth < 600) {
        vw78 = (65 * window.innerWidth) / 100;
    }
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
