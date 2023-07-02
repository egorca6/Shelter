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

    const plate1 = document.createElement('plate');
    const plate2 = document.createElement('plate');
    const plate3 = document.createElement('plate');
    const coconut1 = document.createElement('coconut');
    const coconut2 = document.createElement('coconut');
    const apple1 = document.createElement('apple');
    const potato1 = document.createElement('potato');

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
        lineNumbers.append(lineNumber);
    }

    const lineNumbersForViewer = document.createElement('div');
    lineNumbersForViewer.classList.add('lineNumbers-viewer');
    lineNumbersForViewer.innerHTML = ``;
    for (let i = 1; i <= 20; i += 1) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i.toString();
        lineNumbersForViewer.append(lineNumber);
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
    lvlInfo.textContent = `Level 1 of 10`;

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
    lvlDiscription.innerHTML = `Comma Combinator<br>
    Combine, selectors, with... commas!<br><br>
  A, B<br><br>
  This selects all Type A<br>
  and B elements. You can combine any selectors<br>
  this way, and you can specify more than two.<br><br>
  Examples<br>
  div, .fun selects all &lt;div&gt;  elements as well as<br>
  all elements with class="fun"`;
    lvlDiscription.classList.add('lvl-discription');

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
    inputHeaderMain.append(enter);
    inputHeaderMain.append(inputText);
    viewerWrapper.append(inputHeaderViewer);
    inputHeaderViewer.append(viewerHeaderName);
    viewerWrapper.append(viewerMain);
    viewerMain.append(lineNumbersForViewer);

    const codeContainer = document.createElement('div');
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.classList.add('hljs', 'language-xml');
    codeElement.textContent = `
    <div class="table" 

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

    preElement.append(codeElement);
    codeContainer.append(preElement);

    viewerMain.append(codeContainer);
    hljs.highlightElement(codeElement);

    container.append(section);
    container.append(levelContainer);
    levelContainer.append(navbar);
    navbar.append(lvlInfo);
    navbar.append(buttonWrapper);
    buttonWrapper.append(prevLvl);
    buttonWrapper.append(nextLvl);
    buttonWrapper.append(buttonMenu);
    levelContainer.append(lvlDiscription);

    document.body.append(container);
    document.body.append(footer);
}
