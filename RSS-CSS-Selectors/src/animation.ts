export function winAnimation(callback: () => void) {
    const up = document.querySelectorAll('.dance');
    up.forEach((div) => {
        div.classList.add('active');
    });
    setTimeout(() => {
        callback();
    }, 1000);
}
