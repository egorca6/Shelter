import './style.css';
import { buildHtml } from './constants';
import { doNextLvl, doPrevLvl, initLevel, updateLevel } from './levels';
import { typeAnswer } from './helpInput';
import { loseAnimation, winAnimation } from './animation';
import 'highlight.js/styles/a11y-dark.css';

buildHtml();

const modal = document.createElement('div');
const help = document.querySelector('.help');
const divLvl = document.querySelectorAll('.div-lvl');

function highlightAndShowHTMLCode(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && !target.classList.contains('table-container')) {
        target.classList.add('light-on');

        modal.classList.add('modal');
        modal.textContent = target.outerHTML.replace(/ class=".*?"/g, '');

        document.body.appendChild(modal);
        const targetRect = target.getBoundingClientRect();
        const modalRect = modal.getBoundingClientRect();

        const modalTop = targetRect.top + window.scrollY - modalRect.height;
        const modalLeft = targetRect.left + window.scrollX;

        modal.style.top = modalTop + 'px';
        modal.style.left = modalLeft + 'px';
    }
}

const table = document.querySelector('body > main > section > div.table-container');

table?.addEventListener('mouseover', highlightAndShowHTMLCode);

table?.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
        target.classList.remove('light-on');
        if (modal && modal.parentNode === document.body) {
            document.body.removeChild(modal);
        }
    }
});

const input = document.querySelector('input');

