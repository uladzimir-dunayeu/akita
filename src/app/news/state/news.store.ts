import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { INews } from './news.model';

export interface NewsState extends EntityState<INews> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news' })
export class NewsStore extends EntityStore<NewsState> {

  constructor() {
    super();
  }

}
