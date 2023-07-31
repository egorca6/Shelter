import { PauseAnimation } from './animation';
import { baseUrl } from './constants';
import { CarParam, SwitchEngine, dataType, engine, winsOnPage } from './type';

export const getGarage = async (): Promise<dataType> => {
    const response = await fetch(`${baseUrl}/garage`);
    return await response.json();
};

export const getGarageCarCount = async (): Promise<number | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage?_page=1&_limit=2`);
        return Number(response.headers.get('X-Total-Count'));
    } catch (err) {
        console.warn('Error Message:', String(err));

        return null;
    }
};

export const getWinners = async (): Promise<winsOnPage[] | null> => {
    try {
        const response = await fetch(`${baseUrl}/winners?_page=1&_limit=10`);
        return await response.json();
    } catch (err) {
        console.warn('Error Message GET:', String(err));
        return null;
    }
};

export const delWinnerCarOnServer = async (id: number) => {
    try {
        await fetch(`${baseUrl}/winners/${id}`, {
            method: 'DELETE',
        });
    } catch (err) {
        console.warn('Error Delete:', String(err));
        return null;
    }
};

export const updateGarageData = async () => {
    const count = await getGarageCarCount();
    const fullGarage = document.querySelector('.full-garage');
    if (fullGarage) {
        fullGarage.textContent = `Garage (${count})`;
    }
    return count;
};

export const getPageCars = async (page: number): Promise<dataType[] | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage?_page=${page}&_limit=7`);
        return await response.json();
    } catch (err) {
        console.warn('Error Message:', String(err));
        return null;
    }
};

export const DrawPageCars = async (page: number): Promise<dataType[] | null> => {
    return await getPageCars(page);
};

const createCar = async (body: CarParam): Promise<CarParam | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (err) {
        console.warn('Error Message POST:', String(err));
        return null;
    }
};

export const createWinner = async (body: winsOnPage): Promise<winsOnPage | null> => {
    try {
        const response = await fetch(`${baseUrl}/winners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (err) {
        console.warn('Error Message POST: ', String(err));

        return null;
    }
};

export const PostNewCar = async (carModel: string, color: string) => {
    const car = await createCar({
        name: carModel,
        color: color,
    });
    return car;
};

export const deleteCarOnServer = async (id: number) => {
    try {
        await fetch(`${baseUrl}/garage/${id}`, {
            method: 'DELETE',
        });
    } catch (err) {
        console.warn('Error Message Delete:', String(err));
        return null;
    }
};

export const getCar = async (id: number): Promise<dataType | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'GET',
        });
        return await response.json();
    } catch (err) {
        console.warn('Error Message GET:', String(err));

        return null;
    }
};

export const putCar = async (id: number, body: CarParam): Promise<CarParam | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (err) {
        console.warn('Error PUT:', String(err));
        return null;
    }
};

export const StartCar = async (id: number): Promise<engine | null> => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        return await response.json();
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        return null;
    }
};

export const StoptCar = async (id: number): Promise<engine | null> => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        return await response.json();
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        return null;
    }
};

export const SwitchesEngine = async (id: number): Promise<SwitchEngine | null> => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        return await response.json();
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        PauseAnimation();
        return null;
    }
};

export const updateCar = async (i: number, newName: string, newColor: string) => {
    const updatedCarData = {
        name: newName,
        color: newColor,
    };
    const updatedCar = await putCar(i, updatedCarData);

    const carNameElement = document.querySelector(`.car-wrapper:nth-child(${i}) .car1WrapperSelect span`);
    const carImageElement: HTMLElement | null = document.querySelector(`.car-wrapper:nth-child(${i}) .car1Image`);

    if (updatedCar && carNameElement && carImageElement) {
        carNameElement.textContent = updatedCar.name;
        carImageElement.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${updatedCar.color})`;
    }
};
