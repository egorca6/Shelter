import './style.css';
import { buildHtml } from './constants';
import { doNextLvl, doPrevLvl, initLevel } from './levels';

buildHtml();
sessionStorage.setItem('result', '1');
// const plateElements = document.querySelectorAll('plate');
// const hljsSection = document.getElementsByClassName('hljs-section');
const modal = document.createElement('div');
const help = document.querySelector('.help');

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
        console.log(target);

        // if (target == plateElements[0]) {
        //     hljsSection[0].classList.add('light-on-text');
        // } else {
        //     hljsSection[1].classList.add('light-on-text');
        // }
    }
}

const level = sessionStorage.getItem('currentLevel');

const table = document.querySelector('body > main > section > div.table-container');
// plateElements.forEach((plateElement) => {
//     plateElement.addEventListener('mouseover', highlightAndShowHTMLCode);
// });

table?.addEventListener('mouseover', highlightAndShowHTMLCode);

table?.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
        target.classList.remove('light-on');
        if (modal && modal.parentNode === document.body) {
            document.body.removeChild(modal);
        }
        // document.body.removeChild(modal);
    }
});

const input = document.querySelector('input');

// const answer = ['plate', 'apple'];
function win(event: KeyboardEvent) {
    const result = input?.value !== undefined ? input.value.toLowerCase().trim() : '';
    switch (level) {
        case '1':
            console.log('event.code = ', event.code);
            if (input && (result === 'coconut, apple' || result === 'apple, coconut') && event.key === 'Enter') {
                alert('WIN');
            } else if (input && result !== 'plate' && event.key === 'Enter') {
                alert('Wrong');
            }
            break;

        case '2':
            if (input && result === 'plate coconut' && event.key === 'Enter') {
                alert('WIN');
            } else if (input && result !== 'plate coconut' && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '3':
            if (input && /apple\s*\+\s*plate/i.test(result) && event.key === 'Enter') {
                alert('WIN');
            } else if (input && !/apple\s*\+\s*plate/i.test(result) && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '4':
            if (input && /potato\s*~\s*\*/i.test(result) && event.key === 'Enter') {
                alert('WIN');
            } else if (input && !/potato\s*~\s*\*/i.test(result) && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '5':
            if (input && /plate\s*>\s*\*/i.test(result) && event.key === 'Enter') {
                alert('WIN');
            } else if (input && !/plate\s*>\s*\*/i.test(result) && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '6':
            if (input && result === ':not(plate)' && event.key === 'Enter') {
                alert('WIN');
            } else if (input && result !== ':not(plate)' && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '7':
            if (input && /potato\s*:\s*first-of-type/i.test(result) && event.key === 'Enter') {
                alert('WIN');
            } else if (input && !/potato\s*:\s*first-of-type/i.test(result) && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '8':
            if (input && /plate\s*:\s*empty/i.test(result) && event.key === 'Enter') {
                alert('WIN');
            } else if (input && !/plate\s*:\s*empty/i.test(result) && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '9':
            if (input && result === 'potato:first-child' && event.key === 'Enter') {
                alert('WIN');
            } else if (input && result !== 'potato:first-child' && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
        case '10':
            if (input && result === 'plate :only-child' && event.key === 'Enter') {
                alert('WIN');
            } else if (input && result !== 'plate :only-child' && event.key === 'Enter') {
                alert('Wrong');
            }
            break;
    }
}
input?.addEventListener('keydown', win);

// input?.addEventListener('input', function () {
//     hljs.highlightElement(input);
// });

const enter = document.querySelector('.enter');

enter?.addEventListener('click', function () {
    if (input?.value.toLowerCase().trim() === 'plate') {
        alert('WIN');
    } else {
        alert('Wrong');
    }
});

help?.addEventListener('click', function () {
    alert('plate');
});

const nextLvl = document.querySelector('.nextLvl');
const prevLvl = document.querySelector('.prevLvl');
const buttonMenu = document.querySelector('.navbar-menu');
const listLvl = document.querySelector('.close');
// const lvl1 = document.querySelector('body > main > aside > div.close.open > button');
// const levelContainer = document.querySelector('.level-container');
const lvlDiscription = document.querySelector('body > main > aside > div.lvl-discription');

nextLvl?.addEventListener('click', doNextLvl);
prevLvl?.addEventListener('click', doPrevLvl);
// lvl1?.addEventListener('click', doPrevLvl);
// lvl1?.addEventListener('click', () => console.log('ghbdtn'));

buttonMenu?.addEventListener('click', () => {
    // Переключите класс для элемента навигации
    listLvl?.classList.toggle('open');
    lvlDiscription?.classList.toggle('hide');
    if (lvlDiscription?.classList.contains('lvl-discription')) {
        lvlDiscription.classList.remove('lvl-discription');
    } else {
        lvlDiscription?.classList.add('lvl-discription');
    }
});
initLevel();
// const highlight = document.querySelector('.highlight');
