export function highlightLvl(level: number) {
    const divLvl = document.querySelectorAll('.div-lvl');
    divLvl.forEach((div) => {
        div.classList.remove('highlight');
    });
    divLvl[level - 1].classList.add('highlight');
}
