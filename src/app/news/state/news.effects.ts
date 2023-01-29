import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { loadNews, loadNewsSuccess } from './news.actions';
import { NewsApiService } from '../services/news-api.service';
import { NewsService } from './news.service';

@Injectable()
export class NewsEffects {
  constructor(
    private actions$: Actions,
    private newsApiService: NewsApiService,
    private newsService: NewsService
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
    tap(({news}) => this.newsService.loadNews(news))
  );
}
