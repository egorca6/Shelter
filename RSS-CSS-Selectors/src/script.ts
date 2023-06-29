import './style.css';
import { buildHtml } from './constants';
// import * as constants from 'constants';
buildHtml();

const plateElements = document.querySelectorAll('plate');
const hljsSection = document.getElementsByClassName('hljs-section');
const modal = document.createElement('div');

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
