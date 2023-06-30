import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

export function buildHtml() {
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

    const inputHeaderViewer = document.createElement('div');
    inputHeaderViewer.classList.add('input-wrapper-header');
    inputHeaderViewer.textContent = `HTML  Viewer`;

    const viewerHeaderName = document.createElement('div');
    viewerHeaderName.classList.add('input-wrapper-name');
    viewerHeaderName.textContent = `table.html`;

    const inputHeader = document.createElement('div');
    inputHeader.classList.add('input-wrapper-header');
    inputHeader.textContent = `CSS editor`;

    const inputHeaderName = document.createElement('div');
    inputHeaderName.classList.add('input-wrapper-name');
    inputHeaderName.textContent = `style.css`;

    const viewerMain = document.createElement('div');
    viewerMain.classList.add('viewer-wrapper-main');

    const highlight = document.createElement('div');
    highlight.classList.add('highlight');

    const inputHeaderMain = document.createElement('div');
    inputHeaderMain.classList.add('input-wrapper-main');

    const lineNumbers = document.createElement('div');
    lineNumbers.classList.add('lineNumbers');
    lineNumbers.innerHTML = ``;
    for (let i = 1; i <= 20; i += 1) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i.toString();
        lineNumbers.appendChild(lineNumber);
    }

    const lineNumbersForViewer = document.createElement('div');
    lineNumbersForViewer.classList.add('lineNumbers-viewer');
    lineNumbersForViewer.innerHTML = ``;
    for (let i = 1; i <= 20; i += 1) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i.toString();
        lineNumbersForViewer.appendChild(lineNumber);
    }

    const viewerWrapper = document.createElement('div');
    viewerWrapper.classList.add('viewer-wrapper');

    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Type in a CSS selector');
    input.autofocus = true;

    const inputText = document.createElement('div');
    inputText.classList.add('input-text');
    inputText.innerHTML = `{ <br> /* Styles would go here. */ <br>} <br> <br> /* <br>Type a number to skip to a level. 
    <br>Ex -> "5" for level 5 <br> */`;

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
    lvlInfo.textContent = `Level 1 of 11`;

    const prevLvl = document.createElement('button');
    prevLvl.textContent = `<`;
    prevLvl.classList.add('prevLvl');

    const nextLvl = document.createElement('button');
    nextLvl.textContent = `>`;
    nextLvl.classList.add('nextLvl');

    const buttonMenu = document.createElement('button');
    buttonMenu.innerHTML = `&#8801;`;
    buttonMenu.classList.add('navbar-menu');

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
    inputWrapper.appendChild(inputHeader);
    inputHeader.appendChild(inputHeaderName);
    inputWrapper.appendChild(inputHeaderMain);
    inputHeaderMain.appendChild(lineNumbers);
    inputHeaderMain.appendChild(input);
    inputHeaderMain.appendChild(enter);
    inputHeaderMain.appendChild(inputText);
    viewerWrapper.appendChild(inputHeaderViewer);
    inputHeaderViewer.appendChild(viewerHeaderName);
    viewerWrapper.appendChild(viewerMain);
    viewerMain.appendChild(lineNumbersForViewer);

    const codeContainer = document.createElement('div');
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.classList.add('hljs', 'language-xml');
    codeElement.textContent = `
    <div class="table" 

        <plate />
        <plate />

    </div>
`;

    preElement.appendChild(codeElement);
    codeContainer.appendChild(preElement);

    viewerMain.appendChild(codeContainer);
    hljs.highlightElement(codeElement);

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
}
