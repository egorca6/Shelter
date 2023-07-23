import { baseUrl } from './constants';
import { CarParam } from './type';

export const getGarage = async () => {
    const response = await fetch(`${baseUrl}/garage`);
    const data = await response.json();
    return data;
};

export const getGarageCarCount = async () => {
    const response = await fetch(`${baseUrl}/garage?_page=1&_limit=2`);
    return Number(response.headers.get('X-Total-Count'));
};

export const updateGarageData = async () => {
    const count = await getGarageCarCount();
    const fullGarage = document.querySelector('.full-garage');
    if (fullGarage) {
        fullGarage.textContent = `Garage (${count})`;
    }
    return count;
};

export const getPageCars = async (page: number) => {
    const response = await fetch(`${baseUrl}/garage?_page=${page}&_limit=7`);
    const data = await response.json();

    return data;
};

export const DrawPageCars = async (page: number) => {
    const car = await getPageCars(page);
    return car;
};

const createCar = async (body: CarParam) => {
    const response = await fetch(`${baseUrl}/garage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const PostNewCar = async (carModel: string, color: string) => {
    const car = await createCar({
        name: `${carModel}`,
        color: `${color}`,
    });
    return car;
};

const delCar = async (id: number) => {
    const response = await fetch(`${baseUrl}/garage/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};

export const deleteCarOnServer = async (id: number) => {
    const car = await delCar(id);
    return car;
};

export const putCar = async (id: number, body: CarParam) => {
    const response = await fetch(`${baseUrl}/garage/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const StartCar = async (id: number) => {
    const response = await fetch(`${baseUrl}/engine?id=${id}&status=started`, {
        method: 'PATCH',
    });
    const data = await response.json();
    return data;
};

export const SwitchesEngine = async (id: number) => {
    const response = await fetch(`${baseUrl}/engine?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    const data = await response.json();
    return data;
};

export const updateCar = async (i: number, newName: string, newColor: string) => {
    const updatedCarData = {
        name: newName,
        color: newColor,
    };
    const updatedCar = await putCar(i, updatedCarData);

    const carNameElement = document.querySelector(
        `.car-wrapper:nth-child(${i}) .car1WrapperSelect span`
    ) as HTMLElement;
    const carImageElement = document.querySelector(`.car-wrapper:nth-child(${i}) .car1Image`) as HTMLElement;

    if (carNameElement && carImageElement) {
        carNameElement.textContent = updatedCar.name;
        carImageElement.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${updatedCar.color})`;
    }
};
