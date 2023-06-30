import './style.css';
import { buildHtml } from './constants';
import { doNextLvl, doPrevLvl } from './levels';
// import * as constants from 'constants';
buildHtml();
sessionStorage.setItem('result', '1');
const plateElements = document.querySelectorAll('plate');
const hljsSection = document.getElementsByClassName('hljs-section');
const modal = document.createElement('div');
const help = document.querySelector('.help');

function highlightAndShowHTMLCode(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && target.matches('plate')) {
        target.classList.add('light-on');
        // console.log(target == plateElements[0]);
        // console.log(target.outerHTML.replace(`class="light-on"`, ''));
        modal.classList.add('modal');
        modal.textContent = target.outerHTML.replace(`class="light-on"`, '');
        console.log('hljsSection = ', hljsSection);

        document.body.appendChild(modal);
        // новое
        if (target == plateElements[0]) {
            hljsSection[0].classList.add('light-on-text');
        } else {
            hljsSection[1].classList.add('light-on-text');
        }
    }
}

plateElements.forEach((plateElement) => {
    plateElement.addEventListener('mouseover', highlightAndShowHTMLCode);
});

plateElements.forEach((plateElement) => {
    plateElement.addEventListener('mouseout', () => {
        plateElement.classList.remove('light-on');
        hljsSection[0].classList.remove('light-on-text');
        hljsSection[1].classList.remove('light-on-text');
        modal.classList.remove('modal');
    });
});

const input = document.querySelector('input');
input?.addEventListener('keydown', function (event) {
    if (input.value.toLowerCase().trim() === 'plate' && event.key === 'Enter') {
        alert('WIN');
    } else if (input.value.toLowerCase().trim() !== 'plate' && event.key === 'Enter') {
        alert('Wrong');
    }
});

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
nextLvl?.addEventListener('click', doNextLvl);
prevLvl?.addEventListener('click', doPrevLvl);

const highlight = document.querySelector('.highlight');
console.log(highlight);

console.log(highlight?.innerHTML);
