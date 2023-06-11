import { INew, ISource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News<INew>;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles?: INew[] }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: ISource[] }) {
        const values: ISource[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
