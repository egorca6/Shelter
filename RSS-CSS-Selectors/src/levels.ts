import hljs from 'highlight.js';

function updateLevel(level: number) {
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
    // coconut2.className = 'coconut';
    // const test = document.createElement('div');
    // test.className = 'coconut';
    if (lvlInfo) {
        lvlInfo.textContent = `Level ${level} of 10`;
    }
    if (codeElement) {
        switch (level) {
            case 1:
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

                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(plate1, apple1, plate2, plate3, coconut2);
                    plate1.append(coconut1);
                    plate2.append(potato1);
                    coconut1.classList.add('dance');
                    coconut2.classList.add('dance');
                    apple1.classList.add('dance');
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
                    tomato2.classList.add('dance');
                    apple1.classList.add('dance');
                    potato1.classList.add('dance');
                }
                break;

            case 7:
                codeElement.textContent = `
    <div class="table" 
    
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
                    potato1.classList.add('dance');
                }
                break;
            case 8:
                codeElement.textContent = `
    <div class="table" 
        
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
                    plate1.classList.add('dance');
                    plate3.classList.add('dance');
                }
                break;
            case 9:
                codeElement.textContent = `
    <div class="table" 
            
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
                    potato1.classList.add('dance');
                    potato3.classList.add('dance');
                }
                break;
            case 10:
                codeElement.textContent = `
    <div class="table" 
                
        <apple class="big" />
        <potato />
        <apple />
        <coconut class="big" />
        <potato />
            
    </div>
                    `;
                if (tableContainer) {
                    tableContainer.innerHTML = '';
                    tableContainer.append(apple1, potato1, apple2, coconut1, potato2);
                    apple1.classList.add('dance', 'big');
                    coconut1.classList.add('dance', 'big');
                }
                break;
        }

        hljs.highlightElement(codeElement);

        if (lvlDiscription) {
            switch (level) {
                case 1:
                    lvlDiscription.innerHTML = `Comma Combinator<br>
Combine, selectors, with... commas!<br><br>
A, B<br><br>
This selects all Type A<br>
and B elements. You can combine any selectors<br>
this way, and you can specify more than two.<br><br>
Examples<br>
div, .fun selects all &lt;div&gt;  elements as well as<br>
all elements with class="fun"`;
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
                case 4:
                    lvlDiscription.innerHTML = `You can do it...<br>
                Select all elements that follows another element<br><br>
            Combine what you learned in the last few levels<br> to solve this one!
  `;
                    break;
                case 5:
                    lvlDiscription.innerHTML = `You can do it...<br>
                    Select direct children of elements<br><br>
                Combine what you learned in the last few levels<br> to solve this one!`;
                    break;

                case 6:
                    lvlDiscription.innerHTML = `Negation Pseudo-class<br>
            Select all elements that don't match the negation selector<br><br>
            :not(X)<br><br>
        You can use this to select all elements that do not match selector "X"<br><br>
        Examples<br>
        :not(apple)  selects all elements that do <br> not have 
        <apple />`;
                    break;

                case 7:
                    lvlDiscription.innerHTML = `First of Type Selector<br>
            Select the first element of a specific type<br><br>
            :first-of-type<br><br>
            Selects the first element of that type within<br> another element.<br><br>
            Examples<br>
            div:first-of-type  selects the first &lt;div&gt; in <br> any element. 
            `;
                    break;
                case 8:
                    lvlDiscription.innerHTML = `Empty Selector<br>
            Select elements that don't have children<br><br>
            :empty<br><br>
            Selects elements that don't have any other<br>elements inside of them.<br><br>
            Examples<br>
            div:empty  selects all empty  &lt;div&gt; element. 
            `;
                    break;
                case 9:
                    lvlDiscription.innerHTML = `First Child Pseudo-selector<br>
            Select a first child element inside of<br>
            another elements<br><br>
            :first-child<br><br>
            You can select the first child element. A child<br>element is any element that is directly nested in<br>
            another element. You can combine this pseudo-<br>selector with other selectors. <br><br>
            Examples<br>
            :first-child  selects all first child elements. <br>
            div:first-child   selects all first child  &lt;div&gt; elements. 
            `;
                    break;
                case 10:
                    lvlDiscription.innerHTML = `Last of Type Selector<br>
            Select the last element of a specific type<br>
            :last-of-type<br><br>
            Selects each last element of that type within<br>
            another element. Remember type refers the kind<br>
            of tag, so  &lt;p&gt; and &lt;span&gt; are different types <br><br>
            Examples<br>
            div:last-of-type  selects the last &lt;div&gt; in<br>
            every element.
            `;
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
