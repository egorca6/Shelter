const baseUrl = 'http://127.0.0.1:3000';
export const getTest = async () => {
    const response = await fetch(`${baseUrl}/garage`);
    const data = await response.json();
    console.log(response);
    console.log('data', data);
};
