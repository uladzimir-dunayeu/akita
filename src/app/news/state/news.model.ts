export interface INews {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}

export interface INewsResponse {
  news: [];
  totalCount: number;
}

export function createNews(params: Partial<INews>) {
  const {id, title, description, publishedDate, url, fullUrl, titleImageUrl, categoryType} = params;

  return {
    id, title, description, publishedDate, url, fullUrl, titleImageUrl, categoryType
  } as INews;
}
