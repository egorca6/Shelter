export function winAnimation(callback: () => void) {
    const up = document.querySelectorAll('.dance');
    up.forEach((div) => {
        div.classList.add('active');
    });
    setTimeout(() => {
        callback();
    }, 1000);
}

export function loseAnimation(event: KeyboardEvent | MouseEvent) {
    const inputHeaderMain = document.querySelector('.input-wrapper-main');

    if (inputHeaderMain) {
        if (event instanceof KeyboardEvent && event.key === 'Enter') {
            inputHeaderMain.classList.add('lose');
        }
        if (event instanceof MouseEvent) {
            inputHeaderMain.classList.add('lose');
        }
    }

    setTimeout(() => {
        if (inputHeaderMain) {
            inputHeaderMain.classList.remove('lose');
        }
    }, 500);
}
