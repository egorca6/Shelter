const highlight = document.querySelector('div.highlight');
export function updateViewerContent() {
    if (highlight) {
        highlight.innerHTML = `        <pre>
      <code>
          &lt;plate /&gt;
          &lt;plate /&gt;
      </code>
  </pre>`;
    }
}
