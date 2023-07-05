export function typeAnswer() {
    const divLvl = document.querySelectorAll('.div-lvl');
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
        if (input) {
            input.focus();
        }
        switch (level) {
            case '1':
                divLvl[0].classList.add('help');
                break;
            case '2':
                divLvl[1].classList.add('help');
                break;
            case '3':
                divLvl[2].classList.add('help');
                break;
            case '4':
                divLvl[3].classList.add('help');
                break;
            case '5':
                divLvl[4].classList.add('help');
                break;
            case '6':
                divLvl[5].classList.add('help');
                break;
            case '7':
                divLvl[6].classList.add('help');
                break;
            case '8':
                divLvl[7].classList.add('help');
                break;
            case '9':
                divLvl[8].classList.add('help');
                break;
            case '10':
                divLvl[9].classList.add('help');
                break;
        }
    }
}
