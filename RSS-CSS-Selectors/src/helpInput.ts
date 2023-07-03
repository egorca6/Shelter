export function typeAnswer() {
    console.log('HELP');
    const input = document.querySelector('input');
    const level = sessionStorage.getItem('currentLevel');

    const levelAnswer: { [key: string]: { text: string } } = {
        '1': { text: 'coconut, apple' },
        '2': { text: 'plate coconut' },
        '3': { text: 'apple + plate' },
        '4': { text: 'potato ~ *' },
        '5': { text: 'plate > *' },
        '6': { text: ':not(plate)' },
        '7': { text: 'potato:first-of-type' },
        '8': { text: 'plate:empty' },
        '9': { text: 'potato:first-child' },
        '10': { text: 'plate:only-child' },
    };

    const config = level ? levelAnswer[level] : undefined;

    if (config && input) {
        input.value = '';

        let index = 0;
        const intervalId = setInterval(() => {
            if (index < config.text.length) {
                input.value += config.text.charAt(index);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
    }
}