function win(event: KeyboardEvent) {
    const level = sessionStorage.getItem('currentLevel');

    const result = input?.value !== undefined ? input.value.toLowerCase().trim() : '';
    switch (level) {
        case '1':
            if (input && (result === 'coconut, apple' || result === 'apple, coconut') && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[0].classList.remove('highlight');
                divLvl[1].classList.add('highlight');
                divLvl[0].classList.add('pass');
            } else if (input && result !== 'coconut, apple' && event.key === 'Enter') {
                loseAnimation();
            }
            break;

        case '2':
            if (input && result === 'plate coconut' && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[1].classList.remove('highlight');
                divLvl[2].classList.add('highlight');
                divLvl[1].classList.add('pass');
            } else if (input && result !== 'plate coconut' && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '3':
            if (input && /apple\s*\+\s*plate/i.test(result) && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[2].classList.remove('highlight');
                divLvl[3].classList.add('highlight');
                divLvl[2].classList.add('pass');
            } else if (input && !/apple\s*\+\s*plate/i.test(result) && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '4':
            if (input && /potato\s*~\s*\*/i.test(result) && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[3].classList.remove('highlight');
                divLvl[4].classList.add('highlight');
                divLvl[3].classList.add('pass');
            } else if (input && !/potato\s*~\s*\*/i.test(result) && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '5':
            if (input && /plate\s*>\s*\*/i.test(result) && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[4].classList.remove('highlight');
                divLvl[5].classList.add('highlight');
                divLvl[4].classList.add('pass');
            } else if (input && !/plate\s*>\s*\*/i.test(result) && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '6':
            if (input && result === ':not(plate)' && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[5].classList.remove('highlight');
                divLvl[6].classList.add('highlight');
                divLvl[5].classList.add('pass');
            } else if (input && result !== ':not(plate)' && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '7':
            if (input && /potato\s*:\s*first-of-type/i.test(result) && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[6].classList.remove('highlight');
                divLvl[7].classList.add('highlight');
                divLvl[6].classList.add('pass');
            } else if (input && !/potato\s*:\s*first-of-type/i.test(result) && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '8':
            if (input && /plate\s*:\s*empty/i.test(result) && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[7].classList.remove('highlight');
                divLvl[8].classList.add('highlight');
                divLvl[7].classList.add('pass');
            } else if (input && !/plate\s*:\s*empty/i.test(result) && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '9':
            if (input && result === 'potato:first-child' && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[8].classList.remove('highlight');
                divLvl[9].classList.add('highlight');
                divLvl[8].classList.add('pass');
            } else if (input && result !== 'potato:first-child' && event.key === 'Enter') {
                loseAnimation();
            }
            break;
        case '10':
            if (input && result === 'plate:only-child' && event.key === 'Enter') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[9].classList.add('pass');
                setTimeout(() => {
                    if (table) {
                        table.textContent = '';
                        table.textContent = 'Congratulations, you won!';
                    }
                }, 1000);
            } else if (input && result !== 'plate:only-child' && event.key === 'Enter') {
                loseAnimation();
            }
            break;
    }
}
input?.addEventListener('keydown', win);

const enter = document.querySelector('.enter');

enter?.addEventListener('click', function () {
    const result = input?.value !== undefined ? input.value.toLowerCase().trim() : '';
    const level = sessionStorage.getItem('currentLevel');

    switch (level) {
        case '1':
            if (result === 'coconut, apple' || result === 'apple, coconut') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[0].classList.add('pass');
            } else {
                loseAnimation();
            }
            break;

        case '2':
            if (result === 'plate coconut') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[1].classList.add('pass');
            } else if (result !== 'plate coconut') {
                loseAnimation();
            }
            break;
        case '3':
            if (/apple\s*\+\s*plate/i.test(result)) {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[2].classList.add('pass');
            } else if (!/apple\s*\+\s*plate/i.test(result)) {
                loseAnimation();
            }
            break;
        case '4':
            if (/potato\s*~\s*\*/i.test(result)) {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[3].classList.add('pass');
            } else if (!/potato\s*~\s*\*/i.test(result)) {
                loseAnimation();
            }
            break;
        case '5':
            if (/plate\s*>\s*\*/i.test(result)) {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[4].classList.add('pass');
            } else if (!/plate\s*>\s*\*/i.test(result)) {
                loseAnimation();
            }
            break;
        case '6':
            if (result === ':not(plate)') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[5].classList.add('pass');
            } else if (result !== ':not(plate)') {
                loseAnimation();
            }
            break;
        case '7':
            if (/potato\s*:\s*first-of-type/i.test(result)) {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[6].classList.add('pass');
            } else if (!/potato\s*:\s*first-of-type/i.test(result)) {
                loseAnimation();
            }
            break;
        case '8':
            if (/plate\s*:\s*empty/i.test(result)) {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[7].classList.add('pass');
            } else if (!/plate\s*:\s*empty/i.test(result)) {
                loseAnimation();
            }
            break;
        case '9':
            if (result === 'potato:first-child') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[8].classList.add('pass');
            } else if (result !== 'potato:first-child') {
                loseAnimation();
            }
            break;
        case '10':
            if (result === 'plate:only-child') {
                winAnimation(() => {
                    doNextLvl();
                });
                divLvl[9].classList.add('pass');
                setTimeout(() => {
                    if (table) {
                        table.textContent = '';
                        table.textContent = 'Congratulations, you won!';
                    }
                }, 1000);
            } else if (result !== 'plate:only-child') {
                loseAnimation();
            }
            break;
    }
});

help?.addEventListener('click', typeAnswer);

const nextLvl = document.querySelector('.nextLvl');
const reset = document.querySelector('.reset');
const prevLvl = document.querySelector('.prevLvl');
const buttonMenu = document.querySelector('.navbar-menu');
const listLvl = document.querySelector('.close');
const lvlDiscription = document.querySelector('body > main > aside > div.lvl-discription');

nextLvl?.addEventListener('click', doNextLvl);
prevLvl?.addEventListener('click', doPrevLvl);

buttonMenu?.addEventListener('click', () => {
    listLvl?.classList.toggle('open');
    lvlDiscription?.classList.toggle('hide');
    if (lvlDiscription?.classList.contains('lvl-discription')) {
        lvlDiscription.classList.remove('lvl-discription');
    } else {
        lvlDiscription?.classList.add('lvl-discription');
    }
});

divLvl.forEach((div) => {
    div.addEventListener('click', function () {
        divLvl.forEach((div) => {
            div.classList.remove('highlight');
        });
        div.classList.add('highlight');
        if (div.textContent) {
            const currentLvl = parseInt(div.textContent.slice(0, 2));
            sessionStorage.setItem('currentLevel', currentLvl.toString());
            updateLevel(currentLvl);
        }
    });
});
initLevel();

reset?.addEventListener('click', () => {
    divLvl.forEach((div) => {
        div.classList.remove('highlight');
        div.classList.remove('pass');
        div.classList.remove('help');
    });

    updateLevel(1);
});
