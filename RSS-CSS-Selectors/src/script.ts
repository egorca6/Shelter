import './style.css';
// import '../libs/highlight/styles/agate.min.css';
// import 'cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js';
// const hljs = require('highlight.js/lib/core');
// hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

const container = document.createElement('main');
container.classList.add('container');

const footer = document.createElement('footer');
footer.classList.add('footer');

const section = document.createElement('section');
section.classList.add('section');

const heading = document.createElement('h2');
heading.textContent = 'Select the plates';

const help = document.createElement('button');
help.classList.add('help');
help.textContent = `Help, I'm stack`;

const tableContainer = document.createElement('div');
tableContainer.classList.add('table-container');

const plate = document.createElement('plate');
const plate1 = document.createElement('plate');

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

const inputWrapper = document.createElement('div');
inputWrapper.classList.add('input-wrapper');

const viewerWrapper = document.createElement('div');
viewerWrapper.classList.add('viewer-wrapper');

const input = document.createElement('input');
input.setAttribute('placeholder', 'Type here');
// inputContainer.classList.add('input-container');

const enter = document.createElement('button');
enter.classList.add('enter');
enter.textContent = `Enter`;

const levelContainer = document.createElement('aside');
levelContainer.classList.add('level-container');

const navbar = document.createElement('div');
navbar.classList.add('navbar');
const buttonWrapper = document.createElement('div');
buttonWrapper.classList.add('buttonWrapper');

const lvlInfo = document.createElement('div');
lvlInfo.classList.add('lvlInfo');
lvlInfo.textContent = `Level 1 of 32`;

const prevLvl = document.createElement('button');
// prevLvl.innerHTML = `&lt;`;
prevLvl.textContent = `<`;
prevLvl.classList.add('prevLvl');

const nextLvl = document.createElement('button');
nextLvl.textContent = `>`;
nextLvl.classList.add('nextLvl');

const buttonMenu = document.createElement('button');
buttonMenu.innerHTML = `&#8801;`;
buttonMenu.classList.add('navbar-menu');

// const contentMenu = document.createElement('div');
// contentMenu.innerHTML = `<button class="close-menu">&times;</button>`;
// contentMenu.classList.add('content-menu');

const lvlDiscription = document.createElement('span');
lvlDiscription.innerHTML = `Type Selector<br>
Select elements by their type<br><br>
A<br><br>
Selects all elements of type A. Type refers to<br>
the type of tag, so &lt;div&gt;, &lt;p&gt; and &lt;ul&gt; are<br>
all different element types.<br><br>
Examples<br>
div selects all &lt;div&gt; elements.<br>
p selects all &lt;p&gt; elements.`;
lvlDiscription.classList.add('lvl-discription');

section.appendChild(heading);
section.appendChild(help);
section.appendChild(tableContainer);
tableContainer.appendChild(plate);
tableContainer.appendChild(plate1);
section.appendChild(inputContainer);
inputContainer.appendChild(inputWrapper);
inputContainer.appendChild(viewerWrapper);
inputWrapper.appendChild(input);
inputWrapper.appendChild(enter);

container.appendChild(section);
container.appendChild(levelContainer);
levelContainer.appendChild(navbar);
navbar.appendChild(lvlInfo);
navbar.appendChild(buttonWrapper);
buttonWrapper.appendChild(prevLvl);
buttonWrapper.appendChild(nextLvl);
buttonWrapper.appendChild(buttonMenu);
levelContainer.appendChild(lvlDiscription);

document.body.appendChild(container);
document.body.appendChild(footer);

function updateViewerContent() {
    viewerWrapper.innerHTML = `        <pre>
    <code>
        &lt;plate/&gt;
        &lt;plate/&gt;
        123
        1235
        &lt;plate/&gt;
    </code>
</pre>`;
}

updateViewerContent();
console.log(viewerWrapper.textContent);
