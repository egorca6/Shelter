import hljs from 'highlight.js';
import { highlightLvl } from './highlight';
import { levelDescriptions } from './consts';
import { addClassToDance } from './utils';

export function updateLevel(level: number) {
    const input = document.querySelector('input');
    const heading = document.querySelector('.h2');
    const codeElement = document.querySelector('code');
    const lvlDiscription = document.querySelector('.lvl-discription');
    const lvlInfo = document.querySelector('.lvlInfo');
    const tableContainer = document.querySelector('.table-container');
    const plate1 = document.createElement('plate');
    const plate2 = document.createElement('plate');
    const plate3 = document.createElement('plate');
    const plate4 = document.createElement('plate');
    const coconut1 = document.createElement('coconut');
    const coconut2 = document.createElement('coconut');
    const apple1 = document.createElement('apple');
    const apple2 = document.createElement('apple');
    const tomato1 = document.createElement('tomato');
    const tomato2 = document.createElement('tomato');
    const potato1 = document.createElement('potato');
    const potato2 = document.createElement('potato');
    const potato3 = document.createElement('potato');
    if (input) {
        input.focus();
    }
    if (lvlInfo) {
        lvlInfo.textContent = `Level ${level} of 10`;
    }
    if (codeElement) {
        switch (level) {
            case 1:
                if (input) {
                    input.value = '';
                }
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

                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, apple1, plate2, plate3, coconut2);
                    plate1.append(coconut1);
                    plate2.append(potato1);
                    addClassToDance([coconut1, coconut2, apple1]);
                }
                if (heading) {
                    heading.textContent = 'Select the coconut and apple';
                }
                highlightLvl(level);
                break;

            case 2:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table">
                
        <plate />
        <coconut />
        <plate>
            <coconut />
        <plate />
                
    </div>
`;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, coconut1, plate2);
                    plate2.append(coconut2);
                    addClassToDance([coconut2]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = 'Select the coconut in the plate';
                }
                highlightLvl(level);
                break;

            case 3:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 
                    
        <apple />
        <plate />
        <apple />
        <plate>
            <potato />
        <plate />
        <plate>
            <tomato />
        <plate />
        
                    
    </div>
`;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(apple1, plate1, apple2, plate2, plate3);
                    plate2.append(coconut1);
                    plate3.append(potato1);
                    addClassToDance([plate1, plate2]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select every plates that's next to a apple`;
                }
                highlightLvl(level);
                break;
            case 4:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 
                        
        <potato />
        <plate>
            <apple />
        <plate />
        <plate />
        <coconut />
            
                        
    </div>
`;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(potato1, plate1, plate2, apple2);
                    plate1.append(apple1);
                    addClassToDance([plate1, plate2, apple2]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select all elements after potato`;
                }
                highlightLvl(level);
                break;

            case 5:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 

        <plate>
            <potato />
        <plate />
        <tomato />
        <plate />
        <apple />
        <plate>
            <apple />
        <plate />

    </div>
    `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, tomato1, plate2, apple1, plate3);
                    plate1.append(potato1);
                    plate2.append(apple2);
                    addClassToDance([potato1, apple2]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select all elements on the plates`;
                }
                highlightLvl(level);
                break;

            case 6:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 

        <tomato />
        <plate>
            <tomato />
        <plate />
        <apple />
        <potato />
        <plate />
        <plate>
            <apple />
        <plate />


    </div>
    `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(tomato1, plate1, apple1, potato1, plate2, plate3);
                    plate1.append(tomato2);
                    plate3.append(apple2);
                    addClassToDance([tomato1, apple2, tomato2, apple1, potato1]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select everything except the plates`;
                }
                highlightLvl(level);
                break;

            case 7:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 
    
        <tomato />
        <potato />
        <plate />
        <plate>
            <potato />
        <tomato  />
        <potato />

    </div>
        `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(tomato1, potato1, plate1, tomato2, potato2);
                    plate1.append(potato3);
                    addClassToDance([potato1]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select first potato`;
                }
                highlightLvl(level);
                break;

            case 8:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table"> 
        
        <plate />
        <plate>
            <potato />
        <tomato  />
        <plate />
        <plate>
            <tomato />
        <tomato  />
        <apple />
    
    </div>
            `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, plate2, plate3, plate4, apple1);
                    plate2.append(potato1);
                    plate4.append(tomato1);
                    addClassToDance([plate1, plate3]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select the empty plate`;
                }
                highlightLvl(level);
                break;

            case 9:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table">
            
        <plate />
        <plate>
            <potato />
            <potato />
        <plate  />
        <plate />
        <plate>
            <potato />
        <tomato  />
        <apple />
        
    </div>
                `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, plate2, plate3, plate4, apple1);
                    plate2.append(potato1);
                    plate2.append(potato2);
                    plate4.append(potato3);
                    addClassToDance([potato1, potato3]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select the top potatoes`;
                }
                highlightLvl(level);
                break;
            case 10:
                if (input) {
                    input.value = '';
                }
                codeElement.textContent = `
    <div class="table">
        
        <plate> 
            <coconut />
        <plate />
        <plate>
            <potato />
            <potato />
        <plate  />
        <plate>
            <potato />
        <tomato  />
        <plate  /
        <apple />
                
    </div>
                        `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, plate2, plate3, plate4, apple1);
                    plate1.append(coconut1);
                    plate2.append(potato1);
                    plate2.append(potato2);
                    plate3.append(potato3);
                    addClassToDance([coconut1, potato3]);
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select the coconut and the potato on the plates`;
                }
                highlightLvl(level);
                break;
        }

        hljs.highlightElement(codeElement);

        if (lvlDiscription && level in levelDescriptions) {
            lvlDiscription.innerHTML = levelDescriptions[level];
        }
    }
    sessionStorage.setItem('currentLevel', level.toString());
}

export function doNextLvl() {
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    if (currentLevel < 10) {
        const nextLevel = currentLevel + 1;
        updateLevel(nextLevel);
        sessionStorage.setItem('currentLevel', nextLevel.toString());
    }
}

export function initLevel() {
    const savedLevel = sessionStorage.getItem('currentLevel');
    const level = savedLevel ? parseInt(savedLevel) : 1;
    const divLvl = document.querySelectorAll('.div-lvl');
    divLvl[level - 1].classList.add('highlight');
    updateLevel(level);
}

export function doPrevLvl() {
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    if (currentLevel > 1) {
        const prevLevel = currentLevel - 1;
        updateLevel(prevLevel);
        sessionStorage.setItem('currentLevel', prevLevel.toString());
    }
}
