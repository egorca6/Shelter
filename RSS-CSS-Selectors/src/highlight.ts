export function highlightLevel(level: number) {
    const listLvl = document.querySelector('.list-lvl');
    if (listLvl) {
        const currentLevel = document.querySelector('.highlight');
        if (currentLevel) {
            currentLevel.classList.remove('highlight');
        }

        const targetLevel = document.querySelector(`${level}`);
        if (targetLevel) {
            targetLevel.classList.add('highlight');
        }
    }
}
