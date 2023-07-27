import { baseUrl } from './constants';
import { CarParam, dataType, winsOnPage } from './type';

export const getGarage = async () => {
    const response = await fetch(`${baseUrl}/garage`);
    const data: dataType = await response.json();
    return data;
};

export const getGarageCarCount = async (): Promise<number | null> => {
    try {
        const response = await fetch(`${baseUrl}/garage?_page=1&_limit=2`);
        const data = Number(response.headers.get('X-Total-Count'));
        return data;
    } catch (err) {
        console.warn('Error Message:', String(err));

        return null;
    }
};

export const getWinners = async () => {
    try {
        const response = await fetch(`${baseUrl}/winners?_page=1&_limit=10`);
        const data = await response.json();
        return data;
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
        const data: dataType[] = await response.json();
        return data;
    } catch (err) {
        console.warn('Error Message:', String(err));
        return null;
    }
};

export const DrawPageCars = async (page: number) => {
    const car = await getPageCars(page);
    return car;
};

const createCar = async (body: CarParam) => {
    try {
        const response = await fetch(`${baseUrl}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data: CarParam = await response.json();
        return data;
    } catch (err) {
        console.warn('Error Message POST:', String(err));
        return null;
    }
};

export const createWinner = async (body: winsOnPage) => {
    try {
        const response = await fetch(`${baseUrl}/winners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
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
export const getCar = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'GET',
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn('Error Message GET:', String(err));

        return null;
    }
};

export const putCar = async (id: number, body: CarParam) => {
    try {
        const response = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn('Error PUT:', String(err));
        return null;
    }
};

export const StartCar = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        return null;
    }
};

export const StoptCar = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        return null;
    }
};

export const SwitchesEngine = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn('Error PATCH:', String(err));
        return null;
    }
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
