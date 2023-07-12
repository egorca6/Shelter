export const defaultLvl = 1;
export const DEFAULT_ANSWER_INDEX = 0;
export const levelDescriptions: { [key: string]: string } = {
    1: `Comma Combinator<br>
      Combine, selectors, with... commas!<br><br>
      A, B<br><br>
      This selects all Type A<br>
      and B elements. You can combine any selectors<br>
      this way, and you can specify more than two.<br><br>
      Examples<br>
      div, .fun selects all &lt;div&gt;  elements as well as<br>
      all elements with class="fun"`,
    2: `Descendant Selector<br>
      Select an element inside another element<br><br>
      A B<br><br>
      Selects all B inside of A. B is called a<br>
      descendant because it is inside of another<br>
      element.<br><br>
      Examples<br>
      p  strong selects all  &lt;strong&gt; elements that<br>
      are inside of any &lt;p&gt;`,
    3: `Adjacent Sibling Selector<br>
      Select an element that directly follows <br> another element<br><br>
      A + B<br><br>
      This selects all B elements that directly follow A<br>
      Elements that follow one another are called<br>
      siblings. They're on the same level, or depth.<br><br>
      Examples<br>
      p + .intro selects every element with
      class="intro" <br> that directly follows a &lt;p&gt;`,
    4: `You can do it...<br>
      Select all elements that follows another element<br><br>
      Combine what you learned in the last few levels<br> to solve this one!`,
    5: `You can do it...<br>
      Select direct children of elements<br><br>
      Combine what you learned in the last few levels<br> to solve this one!`,
    6: `Negation Pseudo-class<br>
      Select all elements that don't match <br> the negation selector<br><br>
      :not(X)<br><br>
      You can use this to select all elements that do <br> not match selector "X"<br><br>
      Examples<br>
      :not(apple)  selects all elements that do <br> not have 
      <apple />`,
    7: `First of Type Selector<br>
      Select the first element of a specific type<br><br>
      :first-of-type<br><br>
      Selects the first element of that type within<br> another element.<br><br>
      Examples<br>
      div:first-of-type  selects the first &lt;div&gt; in <br> any element.`,
    8: `Empty Selector<br>
      Select elements that don't have children<br><br>
      :empty<br><br>
      Selects elements that don't have any other<br>elements inside of them.<br><br>
      Examples<br>
      div:empty  selects all empty  &lt;div&gt; element.`,
    9: `First Child Pseudo-selector<br>
      Select a first child element inside of<br>
      another elements<br><br>
      :first-child<br><br>
      You can select the first child element. A child<br>element is any element that is directly nested in<br>
      another element. You can combine this pseudo-<br>selector with other selectors. <br><br>
      Examples<br>
      :first-child  selects all first child elements. <br>
      div:first-child   selects all first child  &lt;div&gt; elements.`,
    10: `Only Child Pseudo-selector<br>
      Select an element that are the only<br>
      element inside of another one.<br><br>
      :only-child<br><br>
      You can select any element that is the only<br>
      aelement inside of another one.<br><br>
      Examples<br>
      div:only-child  selects the  &lt;div&gt;<br>
      elements that are the only child of some <br>
      other element.`,
};

export const levelAnswer: { [key: string]: string } = {
    1: 'coconut, apple',
    2: 'plate coconut',
    3: 'apple + plate',
    4: 'potato ~ *',
    5: 'plate > *',
    6: ':not(plate)',
    7: 'potato:first-of-type',
    8: 'plate:empty',
    9: 'potato:first-child',
    10: 'plate:only-child',
};
