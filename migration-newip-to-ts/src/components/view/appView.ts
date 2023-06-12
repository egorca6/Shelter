import { Articles, INew, ISource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news = new News();
    private sources = new Sources();

    drawNews(data: Articles | INew[] | undefined): void {
        if (data) {
            const values: INew[] = Array.isArray(data) ? data : data.articles;
            this.news.draw(values);
        }
    }

    drawSources(data: ISource[] | { sources?: ISource[] } | undefined): void {
        if (data) {
            const values: ISource[] = Array.isArray(data) ? data : data.sources || [];
            this.sources.draw(values);
        }
    }
}

export default AppView;
