import { INew, ISource } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources') as HTMLElement | null;
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: INew[] | undefined) => this.view.drawNews({ articles: data }))
            );
        }
        this.controller.getSources((data: ISource[] | undefined) => this.view.drawSources({ sources: data }));
    }
}

export default App;
