import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { loadNews, loadNewsSuccess } from './news.actions';
import { NewsApiService } from '../services/news-api.service';
import { NewsStore } from './news.store';

@Injectable()
export class NewsEffects {
  constructor(
    private actions$: Actions,
    private newsApiService: NewsApiService,
    private store: NewsStore
  ) {}

  @Effect({dispatch: true})
  loadNews$ = this.actions$.pipe(
    ofType(loadNews),
    switchMap(() =>
      this.newsApiService.getNews().pipe(
        map((news) => loadNewsSuccess({ news }))
      )
    )
  );

  @Effect()
  loadNewsSuccess$ = this.actions$.pipe(
    ofType(loadNewsSuccess),
    tap(({news}) => this.store.set(news))
  );
}
