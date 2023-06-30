// import hljs from 'highlight.js';
// import hljs from '../node_modules/highlight.js/lib/core';

import hljs from 'highlight.js';

// export function updateViewerContent() {
//     if (highlight) {
//         highlight.innerHTML = `        <pre>
//       <code>
//           &lt;plate /&gt;
//           &lt;plate /&gt;
//       </code>
//   </pre>`;
//     }

// import hljs from '../node_modules/highlight.js/lib/core';

// }

export function doNextLvl() {
    const codeElement = document.querySelector('code');
    const lvlDiscription = document.querySelector('.lvl-discription');
    const lvlInfo = document.querySelector('.lvlInfo');
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const nextLevel = currentLevel + 1;
    if (lvlInfo) {
        lvlInfo.textContent = `Level ${nextLevel} of 11`;
    }
    if (codeElement) {
        codeElement.textContent = `
    <div class="table" 
    
        <plate />
        <plate />
        <plate />
    
    </div>
`;
        hljs.highlightElement(codeElement);

        if (lvlDiscription) {
            lvlDiscription.innerHTML = `Descendant Selector<br>
  Select an element inside another element<br><br>
  A B<br><br>
  Selects all B inside of A. B is called a<br>
  descendant because it is inside of another<br>
  element.<br><br>
  Examples<br>
  p  strong selects all  &lt;strong&gt; elements that<br>
  are inside of any &lt;p&gt;`;
        }
    }
    sessionStorage.setItem('currentLevel', nextLevel.toString());
}

export function doPrevLvl() {
    const codeElement = document.querySelector('code');
    const lvlDiscription = document.querySelector('.lvl-discription');
    const lvlInfo = document.querySelector('.lvlInfo');
    const currentLevel = parseInt(sessionStorage.getItem('currentLevel') ?? '1');
    const prevLevel = currentLevel - 1;

    if (lvlInfo) {
        lvlInfo.textContent = `Level ${prevLevel} of 11`;
    }
    if (codeElement) {
        codeElement.textContent = `
    <div class="table" 
    
        <plate />
        <plate />
    
    </div>
    `;
        hljs.highlightElement(codeElement);
        if (lvlDiscription) {
            lvlDiscription.innerHTML = `Type Selector<br>
            Select elements by their type<br><br>
            A<br><br>
            Selects all elements of type A. Type refers to<br>
            the type of tag, so &lt;div&gt;, &lt;p&gt; and &lt;ul&gt; are<br>
            all different element types.<br><br>
            Examples<br>
            div selects all &lt;div&gt; elements.<br>
            p selects all &lt;p&gt; elements.`;
        }
        // hljs.highlightAll();
        // const code = highlight.querySelector('code');
        // if (code) {
        //     hljs.highlightElement(code);
        // }
    }
    sessionStorage.setItem('currentLevel', prevLevel.toString());
}
