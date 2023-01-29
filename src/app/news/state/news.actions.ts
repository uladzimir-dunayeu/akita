import { createAction, props } from '@datorama/akita-ng-effects';
import { INews } from './news.model';

export const loadNews = createAction('[News] Load News');

export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  props<{ news: INews[] }>()
);
