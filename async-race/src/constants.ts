import { CarParam } from './type';

const baseUrl = 'http://127.0.0.1:3000';

export const getGarage = async () => {
    const response = await fetch(`${baseUrl}/garage`);
    const data = await response.json();
    // console.log(data); 15 раз появляется в консоли

    return data;
};
export const updateCarColor = async (i: number) => {
    const date = await getGarage();

    return date[i]?.color;
};

export const updateCarName = async (i: number) => {
    const date = await getGarage();

    return date[i]?.name;
};

export const getID = async (i: number) => {
    const date = await getGarage();
    // console.log('ID = ', date[i]?.id);

    return date[i]?.id;
};

const getGarageCarCount = async () => {
    const response = await fetch(`${baseUrl}/garage?_page=1&_limit=2`);
    return response.headers.get('X-Total-Count');
};

export const updateGarageData = async () => {
    const count = await getGarageCarCount();
    const fullGarage = document.querySelector('.full-garage');
    if (fullGarage) {
        fullGarage.textContent = `Garage (${count})`;
    }
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

export const DrawCar = async (carModel: string, color: string) => {
    const car = await createCar({
        name: `#${carModel}`,
        color: `${color}`,
    });
    // console.log(car);
    return car;
};

export const carBrands: string[] = [
    'Tesla',
    'Ford',
    'Bentley',
    'Toyota',
    'Honda',
    'BMW',
    'Audi',
    'Mercedes',
    'Bugatti',
    'Lexus',
];
export const carModels: string[] = ['Model S', 'Mustang', 'A3', 'Corolla', 'Civic', 'X5', 'A4', 'X3', 'Altima', 'Golf'];
export const carColors: string[] = [
    'Red',
    'Blue',
    'Green',
    'Black',
    'White',
    'Silver',
    'Gray',
    'Yellow',
    'Orange',
    'Purple',
];
