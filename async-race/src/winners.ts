export function winnerView() {
    const app = document.querySelector<HTMLElement>('.app-wrapper');
    const winners = document.querySelector('.winners');
    winners?.addEventListener('click', () => {
        if (app) {
            //             app.innerHTML = `
            //   <h1>Winners (${2})</h1>
            //   <p>Page: ${1}</p>
            //   `;
            app.style.display = 'none';
        }
    });
}
