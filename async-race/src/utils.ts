export function createEl(
    elementName: string,
    className?: string,
    content?: string,
    callback?: (event: MouseEvent) => void
): HTMLElement {
    const element = document.createElement(elementName);
    if (className) {
        element.classList.add(className);
    }
    if (content) {
        element.textContent = content;
    }
    if (callback) {
        element.addEventListener('click', callback);
    }
    return element;
}
