import hljs from 'highlight.js';

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
                    coconut1.classList.add('dance');
                    coconut2.classList.add('dance');
                    apple1.classList.add('dance');
                }
                if (heading) {
                    heading.textContent = 'Select the coconut and apple';
                }

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
                    coconut2.classList.add('dance');
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = 'Select the coconut in the plate';
                }
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
                    plate1.classList.add('dance');
                    plate2.classList.add('dance');
                }
                if (heading) {
                    heading.textContent = '';
                    heading.textContent = `Select every plates that's next to a apple`;
                }
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
                    plate1.classList.add('dance');
                    plate2.classList.add('dance');
                    apple2.classList.add('dance');
                }
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
                    potato1.classList.add('dance');
                    apple2.classList.add('dance');
                }
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
                    tomato1.classList.add('dance');
                    apple2.classList.add('dance');
                    tomato2.classList.add('dance');
                    apple1.classList.add('dance');
                    potato1.classList.add('dance');
                }
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
                    potato1.classList.add('dance');
                }
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
                    plate1.classList.add('dance');
                    plate3.classList.add('dance');
                }
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
                    potato1.classList.add('dance');
                    potato3.classList.add('dance');
                }
                break;
            case 10:
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
                    plate1.append(coconut1);
                    plate2.append(potato1);
                    plate2.append(potato2);
                    plate3.append(potato3);
                    coconut1.classList.add('dance');
                    potato3.classList.add('dance');
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
    Select an element that directly follows <br> another element<br><br>
    A + B<br><br>
    This selects all B elements that directly follow A<br>
    Elements that follow one another are called<br>
    siblings. They're on the same level, or depth.<br><br>
    Examples<br>
    p + .intro selects every element with
    class="intro" <br> that directly follows a &lt;p&gt`;
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
            Select all elements that don't match <br> the negation selector<br><br>
            :not(X)<br><br>
        You can use this to select all elements that do <br> not match selector "X"<br><br>
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
                    lvlDiscription.innerHTML = `Only Child Pseudo-selector<br>
            Select an element that are the only<br>
            element inside of another one.<br><br>
            :only-child<br><br>
            You can select any element that is the only<br>
            aelement inside of another one.<br><br>
            Examples<br>
            div:only-child  selects the  &lt;div&gt;<br>
            elements that are the only child of some <br>
            other element.
            `;
                    break;
            }
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
