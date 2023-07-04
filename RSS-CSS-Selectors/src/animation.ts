export function winAnimation(callback: () => void) {
    const up = document.querySelectorAll('.dance');
    up.forEach((div) => {
        div.classList.add('active');
    });
    setTimeout(() => {
        callback();
    }, 1000);
}

export function loseAnimation() {
    const inputHeaderMain = document.querySelector('.input-wrapper-main');

    if (inputHeaderMain) {
        inputHeaderMain.classList.add('lose');
    }
    setTimeout(() => {
        if (inputHeaderMain) {
            inputHeaderMain.classList.remove('lose');
        }
    }, 500);
}
