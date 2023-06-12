import { Articles, INew, ISource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news = new News();
    private sources = new Sources();

    drawNews(data: Articles): void {
        const values: INew[] = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: ISource[] }) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
