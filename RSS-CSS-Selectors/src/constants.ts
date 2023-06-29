// import { updateViewerContent } from './levels';
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
    input.setAttribute('placeholder', 'Type here');

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
    prevLvl.textContent = `<`;
    prevLvl.classList.add('prevLvl');

    const nextLvl = document.createElement('button');
    nextLvl.textContent = `>`;
    nextLvl.classList.add('nextLvl');

    const divViewerOpen = document.createElement('pre');
    divViewerOpen.classList.add('div-viewer');
    divViewerOpen.textContent = `<div class="table" `;

    const divViewerClose = document.createElement('pre');
    divViewerClose.classList.add('div-viewer');
    divViewerClose.textContent = `</div>`;

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
    viewerWrapper.appendChild(inputHeaderViewer);
    inputHeaderViewer.appendChild(viewerHeaderName);
    viewerWrapper.appendChild(viewerMain);
    viewerMain.appendChild(lineNumbersForViewer);
    viewerMain.appendChild(divViewerOpen);
    viewerMain.appendChild(highlight);
    //
    // updateViewerContent();
    highlight.innerHTML = `        <pre>
    <code>
        &lt;plate /&gt;
        &lt;plate /&gt;
    </code>
</pre>`;
    //
    container.appendChild(section);
    container.appendChild(levelContainer);
    levelContainer.appendChild(navbar);
    navbar.appendChild(lvlInfo);
    navbar.appendChild(buttonWrapper);
    buttonWrapper.appendChild(prevLvl);
    buttonWrapper.appendChild(nextLvl);
    buttonWrapper.appendChild(buttonMenu);
    levelContainer.appendChild(lvlDiscription);
    highlight.appendChild(divViewerClose);

    document.body.appendChild(container);
    document.body.appendChild(footer);
}
