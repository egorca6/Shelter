import './style.css';
import { buildHtml } from './utils';
import { doNextLvl, doPrevLvl, initLevel, updateLevel } from './levels';
import { typeAnswer } from './helpInput';
import 'highlight.js/styles/a11y-dark.css';
import { win, winClick } from './Win';

buildHtml();

const modal = document.createElement('div');
const help = document.querySelector('.help');
const divLvl = document.querySelectorAll('.div-lvl');

function highlightAndShowHTMLCode(event: Event) {
    const { target } = event;

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
input?.addEventListener('keydown', win);

const enter = document.querySelector('.enter');

enter?.addEventListener('click', winClick);
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
