export interface ISource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface INew {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export type Options =
    | Partial<{
          sources?: string;
          category?: string;
          language?: string;
      }>
    | undefined;

export interface Articles {
    status: string;
    totalResults?: number;
    articles: INew[];
}

export type SourcesResp = {
    status: string;
    sources: ISource[];
};

export type Callback<T> = (data?: T[]) => void;
