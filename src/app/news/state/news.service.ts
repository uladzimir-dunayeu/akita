import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NewsStore, NewsState } from './news.store';
import { INews } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService extends NgEntityService<NewsState> {

  constructor(protected override store: NewsStore) {
    super(store);
  }

  loadNews(news: INews[]): void {
    this.store.set(news);
  }

}
