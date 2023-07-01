import hljs from 'highlight.js';

function updateLevel(level: number) {
    const codeElement = document.querySelector('code');
    const lvlDiscription = document.querySelector('.lvl-discription');
    const lvlInfo = document.querySelector('.lvlInfo');
    const tableContainer = document.querySelector('.table-container');
    const plate1 = document.createElement('plate');
    const plate2 = document.createElement('plate');
    const plate3 = document.createElement('plate');
    const coconut1 = document.createElement('coconut');
    const coconut2 = document.createElement('coconut');
    const apple1 = document.createElement('apple');
    const apple2 = document.createElement('apple');
    const tomato1 = document.createElement('tomato');
    const tomato2 = document.createElement('tomato');
    const potato1 = document.createElement('potato');
    // coconut2.className = 'coconut';
    // const test = document.createElement('div');
    // test.className = 'coconut';
    if (lvlInfo) {
        lvlInfo.textContent = `Level ${level} of 11`;
    }
    if (codeElement) {
        switch (level) {
            case 1:
                codeElement.textContent = `
    <div class="table" 
                
        <plate />
        <plate />
                
    </div>
`;

                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, plate2);
                    plate1.classList.add('dance');
                    plate2.classList.add('dance');
                }
                break;
            case 2:
                codeElement.textContent = `
    <div class="table" 
                
        <plate />
        <coconut />
        <plate>
            <apple />
        <plate />
                
    </div>
`;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, coconut1, plate2);
                    plate2.append(coconut2);
                    coconut2.classList.add('dance');
                }
                break;
            case 3:
                codeElement.textContent = `
    <div class="table" 
                    
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
                    plate1.classList.add('dance');
                    plate2.classList.add('dance');
                }
                break;
            case 4:
                codeElement.textContent = `
    <div class="table" 
                        
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
                    plate1.classList.add('dance');
                    apple1.classList.add('dance');
                    plate2.classList.add('dance');
                    apple2.classList.add('dance');
                }
                break;

            case 5:
                codeElement.textContent = `
    <div class="table" 

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
                    potato1.classList.add('dance');
                    apple2.classList.add('dance');
                }
                break;

            case 6:
                codeElement.textContent = `
    <div class="table" 

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
                    tomato1.classList.add('dance');
                    apple2.classList.add('dance');
                }
                break;
        }

        hljs.highlightElement(codeElement);

        if (lvlDiscription) {
            switch (level) {
                case 1:
                    lvlDiscription.innerHTML = `Type Selector<br>
  Select elements by their type<br><br>
  A<br><br>
  Selects all elements of type A. Type refers to<br>
  the type of tag, so &lt;div&gt;, &lt;p&gt; and &lt;ul&gt; are<br>
  all different element types.<br><br>
  Examples<br>
  div selects all &lt;div&gt; elements.<br>
  p selects all &lt;p&gt; elements.`;
                    break;
                case 2:
                    lvlDiscription.innerHTML = `Descendant Selector<br>
Select an element inside another element<br><br>
A B<br><br>
Selects all B inside of A. B is called a<br>
descendant because it is inside of another<br>
element.<br><br>
Examples<br>
p  strong selects all  &lt;strong&gt; elements that<br>
are inside of any &lt;p&gt;`;
                    break;
                case 3:
                    lvlDiscription.innerHTML = `Adjacent Sibling Selector<br>
    Select an element that directly follows another element<br><br>
    A + B<br><br>
    This selects all B elements that directly follow A<br>
    Elements that follow one another are called<br>
    siblings. They're on the same level, or depth.<br><br>
    Examples<br>
    p + .intro selects every element with
    class="intro" that directly follows a &lt;p&gt`;
                    break;
            }
        }
    }
}

export function doNextLvl() {
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const nextLevel = currentLevel + 1;
    updateLevel(nextLevel);
    sessionStorage.setItem('currentLevel', nextLevel.toString());
}

export function doPrevLvl() {
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const prevLevel = currentLevel - 1;
    updateLevel(prevLevel);
    sessionStorage.setItem('currentLevel', prevLevel.toString());
}
