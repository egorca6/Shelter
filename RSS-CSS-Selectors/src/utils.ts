import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

function createEl(elementName: string, className?: string, content?: string): HTMLElement {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    if (content) {
        element.textContent = content;
    }

    return element;
}

export function addClassToDance([...elems]: Element[]): void {
    [...elems].map((e) => e.classList.add('dance'));
}

export function buildHtml() {
    const container = createEl('main', 'container');
    const section = createEl('section', 'section');
    const heading = createEl('h2', 'h2', 'Select the coconut and apple');
    const help = createEl('button', 'help', `Help, I'm stack`);
    const tableContainer = createEl('div', 'table-container');
    const codeContainer = createEl('div');
    const preElement = createEl('pre');
    const codeElement = createEl('code');
    codeElement.classList.add('hljs', 'language-xml');
    codeElement.textContent = `
    <div class="table">

        <plate>
            <coconut />
        <plate />
        <apple />
        <plate>
            <potato />
        <plate />
        <plate />
        <coconut />

    </div>
    `;

    const plate1 = createEl('plate');
    const plate2 = createEl('plate');
    const plate3 = createEl('plate');
    const coconut1 = createEl('coconut');
    const coconut2 = createEl('coconut');
    const apple1 = createEl('apple');
    const potato1 = createEl('potato');

    const inputContainer = createEl('div', 'input-container');
    const inputWrapper = createEl('div', 'input-wrapper');
    const inputHeaderViewer = createEl('div', 'input-wrapper-header', 'HTML  Viewer');
    const viewerHeaderName = createEl('div', 'input-wrapper-name', 'table.html');
    const inputHeader = createEl('div', 'input-wrapper-header', 'CSS editor');
    const inputHeaderName = createEl('div', 'input-wrapper-name', 'style.css');
    const viewerMain = createEl('div', 'viewer-wrapper-main');
    const inputHeaderMain = createEl('div', 'input-wrapper-main');
    const lineNumbers = createEl('div', 'lineNumbers');

    lineNumbers.innerHTML = ``;
    for (let i = 1; i <= 20; i += 1) {
        const lineNumber = createEl('div');
        lineNumber.textContent = i.toString();
        lineNumbers.append(lineNumber);
    }

    const lineNumbersForViewer = createEl('div', 'lineNumbers-viewer');

    lineNumbersForViewer.innerHTML = ``;
    for (let i = 1; i <= 20; i += 1) {
        const lineNumber = createEl('div');
        lineNumber.textContent = i.toString();
        lineNumbersForViewer.append(lineNumber);
    }

    const viewerWrapper = createEl('div', 'viewer-wrapper');

    const input = createEl('input');
    input.setAttribute('placeholder', 'Type in a CSS selector');
    input.autofocus = true;

    const inputText = createEl('div', 'input-text');
    inputText.innerHTML = `{ <br> /* Styles would go here. */ <br>} <br> <br> /* <br>Type a number to skip to a level. 
    <br>Ex -> "5" for level 5 <br> */`;

    const enter = createEl('button', 'enter', 'Enter');
    const levelContainer = createEl('aside', 'level-container');
    const navbar = createEl('div', 'navbar');
    const buttonWrapper = createEl('div', 'buttonWrapper');
    const lvlInfo = createEl('div', 'lvlInfo', 'Level 1 of 10');
    const prevLvl = createEl('button', 'prevLvl', '<');
    const nextLvl = createEl('button', 'nextLvl', '>');
    const buttonMenu = createEl('button', 'navbar-menu');
    buttonMenu.innerHTML = `&#8801;`;

    const listLvl = createEl('div', 'close');
    const lvl1 = createEl('div', 'div-lvl', '1  A, B');
    const lvl2 = createEl('div', 'div-lvl', '2  A B');
    const lvl3 = createEl('div', 'div-lvl', '3  A + B');
    const lvl4 = createEl('div', 'div-lvl', '4  You can do it...');
    const lvl5 = createEl('div', 'div-lvl', '5  You can do it...');
    const lvl6 = createEl('div', 'div-lvl', '6  :not(X)');
    const lvl7 = createEl('div', 'div-lvl', '7  :first-of-type');
    const lvl8 = createEl('div', 'div-lvl', '8  :empty');
    const lvl9 = createEl('div', 'div-lvl', '9  :first-child');
    const lvl10 = createEl('div', 'div-lvl', '10  :last-of-type');
    const reset = createEl('button', 'reset', 'Reset');

    listLvl.append(lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9, lvl10, reset);

    const lvlDiscription = createEl('div', 'lvl-discription');
    lvlDiscription.innerHTML = `Comma Combinator<br>
        Combine, selectors, with... commas!<br><br>
      A, B<br><br>
      This selects all Type A<br>
      and B elements. You can combine any selectors<br>
      this way, and you can specify more than two.<br><br>
      Examples<br>
      div, .fun selects all &lt;div&gt;  elements as well as<br>
      all elements with class="fun"`;

    section.append(heading);
    section.append(help);
    section.append(tableContainer);
    tableContainer.append(plate1, apple1, plate2, plate3, coconut2);
    plate1.append(coconut1);
    plate2.append(potato1);
    coconut1.classList.add('dance');
    coconut2.classList.add('dance');
    apple1.classList.add('dance');
    section.append(inputContainer);
    inputContainer.append(inputWrapper);
    inputContainer.append(viewerWrapper);
    inputWrapper.append(inputHeader);
    inputHeader.append(inputHeaderName);
    inputWrapper.append(inputHeaderMain);
    inputHeaderMain.append(lineNumbers);

    inputHeaderMain.append(input);
    inputHeaderMain.append(input);
    inputHeaderMain.append(enter);
    inputHeaderMain.append(inputText);
    viewerWrapper.append(inputHeaderViewer);
    inputHeaderViewer.append(viewerHeaderName);
    viewerWrapper.append(viewerMain);
    viewerMain.append(lineNumbersForViewer);

    preElement.append(codeElement);
    codeContainer.append(preElement);

    viewerMain.append(codeContainer);

    container.append(section);
    container.append(levelContainer);
    levelContainer.append(navbar);
    navbar.append(lvlInfo);
    navbar.append(buttonWrapper);
    buttonWrapper.append(prevLvl);
    buttonWrapper.append(nextLvl);
    buttonWrapper.append(buttonMenu);
    levelContainer.append(lvlDiscription);
    levelContainer.append(listLvl);

    document.body.append(container);

    const copyrightElement = createEl('div');
    copyrightElement.innerHTML = '&copy; 2023';
    const footerWrapper = createEl('div', 'footerWrapper');
    section.append(footerWrapper);
    const image1 = document.createElement('div');
    image1.classList.add('image1');

    image1.addEventListener('click', () => {
        window.location.href = 'https://github.com/egorca6';
    });
    footerWrapper.append(image1);
    footerWrapper.append(copyrightElement);

    const image2 = document.createElement('img');
    image2.classList.add('image2');
    image2.src = 'https://rs.school/images/rs_school_js.svg';
    image2.addEventListener('click', () => {
        window.location.href = 'https://rs.school/js/';
    });
    footerWrapper.append(image2);

    hljs.highlightElement(codeElement);
}
