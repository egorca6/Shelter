import { loseAnimation, winAnimation } from './animation';
import { doNextLvl } from './levels';

function winLvl(level: number) {
    const divLvl = document.querySelectorAll('.div-lvl');
    winAnimation(doNextLvl);
    if (divLvl) {
        divLvl[level - 1].classList.add('pass');
    }
}

export function win(event: KeyboardEvent) {
    const table = document.querySelector('body > main > section > div.table-container');
    const level = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const input = document.querySelector('input');
    const result = input?.value !== undefined ? input.value.toLowerCase().trim() : '';

    switch (level) {
        case 1:
            if (input && (result === 'coconut, apple' || result === 'apple, coconut') && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;

        case 2:
            if (input && result === 'plate coconut' && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 3:
            if (input && /apple\s*\+\s*plate/i.test(result) && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 4:
            if (input && /potato\s*~\s*\*/i.test(result) && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 5:
            if (input && /plate\s*>\s*\*/i.test(result) && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 6:
            if (input && result === ':not(plate)' && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 7:
            if (input && /potato\s*:\s*first-of-type/i.test(result) && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 8:
            if (input && /plate\s*:\s*empty/i.test(result) && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 9:
            if (input && result === 'potato:first-child' && event.key === 'Enter') {
                winLvl(level);
            } else {
                loseAnimation(event);
            }
            break;
        case 10:
            if (input && result === 'plate:only-child' && event.key === 'Enter') {
                winLvl(level);
                setTimeout(() => {
                    if (table) {
                        table.textContent = '';
                        table.textContent = 'Congratulations, you won!';
                    }
                }, 1000);
            } else {
                loseAnimation(event);
            }
            break;
    }
}

export function winClick(event: Event) {
    const input = document.querySelector('input');
    const table = document.querySelector('body > main > section > div.table-container');
    const result = input?.value !== undefined ? input.value.toLowerCase().trim() : '';
    const level = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const mouseEvent = <MouseEvent>event;
    switch (level) {
        case 1:
            if (result === 'coconut, apple' || result === 'apple, coconut') {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;

        case 2:
            if (result === 'plate coconut') {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 3:
            if (/apple\s*\+\s*plate/i.test(result)) {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 4:
            if (/potato\s*~\s*\*/i.test(result)) {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 5:
            if (/plate\s*>\s*\*/i.test(result)) {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 6:
            if (result === ':not(plate)') {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 7:
            if (/potato\s*:\s*first-of-type/i.test(result)) {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 8:
            if (/plate\s*:\s*empty/i.test(result)) {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 9:
            if (result === 'potato:first-child') {
                winLvl(level);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
        case 10:
            if (result === 'plate:only-child') {
                winLvl(level);
                setTimeout(() => {
                    if (table) {
                        table.textContent = '';
                        table.textContent = 'Congratulations, you won!';
                    }
                }, 1000);
            } else {
                loseAnimation(mouseEvent);
            }
            break;
    }
}
