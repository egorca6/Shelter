// import { createEl } from './utils';

const baseUrl = 'http://127.0.0.1:3000';

export const getTest = async () => {
    const response = await fetch(`${baseUrl}/garage`);
    const data = await response.json();
    // console.log(response);
    // console.log('data', data.length);
    // console.log(response.headers);

    return data.length;
};

export const getTest2 = async () => {
    const response = await fetch(`${baseUrl}/winners`);
    const data = await response.json();
    // console.log(response);
    // console.log('winners', data);
    // console.log('winners Длина', data.length);
};

export const getGarageCarCount = async () => {
    const response = await fetch(`${baseUrl}/garage?_page=1&_limit=2`);
    return response.headers.get('X-Total-Count');
};

// export function build() {
//     const main = document.querySelector('.main');
//     const test = createEl('button', 'test1', 'test');
//     main?.append(test);
// }
