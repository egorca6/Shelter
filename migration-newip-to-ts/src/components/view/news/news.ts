import { INew } from '../../../types/index';
import './news.css';

class News {
    private newsContainer: HTMLElement | null;
    private newsItemTemp: HTMLTemplateElement | null;

    constructor() {
        this.newsContainer = document.querySelector('.news');
        this.newsItemTemp = document.querySelector('#newsItemTemp');
    }

    public draw(data: INew[]): void {
        const news: INew[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        news.forEach((item: INew, idx: number) => {
            const newsClone = this.newsItemTemp?.content.cloneNode(true);
            if (newsClone && newsClone instanceof DocumentFragment) {
                if (idx % 2 && newsClone.querySelector('.news__item')) {
                    newsClone.querySelector('.news__item')?.classList.add('alt');
                }
                const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (metaPhoto) {
                    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (metaAuthor) {
                    metaAuthor.textContent = item.author || item.source.name;
                }
                const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (metaDate) {
                    metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }
                const descriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) {
                    descriptionTitle.textContent = item.title;
                }
                const descriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (descriptionSource) {
                    descriptionSource.textContent = item.source.name;
                }
                const descriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
                if (descriptionContent) {
                    descriptionContent.textContent = item.description;
                }
                const readMoreLink: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (readMoreLink) {
                    readMoreLink.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            }
        });

        if (this.newsContainer) {
            this.newsContainer.innerHTML = '';
            this.newsContainer.appendChild(fragment);
        }
    }
}

export default News;
