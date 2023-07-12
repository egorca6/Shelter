import { DEFAULT_ANSWER_INDEX, defaultLvl, levelAnswer } from './consts';

export function typeAnswer() {
    const divLvl = document.querySelectorAll('.div-lvl');
    const input = document.querySelector('input');
    const level = Number(sessionStorage.getItem('currentLevel') ?? defaultLvl);
    const config = level ? levelAnswer[level] : undefined;

    if (config && input) {
        input.value = '';

        let indexInAnswer = DEFAULT_ANSWER_INDEX;
        const intervalId = setInterval(() => {
            if (input && indexInAnswer < config.length) {
                input.value += config.charAt(indexInAnswer);
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
