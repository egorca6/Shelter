import { levelAnswer } from './consts';

export function typeAnswer() {
    const divLvl = document.querySelectorAll('.div-lvl');
    const input = document.querySelector('input');
    const level = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const config = level ? levelAnswer[level] : undefined;

    if (config && input) {
        input.value = '';

        let indexInAnswer = 0;
        const intervalId = setInterval(() => {
            if (input && indexInAnswer < config.text.length) {
                input.value += config.text.charAt(indexInAnswer);
                indexInAnswer++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        if (input) {
            input.focus();
        }
        divLvl[level - 1].classList.add('help');
    }
}
