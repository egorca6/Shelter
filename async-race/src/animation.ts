import { patchCar } from './api';

export async function raceOneCar(event: Event) {
    const carWrapper = (event.target as Element)?.closest('.car-wrapper') as HTMLElement;
    const id = Number(carWrapper.getAttribute('dataid'));
    const patchCar1 = await patchCar(id);
    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    const currentCar = carImage.querySelector('.wrapperImg1');
    console.log('distance = ', patchCar1.distance, typeof patchCar1.distance);
    console.log('velocity = ', patchCar1.velocity, typeof patchCar1.velocity);
    startButton.disabled = true;
    stopButton.disabled = false;
    currentCar?.classList.add('go');
    console.log(currentCar);
    if (currentCar instanceof HTMLDivElement) {
        currentCar.style.animationDuration = patchCar1.distance / patchCar1.velocity / 1000 + 's';
        console.log('ahahahahah');
    }
}

export async function CarStop(event: Event) {
    const carImage = (event.target as Element)?.closest('.car1WrapperImg1') as HTMLElement;
    const currentCar = carImage.querySelector('.wrapperImg1');
    const startButton = carImage.querySelector('.a-buttons') as HTMLButtonElement;
    const stopButton = carImage.querySelector('.b-buttons') as HTMLButtonElement;
    startButton.disabled = false;
    stopButton.disabled = true;
    console.log(startButton);

    currentCar?.classList.remove('go');
}
